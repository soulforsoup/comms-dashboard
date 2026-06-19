// C-DASH Component Renderers
// Each function returns HTML string for its component

const Components = {
  // SVG Icons
  icons: {
    trendingUp: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
    trendingDown: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',
    arrowRight: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    arrowUpRight: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
    alertTriangle: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    checkCircle: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    users: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    user: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    newspaper: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></svg>',
    globe: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    settings: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    calendar: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    info: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    x: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    barChart3: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',
    trendingUpNav: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
    shield: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    grid: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    book: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  },

  // Sidebar navigation items
  sidebarItems: [
    { id: 'executive', label: 'Executive Overview', icon: 'barChart3' },
    { id: 'media', label: 'Media Sentiment', icon: 'trendingUpNav' },
    { id: 'dashboard', label: 'Strategic Dashboard', icon: 'grid' },
    { id: 'competitors', label: 'Competitor Landscape', icon: 'shield' },
    { id: 'matrix', label: 'Stakeholder Matrix', icon: 'users' },
    { id: 'stakeholders', label: 'Stakeholder Intelligence', icon: 'user' },
    { id: 'methodology', label: 'Methodology', icon: 'book' },
  ],

  // Trend arrow
  trendArrow(trend) {
    switch (trend) {
      case 'stable': return `<span class="text-gray-500 inline-flex items-center gap-1">${this.icons.arrowRight} Stable</span>`;
      case 'improving': return `<span class="text-emerald-500 inline-flex items-center gap-1">${this.icons.arrowUpRight} Improving</span>`;
      case 'emerging': return `<span class="text-amber-500 inline-flex items-center gap-1">${this.icons.alertTriangle} Emerging</span>`;
      default: return `<span class="text-gray-500 inline-flex items-center gap-1">${this.icons.arrowRight} ${trend}</span>`;
    }
  },

  // Sentiment badge
  sentimentBadge(color, text) {
    const colors = {
      green: 'bg-emerald-100 text-emerald-700',
      blue: 'bg-blue-100 text-blue-700',
      amber: 'bg-amber-100 text-amber-700',
      red: 'bg-red-100 text-red-700'
    };
    return `<span class="inline-block px-2 py-1 rounded text-xs ${colors[color] || colors.blue}">${text}</span>`;
  },

  // KPI Card
  kpiCard(label, value, status) {
    const statusColors = { green: 'bg-emerald-500', blue: 'bg-blue-500', amber: 'bg-amber-500', red: 'bg-red-500' };
    return `
      <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <div class="text-xs text-gray-500 mb-1">${label}</div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full ${statusColors[status] || statusColors.blue}"></div>
          <div class="text-lg text-slate-800 font-medium">${value}</div>
        </div>
      </div>`;
  },

  // Star rating (1-5)
  starRating(score, max = 5) {
    let html = '<span class="inline-flex gap-0.5">';
    for (let i = 1; i <= max; i++) {
      html += i <= score
        ? '<span class="text-blue-600">●</span>'
        : '<span class="text-gray-300">○</span>';
    }
    html += '</span>';
    return html;
  },

  // ===== EXECUTIVE OVERVIEW =====
  executiveOverviewSection() {
    const d = Data.partA.overview;
    const kpis = Data.partA.kpis;
    const implications = d.keyImplications.map(i => {
      const icon = i.type === 'strength'
        ? '<span class="text-emerald-500">●</span>'
        : '<span class="text-blue-500">●</span>';
      return `<li class="flex items-start gap-2"><span class="mt-1">${icon}</span><span>${i.text}</span></li>`;
    }).join('');

    return `
      <section id="executive" class="section animate-in">
        <h2 class="section-header">Executive Overview</h2>
        <div class="space-y-6">
        <!-- KPI Row -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          ${this.kpiCard('Overall Sentiment', kpis.overallSentiment.value, kpis.overallSentiment.status)}
          ${this.kpiCard('Intensity', kpis.intensity.value, kpis.intensity.status)}
          ${this.kpiCard('Media Profile', kpis.mediaProfile.value, kpis.mediaProfile.status)}
          ${this.kpiCard('Headline Risk', kpis.headlineRisk.value, kpis.headlineRisk.status)}
        </div>

        <!-- At a Glance -->
        <div class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 class="text-lg text-blue-900 mb-3 font-semibold">At a Glance</h3>
          <p class="text-sm text-gray-700 leading-relaxed">${d.atGlance}</p>
        </div>

        <!-- Strategic Implication -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-3">Strategic Implication</h3>
          <p class="text-sm text-gray-700 leading-relaxed">${d.strategicImplication}</p>
        </div>

        <!-- Key Implications -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Key Implications</h3>
          <ul class="text-sm text-gray-700 space-y-2">${implications}</ul>
        </div>
      </div>
      </section>`;
  },

  // ===== MEDIA SENTIMENT =====
  mediaSentimentSection() {
    const d = Data.partA.overview;
    return `
      <section id="media" class="section animate-in">
        <h2 class="section-header">Media Sentiment</h2>
        <div class="space-y-6">
        <!-- Sentiment Drivers -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Sentiment Drivers</h3>
          <ul class="text-sm text-gray-700 space-y-2">
            ${d.sentimentDrivers.map(s => `<li class="flex items-start gap-2"><span class="text-blue-500 mt-1">●</span><span>${s}</span></li>`).join('')}
          </ul>
        </div>

        <!-- Positive Developments -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Positive Developments</h3>
          <div class="space-y-3">
            ${d.positiveDevelopments.map(dev => `
              <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                <p class="text-sm text-gray-700">${dev}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Neutral Developments -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Neutral / Factual Developments</h3>
          <ul class="text-sm text-gray-700 space-y-2">
            ${d.neutralDevelopments.map(s => `<li class="flex items-start gap-2"><span class="text-gray-400 mt-1">●</span><span>${s}</span></li>`).join('')}
          </ul>
        </div>

        <!-- Watch Items -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Watch Items / Risks</h3>
          <div class="space-y-3">
            ${d.watchItems.map(item => `
              <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p class="text-sm text-gray-700">${item}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      </section>`;
  },

  // ===== STRATEGIC DASHBOARD =====
  strategicDashboardSection() {
    const rows = Data.partA.dashboard.map(item => `
      <tr class="border-b border-gray-100 hover:bg-gray-50">
        <td class="py-3 px-4 text-sm text-slate-800 font-medium">${item.indicator}</td>
        <td class="py-3 px-4 text-sm text-gray-700">${item.finding}</td>
        <td class="py-3 px-4 text-sm">${this.trendArrow(item.trend)}</td>
        <td class="py-3 px-4">${this.sentimentBadge(item.sentimentColor, item.sentiment)}</td>
        <td class="py-3 px-4 text-sm text-gray-600">${item.risk}</td>
        <td class="py-3 px-4 text-sm text-gray-700">${item.implication}</td>
      </tr>
    `).join('');

    return `
      <section id="dashboard" class="section animate-in">
        <h2 class="section-header">Strategic Dashboard</h2>
        <div class="space-y-6">
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Strategic Dashboard Summary</h3>
          <p class="text-xs text-gray-500 mb-4">Ten indicators across volume, tone, reach and risk. Sentiment is colour-coded; trend arrows show direction of travel.</p>
          <div class="overflow-x-auto table-scroll">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Indicator</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Current Finding</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Trend</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Sentiment</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Risk / Opportunity</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Strategic Implication</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      </div>
      </section>`;
  },

  // ===== COMPETITOR LANDSCAPE =====
  competitorLandscapeSection() {
    const rows = Data.partA.competitors.map(comp => {
      const highlight = comp.isHighlighted ? 'bg-blue-50 border-l-2 border-blue-500' : '';
      return `
        <tr class="border-b border-gray-100 hover:bg-gray-50 ${highlight}">
          <td class="py-3 px-4 text-sm text-slate-800 font-medium">${comp.company}${comp.isHighlighted ? ' <span class="text-xs text-blue-600">(PSA)</span>' : ''}</td>
          <td class="py-3 px-4 text-sm text-gray-700">${comp.coverage}</td>
          <td class="py-3 px-4 text-sm text-gray-700">${comp.narratives}</td>
          <td class="py-3 px-4">${this.sentimentBadge(comp.sentimentColor, comp.sentiment)}</td>
          <td class="py-3 px-4 text-sm text-gray-600">${comp.positioning}</td>
        </tr>
      `;
    }).join('');

    return `
      <section id="competitors" class="section animate-in">
        <h2 class="section-header">Competitor Landscape</h2>
        <div class="space-y-6">
        <!-- Bar Chart -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Coverage Volume Comparison</h3>
          <div style="position:relative;height:300px"><canvas id="chart-competitor-coverage"></canvas></div>
        </div>

        <!-- Table -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Competitor Landscape</h3>
          <p class="text-xs text-gray-500 mb-4">PSA shown alongside its principal competitors (PSA row highlighted).</p>
          <div class="overflow-x-auto table-scroll">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Company</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Coverage</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Dominant Narratives</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Sentiment</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Narrative Positioning</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>

          <div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 class="text-xs font-semibold text-blue-700 mb-2">What the landscape tells us</h4>
            <ul class="text-xs text-gray-700 space-y-1">
              <li>• DP World and COSCO show the highest visibility, including global business and financial media — largely Mixed sentiment driven by geopolitical context.</li>
              <li>• DP World leads on integrated logistics and sustainability; COSCO on geopolitically significant infrastructure; APM on modernisation; ICTSI on growth.</li>
              <li>• PSA's profile differs — strong operational credibility (anchored by Tuas Port and Antwerp) versus peers' broader strategic and macro narratives.</li>
            </ul>
          </div>
        </div>
      </div>
      </section>`;
  },

  // ===== STAKEHOLDER MATRIX (2×2 Grid) =====
  stakeholderMatrixSection() {
    const m = Data.partB.matrix;

    const renderList = (items) => {
      if (items.length === 0) return '<li>None currently identified — monitor for emerging voices</li>';
      return items.map(item => `<li>${item.name} — ${item.type}</li>`).join('');
    };

    return `
      <section id="matrix" class="section animate-in">
        <h2 class="section-header">Stakeholder Matrix</h2>
        <div class="space-y-6">
        <!-- Stakeholder Executive Summary -->
        <div class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 class="text-lg text-blue-900 mb-3 font-semibold">Stakeholder Executive Summary</h3>
          <p class="text-sm text-gray-700 leading-relaxed mb-4">${Data.partB.overview.atGlance}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 class="text-xs font-semibold text-emerald-600 uppercase mb-2">Key Relationship Opportunities</h4>
              <ul class="text-sm text-gray-700 space-y-1">${Data.partB.overview.opportunities.map(s => `<li>• ${s}</li>`).join('')}</ul>
            </div>
            <div>
              <h4 class="text-xs font-semibold text-red-600 uppercase mb-2">Risks & Gaps</h4>
              <ul class="text-sm text-gray-700 space-y-1">${Data.partB.overview.risks.map(s => `<li>• ${s}</li>`).join('')}</ul>
            </div>
          </div>
        </div>

        <!-- 2×2 Matrix -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 class="text-lg text-blue-900 mb-1">Stakeholder Matrix (2×2)</h3>
          <p class="text-xs text-gray-600 mb-4">Stakeholders mapped by friendliness (horizontal) and influence (vertical).</p>

          <div class="flex">
            <!-- Vertical axis label -->
            <div class="flex items-center pr-3">
              <div class="matrix-axis-vertical">
                <span>▲</span>
                <span>Higher influence</span>
              </div>
            </div>

            <!-- Grid -->
            <div class="flex-1">
              <div class="matrix-grid">
                <!-- Top-Left: Cultivation Potential -->
                <div class="matrix-quadrant matrix-cultivation">
                  <div class="matrix-quadrant-title">Cultivation Potential</div>
                  <ul class="matrix-quadrant-list">${renderList(m.cultivation)}</ul>
                </div>

                <!-- Top-Right: Maintain Relationships -->
                <div class="matrix-quadrant matrix-maintain">
                  <div class="matrix-quadrant-title">Maintain Relationships</div>
                  <ul class="matrix-quadrant-list">${renderList(m.maintain)}</ul>
                </div>

                <!-- Bottom-Left: Background Monitor -->
                <div class="matrix-quadrant matrix-monitor">
                  <div class="matrix-quadrant-title">Background Monitor</div>
                  <ul class="matrix-quadrant-list">${renderList(m.backgroundMonitor)}</ul>
                </div>

                <!-- Bottom-Right: Emerging Allies -->
                <div class="matrix-quadrant matrix-emerging">
                  <div class="matrix-quadrant-title">Emerging Allies</div>
                  <ul class="matrix-quadrant-list">${renderList(m.emergingAllies)}</ul>
                </div>
              </div>

              <!-- Horizontal axis label -->
              <div class="flex justify-end mt-2">
                <div class="matrix-axis-horizontal">
                  <span>Higher friendliness</span>
                  <span>►</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>`;
  },

  // ===== STAKEHOLDER INTELLIGENCE =====
  stakeholderIntelligenceSection() {
    const rows = Data.partB.relationshipTracker.map(s => `
      <tr class="border-b border-gray-100 hover:bg-gray-50">
        <td class="py-3 px-4 text-sm text-slate-800">${s.stakeholder}</td>
        <td class="py-3 px-4 text-sm text-gray-700">${s.publication}</td>
        <td class="py-3 px-4 text-sm text-gray-600">${s.role}</td>
        <td class="py-3 px-4">${this.starRating(s.friendliness)}</td>
        <td class="py-3 px-4">${this.starRating(s.influence)}</td>
        <td class="py-3 px-4">${this.sentimentBadge(
          s.category === 'Maintain' ? 'green' : s.category === 'Cultivation' ? 'blue' : 'amber',
          s.category
        )}</td>
      </tr>
    `).join('');

    const engagementStatusColors = {
      'Active relationship': 'bg-emerald-100 text-emerald-700',
      'Developing': 'bg-blue-100 text-blue-700',
      'Not yet engaged': 'bg-gray-100 text-gray-700',
      'Monitor only': 'bg-amber-100 text-amber-700'
    };
    const engagementRows = Data.partB.engagementStatus.map(s => `
      <tr class="border-b border-gray-100 hover:bg-gray-50">
        <td class="py-3 px-4 text-sm text-slate-800">${s.stakeholder}</td>
        <td class="py-3 px-4"><span class="inline-block px-2 py-1 rounded text-xs ${engagementStatusColors[s.status] || 'bg-gray-100 text-gray-700'}">${s.status}</span></td>
      </tr>
    `).join('');

    const influenceRows = Data.partB.influenceTracker.map(s => `
      <tr class="border-b border-gray-100 hover:bg-gray-50">
        <td class="py-3 px-4 text-sm text-slate-800">${s.stakeholder}</td>
        <td class="py-3 px-4 text-sm text-gray-700">${s.platform}</td>
        <td class="py-3 px-4 text-sm text-gray-600">${s.audience}</td>
        <td class="py-3 px-4 text-sm text-gray-700">${s.relevance}</td>
        <td class="py-3 px-4">${this.sentimentBadge('green', s.signal)}</td>
      </tr>
    `).join('');

    const relationshipRows = Data.partB.relationshipTable.map(s => `
      <tr class="border-b border-gray-100 hover:bg-gray-50">
        <td class="py-3 px-4 text-sm text-slate-800">${s.stakeholder}</td>
        <td class="py-3 px-4 text-sm text-gray-700">${s.platform}</td>
        <td class="py-3 px-4">${this.sentimentBadge(s.relationship === 'Strong' ? 'green' : 'blue', s.relationship)}</td>
        <td class="py-3 px-4 text-sm text-gray-700">${s.topics}</td>
        <td class="py-3 px-4 text-sm text-gray-600">${s.owner}</td>
      </tr>
    `).join('');

    const top10Cards = Data.partB.top10.map((s, i) => `
      <div class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
        <div class="flex items-start justify-between mb-2">
          <div>
            <h4 class="text-sm text-slate-800 font-medium">${i + 1}. ${s.name}</h4>
            <span class="text-xs text-blue-600">${s.publication}</span>
          </div>
        </div>
        <p class="text-xs text-gray-600">${s.description}</p>
      </div>
    `).join('');

    return `
      <section id="stakeholders" class="section animate-in">
        <h2 class="section-header">Stakeholder Intelligence</h2>
        <div class="space-y-6">
        <!-- Top 10 -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Top 10 Priority Stakeholders</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 cards-grid-2">${top10Cards}</div>
        </div>

        <!-- Engagement Status -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Engagement Status</h3>
          <div class="overflow-x-auto table-scroll">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Stakeholder</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>${engagementRows}</tbody>
            </table>
          </div>
        </div>

        <!-- Relationship Tracker -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Priority Media Relationship Tracker</h3>
          <p class="text-xs text-gray-500 mb-4">Note: Scores are inferred from article tone and publication type; indicative for management discussion.</p>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Stakeholder</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Publication</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Role</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Friendliness</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Influence</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Category</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>

        <!-- Influence Tracker -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Stakeholder Influence Tracker</h3>
          <p class="text-xs text-gray-500 mb-4">Every high-relevance stakeholder represents an engagement opportunity rather than a risk.</p>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Stakeholder</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Platform</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Audience / Reach</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Relevance</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Signal</th>
                </tr>
              </thead>
              <tbody>${influenceRows}</tbody>
            </table>
          </div>
        </div>

        <!-- Priority Media Relationships -->
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Priority Media Relationships</h3>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Stakeholder</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Platform</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Relationship</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Topics of Interest</th>
                  <th class="text-left py-3 px-4 text-xs text-gray-600">Suggested Owner</th>
                </tr>
              </thead>
              <tbody>${relationshipRows}</tbody>
            </table>
          </div>
        </div>
      </div>
      </section>`;
  },

  // ===== METHODOLOGY =====
  methodologySection() {
    const m = Data.methodology;
    const sentimentScale = m.sentimentScale.map(s => {
      const colors = { green: 'bg-emerald-500', blue: 'bg-blue-500', amber: 'bg-amber-500', red: 'bg-red-500' };
      return `
        <div class="flex items-start gap-3">
          <div class="w-3 h-3 rounded-full ${colors[s.color]} mt-1 flex-shrink-0"></div>
          <div>
            <span class="text-sm font-medium text-slate-800">${s.label}:</span>
            <span class="text-sm text-gray-600">${s.definition}</span>
          </div>
        </div>`;
    }).join('');

    return `
      <section id="methodology" class="section animate-in">
        <h2 class="section-header">Methodology</h2>
        <div class="space-y-6">
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Reference Baseline</h3>
          <p class="text-sm text-gray-700">${m.referenceBaseline}</p>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Data Feeds</h3>
          <ul class="text-sm text-gray-700 space-y-2">${m.dataFeeds.map(f => `<li>• ${f}</li>`).join('')}</ul>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">External Source Media Covered</h3>
          <div class="space-y-3 text-sm text-gray-700">
            <div><span class="font-medium text-slate-800">Trade:</span> ${m.mediaCovered.trade}</div>
            <div><span class="font-medium text-slate-800">Business:</span> ${m.mediaCovered.business}</div>
            <div><span class="font-medium text-slate-800">Regional:</span> ${m.mediaCovered.regional}</div>
          </div>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Sentiment Scale</h3>
          <div class="space-y-3">${sentimentScale}</div>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">How Coverage & Stakeholders Were Assessed</h3>
          <ul class="text-sm text-gray-700 space-y-2">${m.assessmentMethod.map(a => `<li>• ${a}</li>`).join('')}</ul>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 class="text-lg text-slate-800 mb-4">Priorities for Next Iteration</h3>
          <ul class="text-sm text-gray-700 space-y-2">${m.nextIteration.map(n => `<li>• ${n}</li>`).join('')}</ul>
        </div>

        <div class="p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p class="text-xs text-amber-800">${Data.header.disclaimer}</p>
          <p class="text-xs text-amber-700 mt-1">Note: This is a preliminary report and will require further finetuning. PSA coverage reflects a limited retrieved set, and the absence of mainstream coverage is not evidence of reputational concern. Figures and findings are indicative and intended for management discussion.</p>
        </div>
      </div>
      </section>`;
  },

  // About Modal Content (no section wrapper)
  aboutContent() {
    const m = Data.methodology;
    const sentimentScale = m.sentimentScale.map(s => {
      const colors = { green: 'bg-emerald-500', blue: 'bg-blue-500', amber: 'bg-amber-500', red: 'bg-red-500' };
      return `
        <div class="flex items-start gap-3">
          <div class="w-3 h-3 rounded-full ${colors[s.color]} mt-1 flex-shrink-0"></div>
          <div>
            <span class="text-sm font-medium text-slate-800">${s.label}:</span>
            <span class="text-sm text-gray-600">${s.definition}</span>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="space-y-6">
        <div>
          <h4 class="text-sm font-semibold text-slate-800 mb-2">Reference Baseline</h4>
          <p class="text-sm text-gray-700">${m.referenceBaseline}</p>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-slate-800 mb-2">Data Feeds</h4>
          <ul class="text-sm text-gray-700 space-y-1">${m.dataFeeds.map(f => `<li>• ${f}</li>`).join('')}</ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-slate-800 mb-2">External Source Media Covered</h4>
          <div class="space-y-2 text-sm text-gray-700">
            <div><span class="font-medium">Trade:</span> ${m.mediaCovered.trade}</div>
            <div><span class="font-medium">Business:</span> ${m.mediaCovered.business}</div>
            <div><span class="font-medium">Regional:</span> ${m.mediaCovered.regional}</div>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-slate-800 mb-2">Sentiment Scale</h4>
          <div class="space-y-2">${sentimentScale}</div>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-slate-800 mb-2">How Coverage & Stakeholders Were Assessed</h4>
          <ul class="text-sm text-gray-700 space-y-1">${m.assessmentMethod.map(a => `<li>• ${a}</li>`).join('')}</ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-slate-800 mb-2">Priorities for Next Iteration</h4>
          <ul class="text-sm text-gray-700 space-y-1">${m.nextIteration.map(n => `<li>• ${n}</li>`).join('')}</ul>
        </div>
      </div>`;
  },
};
