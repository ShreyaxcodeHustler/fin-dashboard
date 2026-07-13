# FinDash — Real-Time Financial Dashboard

A Bloomberg-inspired financial dashboard built with React, featuring live-updating 
prices, interactive charts, and a fully responsive dark/light theme.

## [Live Demo](your-vercel-link) 

## Features
- Real-time price simulation with animated line charts
- Debounced search across ticker/company name
- Persistent watchlist with add/remove
- Resizable sidebar (drag-to-resize, pointer events)
- Full dark/light theme via Context API
- Fully responsive (mobile → desktop)

## Tech Stack
React · Vite · Tailwind CSS v4 · Recharts

## Key Engineering Decisions
- **State architecture**: single source of truth for stocks, watchlist stores IDs 
  only (not duplicated objects) — avoids state sync bugs
- **Performance**: capped price history to last 30 points per stock to avoid 
  unbounded memory growth; identified re-render cascade from array-based state 
  and documented the tradeoff vs. per-stock state (see [notes](link) if you wrote any)
- **Debounced search** (300ms) to simulate production-ready API search behavior

## Running locally
\`\`\`bash
git clone [your-repo-url]
cd fin-dashboard
npm install
npm run dev
\`\`\`
