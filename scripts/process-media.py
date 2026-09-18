#!/usr/bin/env python3
"""Resize generated photos + the BSD badge into the site's public/img tree."""
from pathlib import Path
from PIL import Image, ImageFilter, ImageDraw

ASSETS = Path("/Users/shiranyacobi/.cursor/projects/Users-shiranyacobi-Documents-Apps-BSD-Garage-Door/assets")
LOGO_SRC = ASSETS / "bsd-transparent-66aa2be0-317e-4df4-a68a-7e64ab91ec4e.jpg"
OUT = Path("/Users/shiranyacobi/Documents/Apps/BSD-Garage-Door/public/img")
GALLERY = OUT / "gallery"
OUT.mkdir(parents=True, exist_ok=True)
GALLERY.mkdir(exist_ok=True)

WEBP = {"quality": 82, "method": 4}


def load(name):
    return Image.open(ASSETS / name).convert("RGB")


def save_webp(im, dest, size=None, quality=82):
    img = im.copy()
    if size:
        img.thumbnail(size, Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, "WEBP", quality=quality, method=4)
    print(f"  {dest.name} {img.size}")


def cover(im, w, h):
    src_w, src_h = im.size
    scale = max(w / src_w, h / src_h)
    nw, nh = int(src_w * scale), int(src_h * scale)
    resized = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    top = (nh - h) // 2
    return resized.crop((left, top, left + w, top + h))


def knockout_black(im, threshold=28):
    rgba = im.convert("RGBA")
    px = rgba.load()
    w, h = rgba.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r < threshold and g < threshold and b < threshold:
                px[x, y] = (r, g, b, 0)
    # tighten crop to opaque pixels
    bbox = rgba.getbbox()
    if bbox:
        pad = 12
        x0, y0, x1, y1 = bbox
        x0 = max(0, x0 - pad)
        y0 = max(0, y0 - pad)
        x1 = min(w, x1 + pad)
        y1 = min(h, y1 + pad)
        rgba = rgba.crop((x0, y0, x1, y1))
    return rgba


print("logo")
logo = knockout_black(Image.open(LOGO_SRC))
logo.save(OUT / "logo.png", "PNG")
save_webp(logo.convert("RGBA"), OUT / "logo-440.webp", (440, 440), quality=90)
save_webp(logo.convert("RGBA"), OUT / "logo-240.webp", (240, 240), quality=90)

# apple touch + favicon on dark metal
icon = cover(logo.convert("RGB"), 180, 180)
# actually keep transparency on dark
touch_bg = Image.new("RGBA", (180, 180), (11, 12, 14, 255))
l = logo.copy()
l.thumbnail((168, 168), Image.Resampling.LANCZOS)
touch_bg.paste(l, ((180 - l.size[0]) // 2, (180 - l.size[1]) // 2), l)
touch_bg.convert("RGB").save(OUT / "apple-touch-icon.png", "PNG")
fav = touch_bg.resize((32, 32), Image.Resampling.LANCZOS).convert("RGB")
fav.save(Path("/Users/shiranyacobi/Documents/Apps/BSD-Garage-Door/public/favicon.png"), "PNG")

print("hero / van / why / pagehead")
hero = load("bsd-hero.jpg")
save_webp(hero, OUT / "hero-poster-1280.webp", (1280, 1280))
save_webp(hero, OUT / "hero-poster-860.webp", (860, 860))
save_webp(hero, OUT / "hero-poster-560.webp", (560, 560))

van = load("bsd-van.jpg")
save_webp(van, OUT / "van-cutout-1100.webp", (1100, 1100))
save_webp(van, OUT / "van-cutout-760.webp", (760, 760))
save_webp(van, OUT / "van-cutout-520.webp", (520, 520))

why = load("bsd-why.jpg")
save_webp(why, OUT / "why-1280.webp", (1280, 1280))
save_webp(why, OUT / "why-860.webp", (860, 860))
save_webp(why, OUT / "why-560.webp", (560, 560))

page = load("bsd-pagehead.jpg")
save_webp(page, OUT / "pagehead-1600.webp", (1600, 1600))
save_webp(page, OUT / "pagehead-1100.webp", (1100, 1100))
save_webp(page, OUT / "pagehead-760.webp", (760, 760))

print("about")
save_webp(load("bsd-about-a.jpg"), OUT / "about-a-760.webp", (760, 1013))
save_webp(load("bsd-about-a.jpg"), OUT / "about-a-460.webp", (460, 613))
save_webp(load("bsd-about-b.jpg"), OUT / "about-b-760.webp", (760, 760))
save_webp(load("bsd-about-b.jpg"), OUT / "about-b-460.webp", (460, 460))

print("services")
sv = {
    "sv-springs-replacement": "bsd-sv-springs.jpg",
    "sv-opener-repair": "bsd-sv-opener-repair.jpg",
    "sv-opener-installation": "bsd-sv-opener-install.jpg",
    "sv-off-track-repair": "bsd-sv-offtrack.jpg",
    "sv-rollers-replacement": "bsd-sv-rollers.jpg",
    "sv-hinges-replacement": "bsd-sv-hinges.jpg",
    "sv-tracks-replacement": "bsd-sv-tracks.jpg",
    "sv-weather-strip-replacement": "bsd-sv-weather.jpg",
    "sv-panels-repair": "bsd-sv-panels-repair.jpg",
    "sv-panels-replacement": "bsd-sv-panels-replace.jpg",
    "sv-new-door-installation": "bsd-sv-new-door.jpg",
    "sv-emergency-services": "bsd-sv-emergency.jpg",
    "sv-service-and-maintenance": "bsd-sv-maintenance.jpg",
}
for slug, src in sv.items():
    im = load(src)
    save_webp(im, OUT / f"{slug}-720.webp", (720, 720))
    save_webp(im, OUT / f"{slug}-440.webp", (440, 440))

print("gallery")
gallery_src = {
    1: "bsd-g-opener.jpg",
    2: "bsd-sv-springs.jpg",
    3: "bsd-g-tracks.jpg",
    4: "bsd-sv-new-door.jpg",
    5: "bsd-sv-panels-repair.jpg",
    6: "bsd-sv-panels-replace.jpg",
    7: "bsd-sv-springs.jpg",
    8: "bsd-sv-opener-install.jpg",
    9: "bsd-sv-springs.jpg",
    11: "bsd-sv-panels-replace.jpg",
    12: "bsd-g-double.jpg",
    14: "bsd-why.jpg",
    17: "bsd-g-sandstone.jpg",
}
for n, src in gallery_src.items():
    im = load(src)
    tag = f"g{n:02d}"
    save_webp(im, GALLERY / f"{tag}-460.webp", (460, 613))  # portrait-ish for rail
    save_webp(im, GALLERY / f"{tag}-760.webp", (760, 1013))
    save_webp(im, GALLERY / f"{tag}-w560.webp", (560, 420))
    save_webp(im, GALLERY / f"{tag}-w860.webp", (860, 645))
    # full uncropped
    save_webp(im, GALLERY / f"{tag}-full.webp", (1600, 1600), quality=86)

print("og")
og = cover(hero, 1200, 630)
og.save(OUT / "og-image.jpg", "JPEG", quality=86)
print("done")
