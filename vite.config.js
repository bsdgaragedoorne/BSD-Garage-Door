import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2019',
    cssCodeSplit: false,
    assetsInlineLimit: 2048,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          // React and the router are needed by every page, so they share one
          // vendor chunk. Everything else - the three.js stack behind the 3D
          // door - is left for Rollup to place, which keeps it inside the
          // chunk that component imports on demand rather than in the bundle
          // every visitor downloads. Nested copies (the [1] rather than the
          // last segment) stay with whichever package pulled them in.
          const pkg = id.split('node_modules/')[1] || '';
          return /^(react|react-dom|react-router|react-router-dom|scheduler)\//.test(pkg)
            ? 'vendor'
            : undefined;
        },
      },
    },
  },
});
