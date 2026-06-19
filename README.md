# C-DASH — Communications Dashboard

A fully static, interactive communications dashboard for PSA International tracking media coverage, sentiment, reputation, and stakeholder insights.

## Features

- **8 Navigation Sections**: Executive Overview, Strategic Dashboard, Media Bias, Competitor Analyses, Media Visibility, Message Effectiveness, Reputation Health, Stakeholder Intelligence
- **Interactive Charts**: Chart.js-powered visualizations with tooltips and hover effects
- **Fully Static**: No build step required, works directly on GitHub Pages
- **Data-Driven**: All data in `js/data.js` for easy daily updates

## Quick Start

### Option 1: Open Directly

Simply open `index.html` in your browser. The data is embedded in `js/data.js`, so no server is needed.

### Option 2: Local Server

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

## Project Structure

```
comms-dashboard/
├── index.html          # Main page
├── css/
│   └── styles.css      # Custom overrides
├── js/
│   ├── data.js         # All dashboard data (edit this for updates)
│   ├── components.js   # HTML rendering functions
│   ├── charts.js       # Chart.js initializations
│   └── app.js          # Tab navigation and initialization
└── assets/
    └── psa-logo.png    # PSA logo
```

## Updating Data

Edit `js/data.js` to update the dashboard. All data is organized by section:

- `kpis` — Top KPI cards
- `executiveInsight` — Executive summary text
- `signals` — Signals & actions table
- `priorityStakeholders` — Priority stakeholders list
- `narrativeTrend` — Narrative trend chart data
- `mediaTrend` — Media mentions trend data
- `messagePickup` — Message pickup by theme
- `risks` — Risk alerts
- `articles` — Article details table
- `competitors` — Competitor profiles
- And more...

## Technologies Used

- **Tailwind CSS** (CDN) — Styling
- **Chart.js** — Interactive charts
- **Vanilla JavaScript** — No frameworks, no build step

## GitHub Pages Deployment

1. Push to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" and choose `main` branch
4. Dashboard will be available at: `https://<username>.github.io/<repo-name>/`
