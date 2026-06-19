// C-DASH Data Loader
// Loads data from dashboard.json with fallback to embedded data

const DataLoader = {
  data: null,

  // Load data from JSON file, with fallback to embedded
  async load() {
    try {
      const response = await fetch('./data/dashboard.json');
      if (!response.ok) throw new Error('Fetch failed');
      this.data = await response.json();
      console.log('Loaded data from dashboard.json');
    } catch (e) {
      console.log('Using embedded fallback data');
      this.data = DASHBOARD_DATA;
    }
    return this.data;
  },

  // Get loaded data
  get() {
    return this.data || DASHBOARD_DATA;
  }
};

// Embedded fallback data (same structure as dashboard.json)
const DASHBOARD_DATA = {
  logoBase64: 'data:image/png;base64,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',
  header: {
    title: 'C-DASH — Media Intelligence Report',
    subtitle: 'Media Sentiment & Stakeholder Intelligence',
    period: '1 January – 12 June 2026',
    company: 'PSA International',
    preparedFor: 'Senior Management / GCAD',
    disclaimer: 'PROTOTYPE REPORT ONLY — Data & AI Initiative · Confidential'
  },

  partA: {
    overview: {
      atGlance: "PSA's coverage is consistently positive, operationally focused and sector-relevant — concentrated in maritime and logistics trade media and corporate announcements. Coverage highlights infrastructure upgrades, optimisation and partnerships, with limited amplification beyond industry channels. Competitors — particularly DP World and COSCO — command broader narrative reach across expansion, sustainability and geopolitics.",
      sentimentDrivers: [
        'Operational performance and capacity expansion',
        'Digitalisation and automation',
        'Partnerships and investments'
      ],
      positiveDevelopments: [
        "Tuas Port — PSA Singapore's Tuas Port — the world's largest fully automated terminal — drew continued positive coverage, including completion of Phase Two automation, reinforcing Singapore's transhipment-hub status and PSA's Node-to-Network super-hub narrative.",
        'PSA Antwerp optimisation enabling uninterrupted throughput during modernisation.',
        'PSA Mumbai and other terminals expanding capacity and capability.',
        'Continued global network expansion and partnerships.'
      ],
      neutralDevelopments: [
        'Technical deployment of systems and operational upgrades',
        'Modernisation projects and infrastructure transitions'
      ],
      watchItems: [
        'External disruption risk in Europe and the Middle East (incl. Hormuz) affecting global supply chains — narrative shaped externally.'
      ],
      strategicImplication: "PSA is well positioned in sectoral media aligned to operational stakeholders, reflecting strong execution credibility. Coverage remains tactical (operations-led) rather than strategic (market-narrative-led), with competitors more visible across expansion, sustainability and geopolitics.",
      keyImplications: [
        { type: 'strength', text: "Strong credibility in PSA's core operational domain." },
        { type: 'strength', text: 'Visibility well aligned with relevant industry stakeholders.' },
        { type: 'observation', text: 'Less presence in the macro-level narratives shaping global trade discourse.' },
        { type: 'observation', text: "Competitors occupy broader narrative territory — a difference in profile rather than an operational weakness." }
      ]
    },

    kpis: {
      overallSentiment: { value: 'Positive', status: 'green' },
      intensity: { value: 'Mild positive', status: 'green' },
      mediaProfile: { value: 'Trade-led / B2B', status: 'blue' },
      headlineRisk: { value: 'Supply-chain', status: 'amber' }
    },

    dashboard: [
      { indicator: 'Volume of coverage', finding: 'Consistent but moderate', trend: 'stable', sentiment: 'Positive (mild)', sentimentColor: 'green', risk: 'Amplify reach', implication: 'Strong within sector, limited outside' },
      { indicator: 'Tone of coverage', finding: 'Uniformly positive', trend: 'stable', sentiment: 'Positive (mild)', sentimentColor: 'green', risk: 'Reputation baseline', implication: 'Consistency reinforces credibility' },
      { indicator: 'Sentiment drivers', finding: 'Ops, automation, expansion', trend: 'stable', sentiment: 'Positive (mild)', sentimentColor: 'green', risk: 'Broaden narrative', implication: 'Messaging remains operational' },
      { indicator: 'Geography', finding: 'Global, unevenly visible', trend: 'stable', sentiment: 'Positive (mild)', sentimentColor: 'green', risk: 'Storytelling upside', implication: 'Global footprint under-reflected' },
      { indicator: 'Media-type mix', finding: 'Trade-dominant', trend: 'stable', sentiment: 'Positive (mild)', sentimentColor: 'green', risk: 'Balanced for B2B', implication: 'Appropriate for stakeholder base' },
      { indicator: 'Headline prominence', finding: 'High in trade', trend: 'stable', sentiment: 'Positive (mild)', sentimentColor: 'green', risk: 'Industry relevance', implication: 'Strong industry visibility' },
      { indicator: 'Emerging risks', finding: 'Supply-chain disruption', trend: 'emerging', sentiment: 'Mixed (mild neg)', sentimentColor: 'amber', risk: 'External risk env.', implication: 'Narrative shaped externally' },
      { indicator: 'Strategic opportunities', finding: 'Digitalisation, expansion', trend: 'improving', sentiment: 'Positive (mild)', sentimentColor: 'green', risk: 'Expand narrative', implication: 'Translate ops into strategy' },
      { indicator: 'Competitor comparison', finding: 'Broader narratives', trend: 'emerging', sentiment: 'Mixed', sentimentColor: 'amber', risk: 'Visibility gap', implication: 'Peers occupy wider narrative' },
      { indicator: 'Stakeholder signals', finding: 'Tech partners visible', trend: 'stable', sentiment: 'Neutral', sentimentColor: 'blue', risk: 'Limited visibility', implication: 'Technical collaboration recognised' }
    ],

    competitors: [
      { company: 'PSA International', coverage: 'Medium', narratives: 'Operations, automation, expansion (Tuas Port, Antwerp)', sentiment: 'Positive (mild)', sentimentColor: 'green', positioning: 'Strong operational credibility and sector visibility; narrower macro-narrative breadth than the most visible peers.', isHighlighted: true },
      { company: 'DP World', coverage: 'High', narratives: 'Expansion, sustainability, geopolitics', sentiment: 'Mixed–Positive', sentimentColor: 'amber', positioning: 'Most visible peer and benchmark for broad positioning; actively shaping the global narrative.', isHighlighted: false },
      { company: 'COSCO Shipping Ports', coverage: 'Medium', narratives: 'Expansion, geopolitics', sentiment: 'Mixed', sentimentColor: 'amber', positioning: "Greater geopolitical visibility; overlaps PSA's expansion story.", isHighlighted: false },
      { company: 'APM Terminals', coverage: 'Medium', narratives: 'Infrastructure, disruption', sentiment: 'Mixed (mild neg)', sentimentColor: 'amber', positioning: 'Modernisation narrative carrying visible disruption risk.', isHighlighted: false },
      { company: 'Hutchison Ports', coverage: 'Low', narratives: 'Incremental expansion', sentiment: 'Positive (mild)', sentimentColor: 'green', positioning: 'Lower visibility; limited direct narrative pressure.', isHighlighted: false },
      { company: 'ICTSI', coverage: 'Low–Medium', narratives: 'Growth, financing', sentiment: 'Positive (mild)', sentimentColor: 'green', positioning: 'Active in the expansion narrative; growth-led profile.', isHighlighted: false }
    ]
  },

  partB: {
    overview: {
      atGlance: "The stakeholder ecosystem is trade-media led, anchored by Journal of Commerce, Seatrade Maritime News, Container News and Port Technology International, with a limited but important presence in mainstream business media (Reuters, Bloomberg, The Business Times). Most identifiable coverage ties to PSA's Xiamen expansion and Node-to-Network integration messaging — indicating high baseline receptiveness but low independent editorial positioning.",
      opportunities: [
        'Repeat trade journalists who consistently and accurately cover PSA.',
        'Strong pull-through of the Node-to-Network narrative across trade titles.',
        'Scope to move beyond press-release replication toward analysis-led narratives.'
      ],
      risks: [
        'Few exclusive interviews or opinion placements.',
        'Heavy reliance on announcement-driven coverage.',
        'No consistent view of stakeholder influence metrics (reach, engagement).'
      ],
      highlightStakeholders: [
        'High-impact trade journalists: Keith Wallis, Michele Labrut, Antonia Saratsopoulou.',
        'Analysts shaping interpretation (India Seatrade News).',
        'Technology / innovation writers (Dominic Magli).'
      ]
    },

    kpis: {
      ecosystem: { value: 'Trade-led', status: 'blue' },
      coveragePattern: { value: 'Announcement-led', status: 'amber' },
      stakeholders: { value: '10', status: 'green' },
      engagementModel: { value: 'Developing', status: 'amber' }
    },

    matrix: {
      cultivation: [
        { name: 'Reuters / Bloomberg', type: 'Collective', note: 'Very high reach; currently under-engaged' },
        { name: 'Dominic Magli', type: "Port Technology Int'l", note: 'Influences innovation and digitalisation narratives' },
        { name: 'India Seatrade News analysts', type: 'India Seatrade News', note: 'Shape industry interpretation beyond reporting' }
      ],
      maintain: [
        { name: 'Keith Wallis', type: 'JoC Online', note: 'High influence; shapes the global trade narrative' },
        { name: 'Michele Labrut', type: 'Seatrade Maritime News', note: 'Consistent industry coverage with positive alignment' },
        { name: 'Antonia Saratsopoulou', type: 'Container News', note: 'Strong alignment with PSA ecosystem messaging' },
        { name: 'Benicia Tan', type: 'The Business Times', note: 'Mainstream business reach and Singapore relevance' },
        { name: 'WorldCargo News', type: 'Editorial team', note: 'Established trade-media influence' },
        { name: 'Wang Yangfa', type: 'Lianhe Zaobao', note: 'Key regional influence with Chinese audiences' }
      ],
      backgroundMonitor: [],
      emergingAllies: [
        { name: 'Malik Johnson', type: 'World Ports Organisation', note: 'Emerging voice in port ecosystem' }
      ]
    },

    relationshipTracker: [
      { stakeholder: 'Keith Wallis', publication: 'JoC Online', role: 'Journalist', friendliness: 4, influence: 5, category: 'Maintain' },
      { stakeholder: 'Michele Labrut', publication: 'Seatrade Maritime News', role: 'Journalist', friendliness: 4, influence: 4, category: 'Maintain' },
      { stakeholder: 'Antonia Saratsopoulou', publication: 'Container News', role: 'Journalist', friendliness: 4, influence: 4, category: 'Maintain' },
      { stakeholder: 'Benicia Tan', publication: 'The Business Times', role: 'Journalist', friendliness: 4, influence: 5, category: 'Maintain' },
      { stakeholder: 'Dominic Magli', publication: "Port Technology Int'l", role: 'Journalist', friendliness: 3, influence: 4, category: 'Cultivation' },
      { stakeholder: 'Analysts (unnamed)', publication: 'India Seatrade News', role: 'Analyst', friendliness: 3, influence: 4, category: 'Cultivation' },
      { stakeholder: 'WorldCargo News', publication: 'WorldCargo News', role: 'Trade media', friendliness: 4, influence: 4, category: 'Maintain' },
      { stakeholder: 'Wang Yangfa', publication: 'Lianhe Zaobao', role: 'Journalist', friendliness: 4, influence: 4, category: 'Maintain' },
      { stakeholder: 'Malik Johnson', publication: 'World Ports Org', role: 'Contributor', friendliness: 3, influence: 3, category: 'Emerging' },
      { stakeholder: 'Reuters / Bloomberg', publication: 'Mainstream business', role: 'Journalists', friendliness: 3, influence: 5, category: 'Cultivation' }
    ],

    influenceTracker: [
      { stakeholder: 'Keith Wallis', platform: 'Global trade media', audience: 'Shipping / logistics leaders', relevance: 'Very high', signal: 'Opportunity' },
      { stakeholder: 'Michele Labrut', platform: 'Trade press', audience: 'Maritime professionals', relevance: 'High', signal: 'Opportunity' },
      { stakeholder: 'Antonia Saratsopoulou', platform: 'Container sector', audience: 'Industry specialists', relevance: 'High', signal: 'Opportunity' },
      { stakeholder: 'Dominic Magli', platform: 'Port-tech media', audience: 'Innovation stakeholders', relevance: 'High', signal: 'Opportunity' },
      { stakeholder: 'ISN Analysts', platform: 'Industry analysis', audience: 'Sector decision-makers', relevance: 'High', signal: 'Opportunity' }
    ],

    engagementStatus: [
      { stakeholder: 'Keith Wallis', status: 'Active relationship' },
      { stakeholder: 'Michele Labrut', status: 'Active relationship' },
      { stakeholder: 'Antonia Saratsopoulou', status: 'Developing' },
      { stakeholder: 'Benicia Tan', status: 'Active relationship' },
      { stakeholder: 'Dominic Magli', status: 'Active relationship' },
      { stakeholder: 'Wang Yangfa', status: 'Developing' },
      { stakeholder: 'Reuters / Bloomberg', status: 'Not yet engaged' },
      { stakeholder: 'ISN Analysts', status: 'Monitor only' }
    ],

    top10: [
      { name: 'Keith Wallis', publication: 'JoC Online', description: 'High influence; shapes the global trade narrative.' },
      { name: 'Michele Labrut', publication: 'Seatrade Maritime News', description: 'Consistent industry coverage with positive alignment.' },
      { name: 'Antonia Saratsopoulou', publication: 'Container News', description: 'Strong alignment with PSA ecosystem messaging.' },
      { name: 'Benicia Tan', publication: 'The Business Times', description: 'Mainstream business reach and Singapore relevance.' },
      { name: 'Dominic Magli', publication: "Port Technology Int'l", description: 'Influences innovation and digitalisation narratives.' },
      { name: 'India Seatrade News analysts', publication: 'India Seatrade News', description: 'Shape industry interpretation beyond reporting.' },
      { name: 'Wang Yangfa', publication: 'Lianhe Zaobao', description: 'Key regional influence with Chinese audiences.' },
      { name: 'WorldCargo News', publication: 'WorldCargo News', description: 'Established trade-media influence.' },
      { name: 'Reuters', publication: 'Reuters', description: 'Very high reach; currently under-engaged.' },
      { name: 'Bloomberg', publication: 'Bloomberg', description: 'Strategic narrative amplification potential.' }
    ],

    relationshipTable: [
      { stakeholder: 'Benicia Tan', platform: 'The Business Times', relationship: 'Strong', topics: 'Financial & strategic updates', owner: 'Local Comms' },
      { stakeholder: 'Keith Wallis', platform: 'JoC Online', relationship: 'Strong', topics: 'Ports, trade flows, ecosystem integration', owner: 'GCAD' },
      { stakeholder: 'Michele Labrut', platform: 'Seatrade', relationship: 'Strong', topics: 'Maritime operations, trade lanes', owner: 'Regional Comms' },
      { stakeholder: 'Antonia Saratsopoulou', platform: 'Container News', relationship: 'Developing', topics: 'Supply-chain integration', owner: 'GCAD' },
      { stakeholder: 'Dominic Magli', platform: 'PTI', relationship: 'Strong', topics: 'Digitalisation, innovation', owner: 'Innovation / Digital Comms' }
    ]
  },

  methodology: {
    referenceBaseline: "PSA International news releases are the issued messages against which external coverage is compared to assess pick-up of key news — they are the baseline, not a media source.",
    dataFeeds: [
      "NewsToday: PSA's internal media-monitoring archive, via SharePoint enterprise search",
      'NewsData.io: external web-news aggregation (competitor narratives and broader web sources)'
    ],
    mediaCovered: {
      trade: 'Journal of Commerce (JoC Online), Seatrade Maritime News, Container News, Port Technology International, WorldCargo News, Container Management, PortsEurope, India Seatrade News, World Ports Organisation',
      business: 'Bloomberg, Reuters, The Business Times (Singapore), Business Insider / Markets Insider, MarketScreener',
      regional: 'Lianhe Zaobao (Singapore, Chinese-language daily)'
    },
    sentimentScale: [
      { label: 'Positive', definition: 'Favourable coverage; supportive of PSA\'s reputation.', color: 'green' },
      { label: 'Neutral', definition: 'Factual or balanced; neither clearly favourable nor unfavourable.', color: 'blue' },
      { label: 'Mixed', definition: 'Combination of favourable and unfavourable signals; watch.', color: 'amber' },
      { label: 'Negative', definition: 'Unfavourable coverage or material disruption risk.', color: 'red' }
    ],
    assessmentMethod: [
      "Framing is by media type (maritime/trade, logistics, corporate, business) rather than tier, consistent with PSA's B2B profile; limited mainstream presence is not treated as a gap.",
      'Sentiment, friendliness and influence are inferred from article tone and publication type, not from direct engagement records; scores are indicative for management discussion.',
      'Media stakeholders were highlighted based on their coverage of PSA within this defined media scope. Editors and contributors to non-attributed articles may not have been flagged, as they did not byline the articles.'
    ],
    nextIteration: [
      'Local media — Prioritise key local Singapore media — The Straits Times, The Business Times and Lianhe Zaobao (and comparable national outlets) — to capture home-market visibility.',
      "Trade media — Prioritise leading trade media not yet captured — Lloyd's List, TradeWinds, Seatrade Maritime, Container Management, Port Technology International and similar.",
      'Stakeholder ecosystem — Extend the stakeholder ecosystem to named journalists and editors at the above local titles and key trade publications.'
    ]
  }
};
