// C-DASH Component Renderers
// Each function returns HTML string for its component

const Components = {
  // SVG Icons (inline replacements for lucide-react)
  icons: {
    trendingUp: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
    trendingDown: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',
    trendingUpSm: '<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
    trendingDownSm: '<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>',
    alertTriangle: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    alertTriangleSm: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    minus: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    newspaper: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></svg>',
    fileText: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    alertCircle: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
    alertCircleSm: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
    checkCircle2: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    checkCircle: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    clock: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    user: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    circle: '<svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>',
    globe: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    settings: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    flag: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>',
    lightbulb: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
    award: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    users: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    calendar: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    filter: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    download: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    barChart3: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',
    messageSquare: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    shield: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  },

  // KPI Card
  kpiCard(kpi) {
    const statusColors = { green: 'bg-emerald-500', amber: 'bg-amber-500', red: 'bg-red-500' };
    let trendHtml = '';
    if (kpi.trend) {
      const color = kpi.trend.direction === 'up' ? 'text-emerald-600' : 'text-red-600';
      const icon = kpi.trend.direction === 'up' ? this.icons.trendingUp : this.icons.trendingDown;
      trendHtml = `<div class="flex items-center gap-1 mt-2 text-sm ${color}">${icon}<span>${kpi.trend.value}</span></div>`;
    }
    let statusHtml = kpi.status ? `<div class="w-3 h-3 rounded-full ${statusColors[kpi.status]}"></div>` : '';
    let subtitleHtml = kpi.subtitle ? `<div class="text-xs text-gray-500 mt-1">${kpi.subtitle}</div>` : '';
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div class="text-sm text-gray-600 mb-2">${kpi.title}</div>
        <div class="flex items-baseline gap-3">
          <div class="text-3xl text-slate-800">${kpi.value}</div>
          ${statusHtml}
        </div>
        ${trendHtml}
        ${subtitleHtml}
      </div>`;
  },

  // Executive Insight
  executiveInsight() {
    const d = DASHBOARD_DATA.executiveInsight;
    return `
      <div class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-600 rounded-lg p-6 mb-6 shadow-sm border border-gray-200">
        <div class="flex items-start gap-4">
          <div class="mt-1 text-blue-600">${this.icons.trendingUp}</div>
          <div>
            <h3 class="text-lg text-blue-900 mb-2 font-semibold">${d.title}</h3>
            <p class="text-sm text-gray-700 leading-relaxed">${d.text}</p>
          </div>
        </div>
      </div>`;
  },

  // Executive Readout (right sidebar)
  executiveReadout() {
    const d = DASHBOARD_DATA.executiveReadout;
    const actions = d.recommendedActions.map((a, i) => `${i + 1}. ${a}`).join('<br />');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 class="text-lg text-blue-900 mb-4 pb-3 border-b border-gray-200">Executive Readout</h3>
        <div class="space-y-4">
          <div class="pb-4 border-b border-gray-100">
            <div class="flex items-start gap-3">
              <div class="text-blue-600 mt-0.5 flex-shrink-0">${this.icons.trendingUp}</div>
              <div>
                <div class="text-xs text-gray-500 mb-1">Top Narrative This Period</div>
                <div class="text-sm text-slate-800">${d.topNarrative}</div>
              </div>
            </div>
          </div>
          <div class="pb-4 border-b border-gray-100">
            <div class="flex items-start gap-3">
              <div class="text-emerald-600 mt-0.5 flex-shrink-0">${this.icons.award}</div>
              <div>
                <div class="text-xs text-gray-500 mb-1">Strongest Positive Theme</div>
                <div class="text-sm text-slate-800">${d.strongestTheme}</div>
              </div>
            </div>
          </div>
          <div class="pb-4 border-b border-gray-100">
            <div class="flex items-start gap-3">
              <div class="text-amber-500 mt-0.5 flex-shrink-0">${this.icons.alertTriangleSm}</div>
              <div>
                <div class="text-xs text-gray-500 mb-1">Most Important Risk Signal</div>
                <div class="text-sm text-slate-800">${d.riskSignal}</div>
              </div>
            </div>
          </div>
          <div class="pb-4 border-b border-gray-100">
            <div class="flex items-start gap-3">
              <div class="text-blue-600 mt-0.5 flex-shrink-0">${this.icons.users}</div>
              <div>
                <div class="text-xs text-gray-500 mb-1">Priority Stakeholder Cluster</div>
                <div class="text-sm text-slate-800">${d.priorityCluster}</div>
              </div>
            </div>
          </div>
          <div class="bg-blue-50 rounded-lg p-4">
            <div class="flex items-start gap-3">
              <div class="text-blue-600 mt-0.5 flex-shrink-0">${this.icons.checkCircle}</div>
              <div>
                <div class="text-xs text-blue-700 mb-1 font-semibold">Recommended Action</div>
                <div class="text-sm text-slate-800">${actions}</div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  },

  // Signals & Actions Table
  signalsActionsTable() {
    const rows = DASHBOARD_DATA.signals.map(s => {
      const priorityColors = { High: 'bg-red-100 text-red-700', Medium: 'bg-amber-100 text-amber-700', Low: 'bg-blue-100 text-blue-700' };
      return `
        <tr class="border-b border-gray-100 hover:bg-gray-50">
          <td class="py-4 px-4">
            <div class="flex items-center gap-2">
              <span class="text-sm text-slate-800">${s.signal}</span>
              <span class="text-xs px-2 py-1 rounded ${priorityColors[s.priority]}">${s.priority}</span>
            </div>
          </td>
          <td class="py-4 px-4 text-sm text-gray-700">${s.summary}</td>
          <td class="py-4 px-4 text-sm text-gray-600">${s.stakeholder}</td>
          <td class="py-4 px-4 text-sm text-blue-600">${s.action}</td>
        </tr>`;
    }).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div class="flex items-center gap-2 mb-6">
          <div class="text-blue-600">${this.icons.alertCircle}</div>
          <h3 class="text-lg text-slate-800">Top Signals & Actions</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="bg-gray-50 border-b border-gray-200">
              <th class="text-left py-3 px-4 text-xs text-gray-600">Signal</th>
              <th class="text-left py-3 px-4 text-xs text-gray-600">Summary</th>
              <th class="text-left py-3 px-4 text-xs text-gray-600">Stakeholder</th>
              <th class="text-left py-3 px-4 text-xs text-gray-600">Action</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  },

  // Priority Stakeholders List
  priorityStakeholdersList() {
    const statusColors = { emerald: 'text-emerald-600', blue: 'text-blue-600', amber: 'text-amber-600', red: 'text-red-600' };
    const items = DASHBOARD_DATA.priorityStakeholders.map(s => `
      <div class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <h4 class="text-sm text-slate-800 mb-1">${s.name}</h4>
            <p class="text-xs text-gray-600">${s.role} • ${s.organisation}</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full ${statusColors[s.statusColor]} bg-current"></div>
            <span class="text-xs text-gray-600">${s.status}</span>
          </div>
        </div>
      </div>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div class="flex items-center gap-2 mb-6">
          <div class="text-blue-600">${this.icons.user}</div>
          <h3 class="text-lg text-slate-800">Priority Stakeholders</h3>
        </div>
        <div class="space-y-3">${items}</div>
      </div>`;
  },

  // Narrative Trend Chart (placeholder - rendered by Chart.js)
  narrativeTrendChart() {
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 class="text-lg text-slate-800 mb-4">Narrative / Tone Trend</h3>
        <div style="position:relative;height:200px"><canvas id="chart-narrative-trend"></canvas></div>
      </div>`;
  },

  // Media Trend Chart
  mediaTrendChart() {
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 class="text-lg text-slate-800 mb-4">Media Mentions Trend</h3>
        <div style="position:relative;height:300px"><canvas id="chart-media-trend"></canvas></div>
      </div>`;
  },

  // Media Source Breakdown
  mediaSourceBreakdown() {
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 class="text-lg text-slate-800 mb-4">Media Source Breakdown</h3>
        <div style="position:relative;height:280px"><canvas id="chart-media-source"></canvas></div>
      </div>`;
  },

  // Message Pickup Chart
  messagePickupChart() {
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 class="text-lg text-slate-800 mb-4">Key Message Pick-Up by Theme</h3>
        <div style="position:relative;height:300px"><canvas id="chart-message-pickup"></canvas></div>
      </div>`;
  },

  // Sentiment Donut
  sentimentDonut() {
    return `
      <div style="position:relative;height:250px">
        <canvas id="chart-sentiment-donut"></canvas>
      </div>`;
  },

  // Sentiment Distribution Wheel
  sentimentDistributionWheel() {
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div class="mb-4">
          <h3 class="text-lg text-blue-900 mb-1">Sentiment Distribution</h3>
          <p class="text-xs text-gray-600">Coverage allocation across narrative categories</p>
        </div>
        <div style="position:relative;height:300px"><canvas id="chart-sentiment-distribution"></canvas></div>
      </div>`;
  },

  // Comparative Narrative Panel
  comparativeNarrativePanel() {
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div class="mb-4">
          <h3 class="text-lg text-blue-900 mb-1">Comparative Narrative Strength</h3>
          <p class="text-xs text-gray-600">PSA vs. average competitor coverage intensity</p>
        </div>
        <div style="position:relative;height:350px"><canvas id="chart-comparative-narrative"></canvas></div>
        <div class="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div class="text-xs text-blue-700 font-semibold mb-2">Key Insights</div>
          <div class="space-y-1 text-xs text-gray-700">
            <div>• PSA leads in innovation, sustainability, and automation narratives</div>
            <div>• Geopolitical risk mentions lower for PSA (favourable positioning)</div>
            <div>• Employer brand narrative has growth opportunity vs. competitors</div>
          </div>
        </div>
      </div>`;
  },

  // Competitor Comparison Chart
  competitorComparisonChart() {
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 class="text-lg text-slate-800 mb-4">Competitive Performance Indicators</h3>
        <p class="text-xs text-gray-600 mb-4">Relative scale (0-100) based on industry analysis</p>
        <div style="position:relative;height:300px"><canvas id="chart-competitor-comparison"></canvas></div>
      </div>`;
  },

  // Follow-ups by Team Chart
  followupsByTeamChart() {
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 class="text-lg text-slate-800 mb-4">Follow-ups Due (by Owner/Team)</h3>
        <div style="position:relative;height:200px"><canvas id="chart-followups-team"></canvas></div>
      </div>`;
  },

  // Risk Alerts
  riskAlerts() {
    const severityColors = { High: 'bg-red-100 border-red-300', Medium: 'bg-amber-100 border-amber-300', Low: 'bg-blue-100 border-blue-300' };
    const items = DASHBOARD_DATA.risks.map(r => `
      <div class="border-2 rounded-lg p-4 ${severityColors[r.severity]}">
        <div class="flex items-start justify-between mb-2">
          <h4 class="text-sm text-slate-800">${r.issue}</h4>
          <span class="text-xs px-2 py-1 bg-white rounded border border-gray-300">${r.severity}</span>
        </div>
        <div class="space-y-1 text-xs text-gray-700">
          <div class="flex items-center gap-2"><span class="text-gray-500">Geography:</span><span>${r.geography}</span></div>
          <div class="flex items-center gap-2">${this.icons.trendingUpSm}<span class="text-gray-500">Trend:</span><span>${r.trend}</span></div>
          <div class="mt-2 pt-2 border-t border-gray-300">
            <span class="text-gray-500">Suggested action:</span>
            <p class="mt-1 text-gray-700">${r.action}</p>
          </div>
        </div>
      </div>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div class="flex items-center gap-2 mb-4">
          <div class="text-red-500">${this.icons.alertTriangle}</div>
          <h3 class="text-lg text-slate-800">Early Risk Signals</h3>
        </div>
        <div class="space-y-3">${items}</div>
      </div>`;
  },

  // Negative Coverage Table
  negativeCoverageTable() {
    const trendIcons = { up: `<span class="text-red-500">${this.icons.trendingUpSm}</span>`, down: `<span class="text-emerald-500">${this.icons.trendingDownSm}</span>`, stable: `<span class="text-gray-400">${this.icons.minus}</span>` };
    const severityColors = { High: 'text-red-600 bg-red-50', Medium: 'text-amber-600 bg-amber-50', Low: 'text-emerald-600 bg-emerald-50' };
    const rows = DASHBOARD_DATA.negativeCoverage.map(item => `
      <tr class="border-b border-gray-100 hover:bg-gray-50">
        <td class="py-3 px-4 text-sm text-slate-800">${item.issue}</td>
        <td class="py-3 px-4"><span class="inline-block px-2 py-1 rounded text-xs ${severityColors[item.severity]}">${item.severity}</span></td>
        <td class="py-3 px-4 text-sm text-gray-600">${item.geography}</td>
        <td class="py-3 px-4 text-center">${trendIcons[item.trend]}</td>
        <td class="py-3 px-4 text-center text-sm text-slate-800">${item.mentions}</td>
      </tr>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div class="flex items-center gap-2 mb-4">
          <div class="text-amber-500">${this.icons.alertTriangle}</div>
          <h3 class="text-lg text-slate-800">Embedded Risk Issues</h3>
          <span class="text-xs text-gray-500 ml-2">(No direct negative coverage)</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="border-b border-gray-200">
              <th class="text-left py-3 px-4 text-sm text-gray-600">Issue</th>
              <th class="text-left py-3 px-4 text-sm text-gray-600">Severity</th>
              <th class="text-left py-3 px-4 text-sm text-gray-600">Geography</th>
              <th class="text-center py-3 px-4 text-sm text-gray-600">Trend</th>
              <th class="text-center py-3 px-4 text-sm text-gray-600">Mentions</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  },

  // Top Media Outlets
  topMediaOutlets() {
    const sentimentColors = { positive: 'bg-emerald-100 text-emerald-700', neutral: 'bg-gray-100 text-gray-700', negative: 'bg-red-100 text-red-700' };
    const items = DASHBOARD_DATA.topMediaOutlets.map(o => `
      <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
        <div class="flex-1">
          <div class="text-sm text-slate-800">${o.name}</div>
          <div class="text-xs text-gray-500 mt-1">Tier ${o.tier}</div>
        </div>
        <div class="flex items-center gap-3">
          <div class="text-sm text-slate-700">${o.mentions} mentions</div>
          <span class="text-xs px-2 py-1 rounded ${sentimentColors[o.sentiment]}">${o.sentiment}</span>
        </div>
      </div>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div class="flex items-center gap-2 mb-4">
          <div class="text-blue-600">${this.icons.newspaper}</div>
          <h3 class="text-lg text-slate-800">Top Media Outlets</h3>
        </div>
        <div class="space-y-3">${items}</div>
      </div>`;
  },

  // Article Details Table
  articleDetailsTable() {
    const sentimentColors = { Positive: 'text-emerald-600 bg-emerald-50', Neutral: 'text-gray-600 bg-gray-50', Negative: 'text-red-600 bg-red-50' };
    const rows = DASHBOARD_DATA.articles.map(a => `
      <tr class="border-b border-gray-100 hover:bg-gray-50">
        <td class="py-3 px-3 text-xs text-gray-700">${a.date}</td>
        <td class="py-3 px-3 text-xs text-slate-800">${a.source}</td>
        <td class="py-3 px-3 text-xs text-gray-600">${a.geography}</td>
        <td class="py-3 px-3 text-xs text-gray-600">${a.topic}</td>
        <td class="py-3 px-3"><span class="inline-block px-2 py-1 rounded text-xs ${sentimentColors[a.sentiment]}">${a.sentiment}</span></td>
        <td class="py-3 px-3 text-xs text-gray-700">${a.keyMessage}</td>
      </tr>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div class="flex items-center gap-2 mb-4">
          <div class="text-blue-600">${this.icons.fileText}</div>
          <h3 class="text-lg text-slate-800">Article-Level Coverage Analysis</h3>
          <span class="text-xs text-gray-500 ml-2">Mar–May 2026</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="border-b border-gray-200">
              <th class="text-left py-3 px-3 text-xs text-gray-600">Date</th>
              <th class="text-left py-3 px-3 text-xs text-gray-600">Source</th>
              <th class="text-left py-3 px-3 text-xs text-gray-600">Geography</th>
              <th class="text-left py-3 px-3 text-xs text-gray-600">Topic</th>
              <th class="text-left py-3 px-3 text-xs text-gray-600">Sentiment</th>
              <th class="text-left py-3 px-3 text-xs text-gray-600">Key Message</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  },

  // Action Panel
  actionPanel() {
    const priorityColors = { High: 'text-red-600 bg-red-50 border-red-200', Medium: 'text-amber-600 bg-amber-50 border-amber-200', Low: 'text-blue-600 bg-blue-50 border-blue-200' };
    const statusIcons = { completed: `<span class="text-emerald-500">${this.icons.checkCircle2}</span>`, 'in-progress': `<span class="text-blue-500">${this.icons.clock}</span>`, pending: `<span class="text-gray-400">${this.icons.alertCircleSm}</span>` };
    const items = DASHBOARD_DATA.actions.map(a => `
      <div class="border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-colors">
        <div class="flex items-start gap-3">
          <div class="mt-0.5">${statusIcons[a.status]}</div>
          <div class="flex-1">
            <p class="text-sm text-slate-800 mb-2">${a.title}</p>
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <span class="px-2 py-1 rounded border ${priorityColors[a.priority]}">${a.priority}</span>
              <span class="text-gray-500">Owner: ${a.owner}</span>
              <span class="text-gray-500">Due: ${a.dueDate}</span>
            </div>
          </div>
        </div>
      </div>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 class="text-lg text-slate-800 mb-4">Recommended Actions</h3>
        <div class="space-y-3">${items}</div>
      </div>`;
  },

  // Competitor Card
  competitorCard(comp) {
    const borderClass = comp.isHighlighted ? 'border-blue-600 ring-2 ring-blue-100' : '';
    const badge = comp.isHighlighted ? '<span class="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">PSA</span>' : '';
    const focus = comp.strategicFocus.map(f => `<li class="text-sm text-slate-700 list-disc">${f}</li>`).join('');
    const dev = comp.recentDevelopments.map(d => `<li class="text-sm text-slate-700 list-disc">${d}</li>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border-t-4 ${borderClass}" style="border-top-color: ${comp.isHighlighted ? undefined : comp.accentColor}">
        <div class="mb-4">
          <h3 class="text-lg text-slate-800 mb-1">${comp.company}</h3>
          ${badge}
        </div>
        <div class="mb-4">
          <div class="flex items-center gap-2 mb-2"><div class="text-gray-500">${this.icons.globe}</div><span class="text-xs text-gray-600">Global Footprint</span></div>
          <p class="text-sm text-slate-700 ml-6">${comp.footprint}</p>
        </div>
        <div class="mb-4">
          <div class="flex items-center gap-2 mb-2"><div class="text-gray-500">${this.icons.settings}</div><span class="text-xs text-gray-600">Strategic Focus</span></div>
          <ul class="ml-6 space-y-1">${focus}</ul>
        </div>
        <div class="mb-4">
          <div class="flex items-center gap-2 mb-2"><div class="text-gray-500">${this.icons.newspaper}</div><span class="text-xs text-gray-600">Recent Developments</span></div>
          <ul class="ml-6 space-y-1">${dev}</ul>
        </div>
        <div class="pt-4 border-t border-gray-200">
          <div class="flex items-start gap-2"><div class="text-gray-500 mt-0.5 flex-shrink-0">${this.icons.flag}</div><p class="text-sm text-gray-700 italic">${comp.positioning}</p></div>
        </div>
      </div>`;
  },

  // Key Takeaways
  keyTakeaways() {
    const items = DASHBOARD_DATA.keyTakeaways.map(t => `
      <li class="flex items-start gap-3">
        <span class="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
        <p class="text-sm text-gray-700">${t}</p>
      </li>`).join('');
    return `
      <div class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-600 rounded-lg p-6 shadow-sm">
        <div class="flex items-start gap-4">
          <div class="mt-1 text-blue-600">${this.icons.lightbulb}</div>
          <div>
            <h3 class="text-lg text-slate-800 mb-3">Key Industry Takeaways</h3>
            <ul class="space-y-2">${items}</ul>
          </div>
        </div>
      </div>`;
  },

  // Narrative Polarity Spectrum
  narrativePolaritySpectrum() {
    const stories = DASHBOARD_DATA.narrativePolarity;
    const nodes = stories.map(s => {
      const left = ((s.position + 100) / 200) * 100;
      const top = 20 + (100 - s.reach * 15) + (s.position % 10);
      const size = 8 + s.reach * 4;
      let color;
      if (s.theme === 'neutral') color = 'rgba(148, 163, 184, 0.6)';
      else if (s.theme === 'challenge') color = 'rgba(239, 68, 68, 0.6)';
      else color = s.sentiment > 0.7 ? 'rgba(16, 185, 129, 0.7)' : 'rgba(37, 99, 235, 0.6)';
      return `
        <div class="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-125 group"
             style="left:${left}%;top:${top}%;width:${size}px;height:${size}px;">
          <div class="w-full h-full rounded-full shadow-lg" style="background-color:${color}"></div>
          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white border border-gray-300 rounded text-xs text-slate-800 whitespace-nowrap shadow-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div class="font-semibold">${s.title}</div>
            <div class="text-gray-600 mt-1">Sentiment: ${(s.sentiment * 100).toFixed(0)}% | Reach: ${s.reach.toFixed(1)}x</div>
          </div>
        </div>`;
    }).join('');
    return `
      <div class="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
        <div class="mb-6">
          <h3 class="text-xl text-blue-900 mb-2">Narrative Polarity Spectrum</h3>
          <p class="text-sm text-gray-600">Media positioning across the global terminal operator landscape</p>
        </div>
        <div class="relative h-96 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <div class="absolute inset-0 rounded-lg overflow-hidden opacity-20">
            <div class="absolute inset-0 bg-gradient-to-r from-red-100 via-gray-50 to-blue-100"></div>
          </div>
          <div class="absolute top-4 left-4 text-xs text-gray-700">
            <div class="font-semibold text-red-600 mb-1">← Competitor Narratives</div>
            <div class="text-gray-600 space-y-0.5"><div>• DP World</div><div>• APM Terminals</div><div>• Hutchison Ports</div></div>
          </div>
          <div class="absolute top-4 right-4 text-xs text-gray-700 text-right">
            <div class="font-semibold text-blue-600 mb-1">PSA Narratives →</div>
            <div class="text-gray-600 space-y-0.5"><div>• PSA International</div><div>• Tuas Port</div><div>• Living Lab</div></div>
          </div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-gray-600"><div class="font-semibold">Neutral / Balanced</div></div>
          <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>
          <div class="relative h-full">${nodes}</div>
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 text-xs text-gray-600">
            <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-emerald-500/70"></div><span>Strong Positive</span></div>
            <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-blue-500/60"></div><span>Moderate Positive</span></div>
            <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-slate-400/60"></div><span>Neutral</span></div>
            <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-red-500/60"></div><span>Risk Signal</span></div>
          </div>
        </div>
      </div>`;
  },

  // Narrative Heatmap
  narrativeHeatmap() {
    const getColor = (intensity) => {
      if (intensity >= 85) return 'bg-emerald-500/80';
      if (intensity >= 70) return 'bg-cyan-500/70';
      if (intensity >= 55) return 'bg-amber-500/60';
      return 'bg-slate-600/50';
    };
    const getTrend = (trend) => {
      if (trend === 'rising') return '↗';
      if (trend === 'declining') return '↘';
      return '→';
    };
    const cells = DASHBOARD_DATA.narrativeHeatmap.map(t => `
      <div class="${getColor(t.intensity)} rounded-lg p-4 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all cursor-pointer">
        <div class="flex items-start justify-between mb-2">
          <span class="text-xs text-slate-800 leading-tight font-medium">${t.name}</span>
          <span class="text-lg ml-2">${getTrend(t.trend)}</span>
        </div>
        <div class="text-2xl text-slate-900">${t.intensity}</div>
        <div class="text-xs text-gray-700 mt-1 capitalize">${t.trend}</div>
      </div>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div class="mb-4">
          <h3 class="text-lg text-blue-900 mb-1">Narrative Heatmap</h3>
          <p class="text-xs text-gray-600">Dominant themes and emerging narratives</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">${cells}</div>
      </div>`;
  },

  // Stakeholder Influence Matrix
  stakeholderInfluenceMatrix() {
    const quadrantColors = { ally: 'bg-emerald-500', influential: 'bg-cyan-500', friendly: 'bg-blue-500', neutral: 'bg-slate-500' };
    const dots = DASHBOARD_DATA.stakeholderInfluence.map(s => `
      <div class="absolute group cursor-pointer" style="left:${s.x}%;top:${100 - s.y}%;transform:translate(-50%,-50%);">
        <div class="w-3 h-3 rounded-full ${quadrantColors[s.quadrant]} transition-transform group-hover:scale-150 shadow-lg"></div>
        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-white border border-gray-300 text-slate-800 text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
          <div class="font-semibold">${s.name}</div>
          <div class="text-gray-600">${s.category}</div>
        </div>
      </div>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div class="flex items-center gap-2 mb-4">
          <div class="text-blue-600">${this.icons.users}</div>
          <div>
            <h3 class="text-lg text-blue-900">Stakeholder Influence Matrix</h3>
            <p class="text-xs text-gray-600">Media reach vs. narrative alignment</p>
          </div>
        </div>
        <div class="relative w-full h-96 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
          <div class="absolute inset-0">
            <div class="absolute top-1/2 left-0 right-0 h-px bg-gray-300"></div>
            <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>
          </div>
          <div class="absolute top-4 right-4 text-xs text-emerald-600 font-semibold">Strategic Allies</div>
          <div class="absolute top-4 left-4 text-xs text-cyan-600 font-semibold">Influential Neutrals</div>
          <div class="absolute bottom-4 right-4 text-xs text-blue-600 font-semibold">Friendly Voices</div>
          <div class="absolute bottom-4 left-4 text-xs text-gray-500 font-semibold">Low Priority</div>
          <div class="absolute bottom-2 right-1/2 translate-x-1/2 text-xs text-gray-600">Influence / Reach →</div>
          <div class="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-gray-600">Friendliness →</div>
          ${dots}
        </div>
        <div class="mt-4 flex gap-4 text-xs text-gray-600">
          <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-emerald-500"></div><span>Strategic Allies</span></div>
          <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-cyan-500"></div><span>Influential Neutrals</span></div>
          <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-blue-500"></div><span>Friendly Voices</span></div>
        </div>
      </div>`;
  },

  // Narrative Momentum Tracker
  narrativeMomentumTracker() {
    const getVelocityColor = (v) => {
      if (v >= 75) return 'border-emerald-500 bg-emerald-50';
      if (v >= 50) return 'border-cyan-500 bg-cyan-50';
      return 'border-gray-300 bg-gray-50';
    };
    const items = DASHBOARD_DATA.narrativeMomentum.map(n => {
      let changeHtml = '';
      if (n.change === 'rising') changeHtml = `<span class="text-emerald-400 flex items-center gap-1">${this.icons.trendingUpSm} Rising</span>`;
      else if (n.change === 'declining') changeHtml = `<span class="text-slate-500 flex items-center gap-1">${this.icons.trendingDownSm} Declining</span>`;
      else changeHtml = '<span class="text-gray-600">Stable</span>';
      const spike = n.spike ? '<span class="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded border border-amber-300">SPIKE</span>' : '';
      const risk = n.risk ? `<span class="text-red-600">${this.icons.alertTriangleSm}</span>` : '';
      return `
        <div class="border-l-4 rounded-lg p-4 ${getVelocityColor(n.velocity)} backdrop-blur-sm">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-sm text-slate-800 font-medium">${n.theme}</span>
                ${spike}${risk}
              </div>
              <div class="flex items-center gap-4">
                <div class="text-xs text-gray-600">Velocity: <span class="text-slate-800">${n.velocity}</span></div>
                <div class="flex items-center gap-1 text-xs">${changeHtml}</div>
              </div>
            </div>
            <div class="ml-4 w-24">
              <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" style="width:${n.velocity}%"></div>
              </div>
            </div>
          </div>
        </div>`;
    }).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div class="mb-4">
          <h3 class="text-lg text-blue-900 mb-1">Narrative Momentum Tracker</h3>
          <p class="text-xs text-gray-600">Coverage velocity and trend indicators</p>
        </div>
        <div class="space-y-3">${items}</div>
      </div>`;
  },

  // Stakeholder Matrix (Stakeholder Intelligence tab)
  stakeholderMatrix() {
    const quadrantColors = { cultivate: 'bg-blue-600', engage: 'bg-blue-400', maintain: 'bg-red-500', monitor: 'bg-gray-400' };
    const dots = DASHBOARD_DATA.stakeholderMatrix.map(s => `
      <div class="absolute group cursor-pointer" style="left:${s.x}%;top:${100 - s.y}%;transform:translate(-50%,-50%);">
        <div class="w-3 h-3 rounded-full ${quadrantColors[s.quadrant]} transition-transform group-hover:scale-150"></div>
        <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">${s.name}</div>
      </div>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div class="flex items-center gap-2 mb-4">
          <div class="text-blue-600">${this.icons.users}</div>
          <h3 class="text-lg text-slate-800">Stakeholder Influence Matrix</h3>
        </div>
        <div class="relative w-full h-96 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg">
          <div class="absolute inset-0">
            <div class="absolute top-1/2 left-0 right-0 h-px bg-gray-300"></div>
            <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>
          </div>
          <div class="absolute top-4 right-4 text-xs text-gray-500">Cultivate Closely</div>
          <div class="absolute top-4 left-4 text-xs text-gray-500">Engage Strategically</div>
          <div class="absolute bottom-4 right-4 text-xs text-gray-500">Maintain Warmth</div>
          <div class="absolute bottom-4 left-4 text-xs text-gray-500">Monitor Lightly</div>
          <div class="absolute bottom-2 right-1/2 translate-x-1/2 text-xs text-gray-600">Influence / Impact →</div>
          <div class="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-gray-600">Relationship Strength →</div>
          ${dots}
        </div>
        <div class="mt-4 flex gap-4 text-xs">
          <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-blue-600"></div><span class="text-gray-600">Cultivate Closely</span></div>
          <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-blue-400"></div><span class="text-gray-600">Engage Strategically</span></div>
          <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-red-500"></div><span class="text-gray-600">Maintain Warmth</span></div>
          <div class="flex items-center gap-2"><div class="w-3 h-3 rounded-full bg-gray-400"></div><span class="text-gray-600">Monitor Lightly</span></div>
        </div>
      </div>`;
  },

  // Quote Pick-Up Panel
  quotePickupPanel() {
    const d = DASHBOARD_DATA.quotePickup;
    const people = d.spokespeople.map(s => `
      <div class="flex justify-between items-center p-2 bg-gray-50 rounded">
        <span class="text-sm text-slate-700">${s.name}</span>
        <span class="text-sm text-blue-600">${s.status}</span>
      </div>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 class="text-lg text-slate-800 mb-4">Quote Pick-Up</h3>
        <div class="space-y-4">
          <div class="flex items-baseline gap-3">
            <div class="text-4xl text-slate-800">${d.level}</div>
            <div class="text-sm text-gray-600">${d.subtitle}</div>
          </div>
          <div class="mt-6 pt-6 border-t border-gray-200">
            <div class="text-sm text-gray-600 mb-3">Top quoted spokespeople:</div>
            <div class="space-y-2">${people}</div>
            <div class="mt-4 pt-4 border-t border-gray-200">
              <p class="text-xs text-gray-600">${d.note}</p>
            </div>
          </div>
        </div>
      </div>`;
  },

  // Narrative Alignment Panel
  narrativeAlignmentPanel() {
    const d = DASHBOARD_DATA.narrativeAlignment;
    const bars = d.themes.map(t => `
      <div>
        <div class="flex justify-between text-sm mb-1">
          <span class="text-slate-700">${t.name}</span>
          <span class="text-emerald-600">${t.value}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-emerald-500 h-2 rounded-full" style="width:${t.value}%"></div>
        </div>
      </div>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 class="text-lg text-slate-800 mb-4">Narrative Alignment</h3>
        <div class="space-y-4">
          <div class="flex items-baseline gap-3">
            <div class="text-4xl text-emerald-600">${d.level}</div>
            <div class="text-sm text-gray-600">${d.subtitle}</div>
          </div>
          <div class="mt-6 pt-6 border-t border-gray-200">
            <div class="text-sm text-gray-600 mb-3">Theme performance:</div>
            <div class="space-y-3">${bars}
              <div class="mt-2"><p class="text-xs text-gray-600">${d.note}</p></div>
            </div>
          </div>
        </div>
      </div>`;
  },

  // Priority Follow-Ups
  priorityFollowups() {
    const priorityColors = { High: 'bg-red-100 text-red-700', Strategic: 'bg-blue-100 text-blue-700', Medium: 'bg-amber-100 text-amber-700' };
    const borderColors = { High: 'bg-red-50 border-red-200', Strategic: 'bg-blue-50 border-blue-200', Medium: 'bg-amber-50 border-amber-200' };
    const items = DASHBOARD_DATA.priorityFollowups.map(f => `
      <div class="p-3 ${borderColors[f.priority]} border rounded-lg">
        <div class="flex items-center justify-between mb-1">
          <span class="text-sm text-slate-800">${f.name}</span>
          <span class="text-xs px-2 py-1 ${priorityColors[f.priority]} rounded">${f.priority}</span>
        </div>
        <p class="text-xs text-gray-600">${f.note}</p>
      </div>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 class="text-lg text-slate-800 mb-4">Priority Follow-Ups</h3>
        <div class="space-y-3">${items}</div>
      </div>`;
  },

  // Coverage Highlights
  coverageHighlights() {
    const d = DASHBOARD_DATA.coverageHighlights;
    const peaks = d.peakPeriods.map(p => `<div class="p-2 bg-gray-50 rounded">${p}</div>`).join('');
    return `
      <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 class="text-lg text-slate-800 mb-4">Coverage Highlights</h3>
        <div class="space-y-4">
          <div class="flex items-baseline gap-3">
            <div class="text-4xl text-slate-800">${d.majorSpikes}</div>
            <div class="text-sm text-gray-600">major coverage spikes</div>
          </div>
          <div class="flex items-baseline gap-3">
            <div class="text-2xl text-blue-600">${d.tier1Trade}%</div>
            <div class="text-sm text-gray-600">tier 1 trade media</div>
          </div>
          <div class="mt-6 pt-6 border-t border-gray-200">
            <div class="text-sm text-gray-600 mb-3">Peak coverage periods:</div>
            <div class="space-y-2 text-sm text-slate-700">${peaks}</div>
          </div>
        </div>
      </div>`;
  },
};
