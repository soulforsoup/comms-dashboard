// C-DASH Dashboard Data
// Single source of truth for all dashboard content
// Edit this file to update the dashboard

const DASHBOARD_DATA = {
  // Header
  header: {
    title: 'C-DASH — Communications Dashboard for Actionable Stakeholder Horizon-scanning',
    subtitle: 'Reputation, Media and Stakeholder Intelligence',
    reportingPeriod: '1 Jan 2026 – 8 Jun 2026',
  },

  // KPI Cards (9 cards, always visible)
  kpis: [
    { title: 'Media Mentions', value: '28', trend: { value: '+12%', direction: 'up' } },
    { title: 'Tier 1 Coverage', value: '100%', subtitle: 'All tier 1 outlets' },
    { title: 'Sentiment Rating', value: '8.7/10', status: 'green', trend: { value: '+0.3', direction: 'up' } },
    { title: 'Early Risk Signals', value: '4', status: 'amber', subtitle: 'Monitor closely' },
    { title: 'Key Message Pick-Up', value: '85%', trend: { value: '+5%', direction: 'up' } },
    { title: 'Quote Pick-Up', value: 'High', subtitle: 'CEO visibility strong' },
    { title: 'Narrative Alignment', value: '87%', status: 'green' },
    { title: 'Media Share', value: '22%', subtitle: 'Of sector coverage' },
    { title: 'Time to Action', value: '2.3d', trend: { value: '-15%', direction: 'down' } },
  ],

  // Executive Insight
  executiveInsight: {
    title: 'Executive Summary (1 Jan – 8 Jun 2026)',
    text: '<strong class="text-slate-800">PSA\'s media narrative is overwhelmingly positive and highly controlled</strong>, centred on resilience, neutrality, innovation, and sustainability. However, <strong class="text-amber-700">latent risks are emerging beneath the surface</strong> — particularly geopolitical exposure (China expansion), technology execution risks (hydrogen/automation), and economic headwinds — which require proactive narrative management before they crystallise into negative coverage.',
  },

  // Executive Overview - Extra KPIs
  executiveKpis: [
    { title: 'Media Tone Score', value: '8.7/10', status: 'green', subtitle: 'Weighted sentiment' },
    { title: 'Influencer Coverage', value: '12', subtitle: 'Key voices engaged', trend: { value: '+3 vs last month', direction: 'up' } },
  ],

  // Signals & Actions Table
  signals: [
    { signal: 'Geopolitical Alert', summary: 'China expansion coverage requires careful positioning', stakeholder: 'TradeWinds, WorldCargo News', action: 'Prepare narrative', priority: 'High' },
    { signal: 'Sustainability Validation', summary: 'Hydrogen transition credibility needs proof points', stakeholder: 'ESG Media, Industry Analysts', action: 'Share pilot results', priority: 'High' },
    { signal: 'CSR Amplification', summary: 'Indonesia CSR success underutilized globally', stakeholder: 'Global Tier 1 Media', action: 'Pitch feature stories', priority: 'Medium' },
    { signal: 'Leadership Visibility', summary: 'CEO/Chairman quotes driving narrative effectively', stakeholder: 'All Major Outlets', action: 'Maintain cadence', priority: 'Low' },
  ],

  // Priority Stakeholders
  priorityStakeholders: [
    { name: 'Ong Kim Pong', role: 'CEO', organisation: 'PSA International', status: 'Active', statusColor: 'emerald' },
    { name: 'Peter Voser', role: 'Chairman', organisation: 'PSA International', status: 'Active', statusColor: 'emerald' },
    { name: 'TradeWinds Editorial', role: 'Editor', organisation: 'TradeWinds', status: 'Engaged', statusColor: 'blue' },
    { name: 'WorldCargo News Features', role: 'Features Editor', organisation: 'WorldCargo News', status: 'Engaged', statusColor: 'blue' },
    { name: 'MPA Singapore', role: 'Strategic Partner', organisation: 'Government', status: 'Collaborative', statusColor: 'emerald' },
    { name: 'Xiamen Port Group', role: 'Partner', organisation: 'China', status: 'Monitor', statusColor: 'amber' },
  ],

  // Narrative Trend Chart Data
  narrativeTrend: [
    { month: 'Jan', positive: 78, neutral: 18, negative: 4 },
    { month: 'Feb', positive: 82, neutral: 15, negative: 3 },
    { month: 'Mar', positive: 88, neutral: 12, negative: 0 },
    { month: 'Apr', positive: 86, neutral: 14, negative: 0 },
    { month: 'May', positive: 87, neutral: 13, negative: 0 },
  ],

  // Media Trend Chart Data
  mediaTrend: [
    { week: 'Early Mar', mentions: 2, tier1: 2 },
    { week: '9-10 Mar', mentions: 8, tier1: 8 },
    { week: 'Late Mar', mentions: 3, tier1: 3 },
    { week: 'Early Apr', mentions: 2, tier1: 2 },
    { week: 'Mid Apr', mentions: 3, tier1: 3 },
    { week: 'Late Apr', mentions: 2, tier1: 2 },
    { week: 'Early May', mentions: 1, tier1: 1 },
    { week: '10-11 May', mentions: 7, tier1: 7 },
  ],

  // Media Source Breakdown
  mediaSourceBreakdown: [
    { type: 'Trade Media', count: 20 },
    { type: 'Regional Media', count: 7 },
    { type: 'Industry Press', count: 1 },
  ],

  // Message Pickup by Theme
  messagePickup: [
    { theme: 'Sustainability', pickup: 89 },
    { theme: 'Resilience', pickup: 87 },
    { theme: 'Innovation', pickup: 85 },
    { theme: 'Network Strategy', pickup: 82 },
    { theme: 'Community Impact', pickup: 78 },
    { theme: 'Neutrality', pickup: 75 },
  ],

  // Sentiment Donut
  sentimentDonut: { positive: 87, neutral: 13, negative: 0 },

  // Risk Alerts
  risks: [
    { issue: 'Geopolitical Exposure - China expansion', severity: 'High', geography: 'China', trend: 'Emerging', action: 'Monitor geopolitical narrative; prepare positioning on Xiamen partnership' },
    { issue: 'Transition Risk - Hydrogen & automation', severity: 'Medium', geography: 'Global', trend: 'Stable', action: 'Build credibility proof points; showcase pilot successes' },
    { issue: 'Economic Headwinds - Margin pressure', severity: 'Medium', geography: 'Global', trend: 'Stable', action: 'Manage expectations on cost pressures; emphasize long-term value' },
    { issue: 'Narrative Dependence - "Neutral operator" positioning', severity: 'Low', geography: 'Global', trend: 'Stable', action: 'Diversify narrative themes; test alternative positioning' },
  ],

  // Negative Coverage Table (Embedded Risk Issues)
  negativeCoverage: [
    { issue: 'Macroeconomic pressure', severity: 'Medium', geography: 'Global', trend: 'stable', mentions: 5 },
    { issue: 'Geopolitical uncertainty', severity: 'Medium', geography: 'Asia', trend: 'up', mentions: 3 },
    { issue: 'Execution risks (automation)', severity: 'Low', geography: 'Singapore', trend: 'stable', mentions: 2 },
    { issue: 'Capex investment pressure', severity: 'Low', geography: 'Singapore', trend: 'stable', mentions: 2 },
  ],

  // Top Media Outlets
  topMediaOutlets: [
    { name: 'WorldCargo News', tier: 1, mentions: 9, sentiment: 'positive' },
    { name: 'TradeWinds', tier: 1, mentions: 4, sentiment: 'positive' },
    { name: 'Hellenic Shipping News', tier: 1, mentions: 3, sentiment: 'positive' },
    { name: 'Container News', tier: 1, mentions: 2, sentiment: 'positive' },
    { name: 'Asia Cargo News', tier: 1, mentions: 2, sentiment: 'positive' },
  ],

  // Article Details Table
  articles: [
    { date: '9 Mar 2026', source: 'TradeWinds', geography: 'Global', topic: 'Financial results', sentiment: 'Positive', keyMessage: 'Strong growth despite uncertainty; resilience' },
    { date: '9 Mar 2026', source: 'WorldCargo News', geography: 'Global', topic: 'Financial performance', sentiment: 'Positive', keyMessage: 'Record 105m TEU; strong balance sheet' },
    { date: '9 Mar 2026', source: 'AsiaOne', geography: 'Singapore', topic: 'Financial results', sentiment: 'Positive', keyMessage: 'Revenue + throughput growth' },
    { date: '30 Mar 2026', source: 'WorldCargo News', geography: 'Singapore', topic: 'Innovation', sentiment: 'Positive', keyMessage: 'Living Lab innovation ecosystem' },
    { date: '31 Mar 2026', source: 'WorldCargo News', geography: 'Europe', topic: 'Sustainability', sentiment: 'Positive', keyMessage: 'Electrification, decarbonisation' },
    { date: '6 Apr 2026', source: 'WorldCargo News', geography: 'Singapore', topic: 'Infrastructure', sentiment: 'Neutral', keyMessage: 'Tuas expansion & scale' },
    { date: '16 Apr 2026', source: 'Hellenic Shipping News', geography: 'Singapore', topic: 'Technology', sentiment: 'Positive', keyMessage: 'Safety, efficiency, automation' },
    { date: '22-24 Apr 2026', source: 'Multiple trade media', geography: 'Singapore', topic: 'Automation', sentiment: 'Positive', keyMessage: 'Autonomous shipping innovation' },
    { date: '23 Apr 2026', source: 'Container News', geography: 'Singapore', topic: 'Sustainability', sentiment: 'Positive', keyMessage: 'Scope 3 decarbonisation' },
    { date: '30 Apr-1 May 2026', source: 'ACN / Splash247', geography: 'China', topic: 'Expansion', sentiment: 'Positive', keyMessage: 'Strategic China investment' },
    { date: '4 May 2026', source: 'ITJ', geography: 'Europe', topic: 'Leadership change', sentiment: 'Neutral', keyMessage: 'Leadership continuity' },
    { date: '6 May 2026', source: 'WorldCargo News', geography: 'Europe', topic: 'Sustainability', sentiment: 'Positive', keyMessage: 'Hydrogen transition' },
    { date: '9-11 May 2026', source: 'Indonesian media (7+ articles)', geography: 'Indonesia', topic: 'CSR', sentiment: 'Positive', keyMessage: 'Education, youth, MSMEs' },
  ],

  // Action Panel
  actions: [
    { title: 'Monitor and prepare positioning for Xiamen expansion geopolitical narrative', priority: 'High', owner: 'Corporate Comms', dueDate: '2026-06-15', status: 'in-progress' },
    { title: 'Build hydrogen and automation execution credibility with proof points', priority: 'High', owner: 'Innovation Comms', dueDate: '2026-06-20', status: 'pending' },
    { title: 'Amplify Indonesia CSR success globally through tier 1 media', priority: 'Medium', owner: 'Media Relations', dueDate: '2026-06-10', status: 'in-progress' },
    { title: 'Maintain engagement with TradeWinds and WorldCargo News editors', priority: 'Medium', owner: 'Media Relations', dueDate: '2026-06-30', status: 'pending' },
    { title: 'Develop alternative narrative themes beyond "neutral operator" positioning', priority: 'Low', owner: 'Strategy Team', dueDate: '2026-07-15', status: 'pending' },
  ],

  // Media Bias - Narrative Polarity Spectrum
  narrativePolarity: [
    { id: '1', title: 'DP World expands African footprint', position: -75, sentiment: 0.8, reach: 3, theme: 'expansion' },
    { id: '2', title: 'APM Terminals automation milestone', position: -60, sentiment: 0.7, reach: 2.5, theme: 'automation' },
    { id: '3', title: 'Hutchison Ports digital twin success', position: -45, sentiment: 0.6, reach: 2, theme: 'digital' },
    { id: '4', title: 'Global trade resilience focus', position: 0, sentiment: 0.5, reach: 4, theme: 'neutral' },
    { id: '5', title: 'Port congestion challenges', position: -10, sentiment: 0.3, reach: 2, theme: 'challenge' },
    { id: '6', title: 'PSA Living Lab innovation', position: 65, sentiment: 0.85, reach: 3, theme: 'innovation' },
    { id: '7', title: 'Tuas expansion milestone', position: 70, sentiment: 0.75, reach: 2.5, theme: 'infrastructure' },
    { id: '8', title: 'PSA hydrogen transition leadership', position: 80, sentiment: 0.9, reach: 3.5, theme: 'sustainability' },
    { id: '9', title: 'Node-to-Network strategy gains traction', position: 75, sentiment: 0.8, reach: 2.5, theme: 'strategy' },
  ],

  // Media Bias - Narrative Heatmap
  narrativeHeatmap: [
    { name: 'Automation & AI', intensity: 92, trend: 'rising' },
    { name: 'Decarbonisation', intensity: 88, trend: 'rising' },
    { name: 'Supply Chain Resilience', intensity: 85, trend: 'stable' },
    { name: 'Trade Facilitation', intensity: 78, trend: 'stable' },
    { name: 'Geopolitical Risk', intensity: 72, trend: 'rising' },
    { name: 'Port Congestion', intensity: 68, trend: 'declining' },
    { name: 'Digital Transformation', intensity: 85, trend: 'rising' },
    { name: 'Infrastructure Investment', intensity: 75, trend: 'stable' },
    { name: 'Green Logistics', intensity: 80, trend: 'rising' },
    { name: 'Maritime Security', intensity: 65, trend: 'stable' },
    { name: 'Labor Relations', intensity: 58, trend: 'declining' },
    { name: 'Emerging Markets', intensity: 70, trend: 'stable' },
  ],

  // Media Bias - Sentiment Distribution Wheel
  sentimentDistribution: [
    { name: 'Positive PSA', value: 42, color: '#3b82f6' },
    { name: 'Neutral Coverage', value: 28, color: '#94a3b8' },
    { name: 'Competitor Positive', value: 18, color: '#dc2626' },
    { name: 'Adversarial', value: 8, color: '#991b1b' },
    { name: 'Emerging Risk', value: 4, color: '#f59e0b' },
  ],

  // Media Bias - Narrative Momentum Tracker
  narrativeMomentum: [
    { theme: 'PSA automation leadership', velocity: 85, change: 'rising', spike: false, risk: false },
    { theme: 'Hydrogen transition', velocity: 78, change: 'rising', spike: true, risk: false },
    { theme: 'Geopolitical China exposure', velocity: 45, change: 'rising', spike: false, risk: true },
    { theme: 'Tuas expansion progress', velocity: 72, change: 'stable', spike: false, risk: false },
    { theme: 'Competitor APM automation', velocity: 68, change: 'rising', spike: false, risk: false },
    { theme: 'Port congestion easing', velocity: 35, change: 'declining', spike: false, risk: false },
    { theme: 'Indonesia CSR impact', velocity: 82, change: 'rising', spike: true, risk: false },
    { theme: 'Trade tariff uncertainty', velocity: 52, change: 'stable', spike: false, risk: true },
  ],

  // Media Bias - Stakeholder Influence Matrix (media reach vs alignment)
  stakeholderInfluence: [
    { name: 'TradeWinds', category: 'Trade Media', x: 85, y: 80, quadrant: 'ally' },
    { name: 'WorldCargo News', category: 'Trade Media', x: 80, y: 85, quadrant: 'ally' },
    { name: 'Financial Times', category: 'Financial Media', x: 90, y: 60, quadrant: 'influential' },
    { name: 'Bloomberg Shipping', category: 'Financial Media', x: 88, y: 55, quadrant: 'influential' },
    { name: 'Hellenic Shipping', category: 'Trade Media', x: 75, y: 75, quadrant: 'ally' },
    { name: 'Industry Analyst A', category: 'Analyst', x: 70, y: 45, quadrant: 'influential' },
    { name: 'Maritime LinkedIn', category: 'Influencer', x: 60, y: 70, quadrant: 'friendly' },
    { name: 'Policy Commentator', category: 'Commentator', x: 55, y: 40, quadrant: 'neutral' },
    { name: 'Regional Press', category: 'Regional Media', x: 40, y: 65, quadrant: 'friendly' },
  ],

  // Media Bias - Comparative Narrative Panel
  comparativeNarrative: [
    { category: 'Innovation', PSA: 88, Competitors: 72 },
    { category: 'Sustainability', PSA: 92, Competitors: 78 },
    { category: 'Automation', PSA: 90, Competitors: 80 },
    { category: 'Resilience', PSA: 85, Competitors: 75 },
    { category: 'Trade Facilitation', PSA: 82, Competitors: 70 },
    { category: 'Geopolitical Risk', PSA: 45, Competitors: 55 },
    { category: 'Digitalisation', PSA: 87, Competitors: 74 },
    { category: 'Employer Brand', PSA: 75, Competitors: 68 },
  ],

  // Executive Readout
  executiveReadout: {
    topNarrative: 'Innovation & automation leadership (Living Lab, hydrogen transition)',
    strongestTheme: 'Sustainability commitment (89% message pick-up)',
    riskSignal: 'Geopolitical exposure - China expansion requires careful positioning',
    priorityCluster: 'Tier 1 trade media (TradeWinds, WorldCargo News, Hellenic Shipping)',
    recommendedActions: [
      'Amplify Indonesia CSR success through tier 1 media',
      'Build hydrogen credibility with proof points',
      'Monitor and prepare Xiamen expansion positioning',
    ],
  },

  // Competitors
  competitors: [
    {
      company: 'PSA International',
      footprint: 'Presence across 160+ locations in 42 countries',
      strategicFocus: [
        'Node-to-Network strategy focusing on ecosystem integration',
        'Leading Living Lab innovation and automation initiatives',
        'Aggressive decarbonisation and hydrogen transition programs',
      ],
      recentDevelopments: [
        'Strategic expansion in Xiamen, China strengthening Asia footprint',
        'Record 105m TEU throughput demonstrating operational excellence',
      ],
      positioning: 'Neutral global operator with strong innovation leadership and balanced geographic portfolio',
      accentColor: '#2563eb',
      isHighlighted: true,
    },
    {
      company: 'Hutchison Ports',
      footprint: 'Operations in 52 ports across 26 countries',
      strategicFocus: [
        'Diversified portfolio with strong presence in emerging markets',
        'Technology-driven efficiency improvements across network',
        'Selective expansion in high-growth corridors',
      ],
      recentDevelopments: [
        'Continued investment in Middle East and Africa terminals',
        'Digital twin technology deployment across major facilities',
      ],
      positioning: 'Extensive global reach with pragmatic approach to digital transformation',
      accentColor: '#7c3aed',
      isHighlighted: false,
    },
    {
      company: 'APM Terminals (Maersk)',
      footprint: '70+ operating facilities across 40 countries',
      strategicFocus: [
        'Integrated logistics value chain leveraging Maersk Group',
        'Automation and digital solutions as competitive edge',
        'Net-zero commitment with concrete decarbonisation roadmap',
      ],
      recentDevelopments: [
        'Major automation projects in Rotterdam and Los Angeles',
        'Strategic divestments in non-core markets to focus resources',
      ],
      positioning: 'Integrated ocean-to-inland logistics provider with strong sustainability credentials',
      accentColor: '#0891b2',
      isHighlighted: false,
    },
    {
      company: 'DP World',
      footprint: 'Operations across 78 marine and inland terminals in 60+ countries',
      strategicFocus: [
        'End-to-end supply chain solutions beyond traditional terminals',
        'Aggressive investment in logistics parks and free zones',
        'Technology and innovation through DP World Cargospeed and digital platforms',
      ],
      recentDevelopments: [
        'Major expansions in India and Africa aligned with trade lane growth',
        'Acquisition strategy targeting integrated logistics capabilities',
      ],
      positioning: 'Ambitious global trade facilitator with strong emerging markets exposure and integrated business model',
      accentColor: '#dc2626',
      isHighlighted: false,
    },
    {
      company: 'COSCO Shipping Ports',
      footprint: 'Portfolio of 37 ports in 20 countries and regions',
      strategicFocus: [
        'Belt and Road Initiative alignment driving strategic investments',
        'Synergies with COSCO Shipping liner operations',
        'Selective automation adoption in key Chinese facilities',
      ],
      recentDevelopments: [
        'Expansion in Mediterranean and Latin American markets',
        'Investment in green port infrastructure and LNG bunkering',
      ],
      positioning: 'State-backed operator with strong China positioning and strategic BRI corridor access',
      accentColor: '#059669',
      isHighlighted: false,
    },
  ],

  // Competitor Comparison Chart
  competitorComparison: [
    { company: 'PSA Int\'l', reach: 90, investment: 85, digital: 92 },
    { company: 'Hutchison', reach: 95, investment: 80, digital: 85 },
    { company: 'APM Terminals', reach: 88, investment: 82, digital: 88 },
    { company: 'DP World', reach: 92, investment: 90, digital: 90 },
    { company: 'COSCO Ports', reach: 85, investment: 88, digital: 80 },
  ],

  // Key Takeaways
  keyTakeaways: [
    'Industry consolidation continues with major players expanding through strategic acquisitions and partnerships in emerging markets',
    'Digital transformation and automation are key competitive differentiators, with all major operators investing heavily in AI and IoT',
    'Sustainability and energy transition have become critical strategic pillars, driven by regulatory pressure and stakeholder expectations',
  ],

  // Stakeholder Matrix (Stakeholder Intelligence tab)
  stakeholderMatrix: [
    { name: 'Ong Kim Pong (CEO)', quadrant: 'cultivate', x: 90, y: 85 },
    { name: 'Peter Voser (Chairman)', quadrant: 'cultivate', x: 85, y: 80 },
    { name: 'MPA Singapore', quadrant: 'cultivate', x: 80, y: 75 },
    { name: 'TradeWinds', quadrant: 'engage', x: 75, y: 40 },
    { name: 'WorldCargo News', quadrant: 'engage', x: 80, y: 45 },
    { name: 'Xiamen Port Group', quadrant: 'engage', x: 70, y: 35 },
    { name: 'Pelindo & Indonesian Govt', quadrant: 'maintain', x: 40, y: 70 },
    { name: 'Tech Partners (Motorola, DNV)', quadrant: 'maintain', x: 35, y: 65 },
    { name: 'Regional Media', quadrant: 'monitor', x: 30, y: 30 },
  ],

  // Message Effectiveness - Quote Pick-Up
  quotePickup: {
    level: 'High',
    subtitle: 'leadership visibility',
    spokespeople: [
      { name: 'Ong Kim Pong (CEO)', status: 'Multiple' },
      { name: 'Peter Voser (Chairman)', status: 'Featured' },
      { name: 'Regional Leadership', status: 'Emerging' },
    ],
    note: 'Quotes consistently reinforce neutrality, resilience, and ecosystem integration themes',
  },

  // Message Effectiveness - Narrative Alignment
  narrativeAlignment: {
    level: 'Very High',
    subtitle: 'overall alignment',
    themes: [
      { name: 'Sustainability', value: 89 },
      { name: 'Resilience', value: 87 },
      { name: 'Innovation', value: 85 },
    ],
    note: 'Very high alignment - no conflicting narratives observed',
  },

  // Stakeholder Intelligence - Priority Follow-Ups
  priorityFollowups: [
    { name: 'TradeWinds - Editor Desk', priority: 'High', note: 'Maintain relationship; position on Xiamen expansion narrative' },
    { name: 'WorldCargo News - Features Team', priority: 'High', note: 'Leverage frequent coverage; pitch hydrogen success stories' },
    { name: 'Indonesian Media Cluster', priority: 'Strategic', note: 'Amplify CSR success through regional to global tier 1 outlets' },
  ],

  // Media Visibility - Coverage Highlights
  coverageHighlights: {
    majorSpikes: 2,
    tier1Trade: 100,
    peakPeriods: [
      '9-10 Mar: Financial Results (8 articles)',
      '10-11 May: Indonesia CSR (7 articles)',
      '30 Mar: Living Lab Innovation',
    ],
  },

  // Follow-ups by Team
  followupsByTeam: [
    { team: 'Corporate Comms', overdue: 1, thisWeek: 2, upcoming: 3 },
    { team: 'Media Relations', overdue: 0, thisWeek: 3, upcoming: 2 },
    { team: 'Innovation Comms', overdue: 0, thisWeek: 1, upcoming: 1 },
    { team: 'Regional Comms', overdue: 0, thisWeek: 0, upcoming: 2 },
    { team: 'Strategy Team', overdue: 0, thisWeek: 0, upcoming: 1 },
  ],
};
