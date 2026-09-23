/**
 * Server-side proxy for the Google Places API (New) Place Details endpoint.
 *
 * WHY A FUNCTION: the Google API key must never reach the browser. This runs on
 * Netlify's servers, reads the key from the GOOGLE_PLACES_API_KEY environment
 * variable, calls Google, and returns ONLY the trimmed review data the frontend
 * needs. The key is never included in the response and never logged.
 *
 * The key is supplied by the Netlify dashboard in production, or a local .env
 * file (git-ignored) during `netlify dev`. It is intentionally NOT VITE_-prefixed
 * so Vite can never inline it into the client bundle.
 */

// BSD Garage Door — verified Google Business Profile Place ID (public, not a secret).
const PLACE_ID = 'ChIJb5IBMepv5IkRP8foasQrKQc';

// Only the fields the Testimonials section renders. Keeps the response small and
// the (Enterprise + Atmosphere) Place Details billing scoped to what we use.
const FIELD_MASK = 'displayName,rating,userRatingCount,reviews';

// Cache at the CDN edge so repeat visitors do not each trigger a Google call.
// Browsers revalidate; the edge serves a shared copy for 6h and can serve stale
// for a further 24h while refreshing. Well within Google's caching limits.
const CACHE_HEADER = 'public, max-age=0, s-maxage=21600, stale-while-revalidate=86400';

const jsonResponse = (statusCode, payload, cache) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    ...(cache ? { 'Cache-Control': CACHE_HEADER } : { 'Cache-Control': 'no-store' }),
  },
  body: JSON.stringify(payload),
});

export const handler = async () => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  // Missing key: fail gracefully. The frontend keeps its fallback reviews.
  // Do not echo any key material; do not 500 the whole page.
  if (!apiKey) {
    return jsonResponse(503, { error: 'reviews_unavailable' }, false);
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
      headers: {
        // Key is sent as a request header to Google only — server to server.
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': FIELD_MASK,
      },
    });

    if (!res.ok) {
      // Upstream error (quota, invalid key, etc.). Do not leak Google's body.
      return jsonResponse(502, { error: 'google_api_error' }, false);
    }

    const data = await res.json();

    // Reshape to exactly what ReviewCard consumes. Nothing else is returned.
    const reviews = Array.isArray(data.reviews)
      ? data.reviews.map((r) => ({
          name: r.authorAttribution?.displayName || '',
          photo: r.authorAttribution?.photoUri || '',
          rating: typeof r.rating === 'number' ? r.rating : 5,
          text: r.text?.text || r.originalText?.text || '',
          date: r.relativePublishTimeDescription || '',
          googleMapsUri: r.googleMapsUri || '',
        }))
      : [];

    return jsonResponse(
      200,
      {
        name: data.displayName?.text || '',
        rating: typeof data.rating === 'number' ? data.rating : null,
        userRatingCount: typeof data.userRatingCount === 'number' ? data.userRatingCount : null,
        reviews,
      },
      true
    );
  } catch (err) {
    // Network/parse failure. Frontend falls back. Never surface key material.
    return jsonResponse(502, { error: 'reviews_unavailable' }, false);
  }
};
