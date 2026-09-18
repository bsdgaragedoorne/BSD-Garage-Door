import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App, { allRoutes } from './App.jsx';
import { headStore, renderHeadToString } from './components/Seo.jsx';

export { allRoutes };

export function render(url) {
  headStore.current = null;
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  return { html, head: renderHeadToString(headStore.current) };
}
