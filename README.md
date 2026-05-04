# Crescendo

Crescendo is a luxury black-and-gold music learning platform built with React and Vite. It includes student registration, demo login, instrument studios, lesson pages, notes, quiz review, score history, per-account progress, rank tracking, and a metronome.

## Features

- Student-only registration and login
- One-click demo account
- 6 instrument studios
- 54 lesson modules with verified media links
- Tier locking and progress tracking
- Lesson notes and mark-for-review
- Quiz review explanations and score history
- Rank shown in the navbar
- Responsive layouts for phone, tablet, laptop, and desktop
- Backend scaffold for future cross-device persistence

## Run Locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`.

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Optional Backend Scaffold

The frontend currently uses browser localStorage for accounts and progress. A backend scaffold is included for a later migration:

```bash
npm run api
```

Health check:

```bash
curl http://127.0.0.1:8787/api/health
```

## Deploy

This project is ready for static deployment on services like Vercel, Netlify, or GitHub Pages-style static hosts after running `npm run build`.

For Vercel/Netlify:

- Build command: `npm run build`
- Output directory: `dist`
