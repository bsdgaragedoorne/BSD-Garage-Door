import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/base.css';
import './styles/blocks.css';
import './styles/premium.css';
import './styles/light.css';
import './styles/shop.css';
import './styles/door3d.css';
import './styles/service.css';
import './styles/location.css';
import './styles/home.css';
import './styles/review-widget.css';

const root = document.getElementById('root');
const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Prerendered HTML is present in production, so hydrate rather than re-render.
if (root.hasChildNodes()) hydrateRoot(root, tree);
else createRoot(root).render(tree);
