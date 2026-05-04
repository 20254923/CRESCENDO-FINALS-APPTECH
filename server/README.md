# Crescendo API Scaffold

This is a backend-ready scaffold for moving accounts and progress out of browser `localStorage` later.

Run it with:

```powershell
npm run api
```

Endpoints:

- `GET /api/health`
- `POST /api/register`
- `POST /api/login`
- `GET /api/progress?userId=...`
- `PUT /api/progress`

The current React app still uses localStorage. The next backend step is adding a small client service that swaps local progress reads/writes for these endpoints.
