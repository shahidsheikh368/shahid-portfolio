# Shahid Sheikh Portfolio

Modern, responsive, frontend-only portfolio built with React and Vite. Includes dual theme toggle, glassmorphism cards, scroll reveal, project modal, and contact form with mailto integration.

## Project Structure
- `index.html`
- `package.json`
- `vite.config.js`
- `public/resume.pdf`
- `src/main.jsx`
- `src/App.jsx`
- `src/data.js`
- `src/styles.css`

## Run Locally
1. Install dependencies

```
npm install
```

2. Start dev server

```
npm run dev
```

## Build
```
npm run build
```

## Deployment Guide

### Vercel
1. Push the project to GitHub.
2. In Vercel, import the repo.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

### Netlify
1. Push the project to GitHub.
2. In Netlify, create a new site from Git.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy.

## Customize
- Replace `public/resume.pdf` with your actual resume.
- Update social/profile links in `src/data.js`.
- Update hero background image in `src/styles.css`.
- Update email/WhatsApp details in `src/App.jsx`.
