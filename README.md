# C-DASH — Media Intelligence Report

A fully static, interactive communications dashboard for PSA International tracking media sentiment and stakeholder intelligence.

## Features

- **2 Main Sections**: Media Sentiment (Part A) & Stakeholder Intelligence (Part B)
- **Interactive Visualizations**: Scatter plot for stakeholder matrix, bar charts for competitor coverage
- **Fully Static**: No build step required, works directly on GitHub Pages
- **Data-Driven**: All data in `data/dashboard.json` for easy updates via n8n or manual editing

## Project Structure

```
comms-dashboard/
├── index.html                  # Main page
├── css/
│   └── styles.css              # Custom overrides
├── js/
│   ├── data.js                 # Data loader + embedded fallback
│   ├── components.js           # HTML rendering functions
│   ├── charts.js               # Chart.js initializations
│   └── app.js                  # Tab navigation + modal
├── data/
│   └── dashboard.json          # Main data file (n8n writes here)
└── assets/
    └── psa-logo.png            # PSA logo
```

## Data Flow

### Manual Updates
Edit `data/dashboard.json` and refresh the browser.

### n8n Automation Flow
```
newsdata.io → AI Analysis → Generate dashboard.json → Git Push → GitHub Pages auto-deploys
```

### Fallback
If `data/dashboard.json` fails to load, the site falls back to embedded data in `js/data.js`.

## Quick Start

### Option 1: Open Directly
Open `index.html` in your browser (uses embedded fallback data).

### Option 2: Local Server
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000

## Sections

### Part A — Media Sentiment
- Executive Overview (at a glance, sentiment drivers, key implications)
- KPI Row (4 metrics: Sentiment, Intensity, Media Profile, Headline Risk)
- Positive Developments + Watch Items
- Competitor Coverage Bar Chart
- Strategic Dashboard (10-indicator table with trend arrows)
- Competitor Landscape (6 companies)

### Part B — Stakeholder Intelligence
- Stakeholder Executive Summary (ecosystem, opportunities, risks)
- KPI Row (4 metrics: Ecosystem, Coverage Pattern, Stakeholders, Engagement Model)
- Stakeholder Matrix 2×2 (interactive scatter plot with tooltips)
- Top 10 Priority Stakeholders
- Engagement Status
- Priority Media Relationship Tracker (with star ratings)
- Stakeholder Influence Tracker
- Priority Media Relationships

## Technologies

- **Tailwind CSS** (CDN) — Styling
- **Chart.js** — Interactive charts (scatter plot, bar chart)
- **Vanilla JavaScript** — No frameworks, no build step

## GitHub Pages Deployment

1. Push to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch" and choose `main` branch
4. Dashboard will be available at: `https://<username>.github.io/<repo-name>/`
