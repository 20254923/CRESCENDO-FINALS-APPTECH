# Deployment Notes

## GitHub Checklist

Before pushing:

```bash
npm install
npm run build
```

Commit source files, not generated artifacts:

- Commit `src/`, `server/`, `index.html`, `package.json`, `package-lock.json`, `vite.config.js`, `README.md`, and `DEPLOYMENT.md`.
- Do not commit `node_modules/`, `dist/`, logs, or local server data.

## Static Hosting

Crescendo is a Vite single-page app.

Recommended settings:

- Build command: `npm run build`
- Publish/output directory: `dist`

For client-side routing, configure your host to fallback all routes to `index.html`.

## Backend Later

The included backend scaffold is not required for the static app. Use it later when you are ready to persist accounts and progress across devices.
