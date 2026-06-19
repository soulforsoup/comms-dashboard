// C-DASH Application Controller
// Tab navigation, section rendering, initialization

const App = {
  activeSection: 'executive',

  // Navigation items
  navItems: [
    { id: 'executive', label: 'Executive Overview', icon: 'barChart3' },
    { id: 'overview', label: 'Strategic Dashboard', icon: 'trendingUp' },
    { id: 'mediabias', label: 'Media Bias', icon: 'shield' },
    { id: 'competitors', label: 'Competitor Analyses', icon: 'users' },
    { id: 'media', label: 'Media Visibility', icon: 'trendingUp' },
    { id: 'messages', label: 'Message Effectiveness', icon: 'messageSquare' },
    { id: 'reputation', label: 'Reputation Health', icon: 'shield' },
    { id: 'stakeholders', label: 'Stakeholder Intelligence', icon: 'users' },
  ],

  // Initialize the application
  init() {
    this.renderHeader();
    this.renderNav();
    this.renderKPIs();
    this.renderSection(this.activeSection);
    this.bindEvents();
  },

  // Render header
  renderHeader() {
    const header = document.getElementById('app-header');
    if (!header) return;
    const d = DASHBOARD_DATA.header;
    header.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-6">
          <img src="assets/psa-logo.png" alt="PSA Logo" class="h-12" />
          <div>
            <h1 class="text-2xl tracking-tight text-blue-900">${d.title}</h1>
            <p class="text-xs text-gray-600 mt-1">${d.subtitle} | Reporting period: ${d.reportingPeriod}</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-gray-700 border border-gray-200">
            ${Components.icons.calendar}
            <span class="text-sm">1 Jan - 8 Jun 2026</span>
          </button>
          <button class="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-gray-700 border border-gray-200">
            ${Components.icons.filter}
            <span class="text-sm">All Regions</span>
          </button>
          <button class="flex items-center gap-2 px-3 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-white">
            ${Components.icons.download}
            <span class="text-sm">Export</span>
          </button>
        </div>
      </div>`;
  },

  // Render navigation
  renderNav() {
    const nav = document.getElementById('app-nav');
    if (!nav) return;
    const items = this.navItems.map(item => {
      const active = item.id === this.activeSection ? 'bg-blue-600 text-white font-medium' : 'text-gray-700 hover:bg-gray-100';
      return `
        <button data-section="${item.id}" class="w-full flex items-center gap-3 px-4 py-2.5 rounded-md transition-colors text-sm ${active}">
          ${Components.icons[item.icon]}
          <span>${item.label}</span>
        </button>`;
    }).join('');
    nav.innerHTML = `<div class="space-y-1">${items}</div>`;
  },

  // Render KPI cards
  renderKPIs() {
    const container = document.getElementById('app-kpis');
    if (!container) return;
    container.innerHTML = DASHBOARD_DATA.kpis.map(kpi => Components.kpiCard(kpi)).join('');
  },

  // Render a section
  renderSection(section) {
    const main = document.getElementById('app-main');
    if (!main) return;

    // Destroy existing charts
    Charts.destroyAll();

    let html = '';

    switch (section) {
      case 'executive':
        html = this.renderExecutiveOverview();
        break;
      case 'overview':
        html = this.renderStrategicDashboard();
        break;
      case 'mediabias':
        html = this.renderMediaBias();
        break;
      case 'competitors':
        html = this.renderCompetitors();
        break;
      case 'media':
        html = this.renderMediaVisibility();
        break;
      case 'messages':
        html = this.renderMessageEffectiveness();
        break;
      case 'reputation':
        html = this.renderReputationHealth();
        break;
      case 'stakeholders':
        html = this.renderStakeholderIntelligence();
        break;
    }

    main.innerHTML = html;

    // Initialize charts for this section
    Charts.initForSection(section);
  },

  // Executive Overview section
  renderExecutiveOverview() {
    return `
      ${Components.executiveInsight()}
      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${DASHBOARD_DATA.executiveKpis.map(kpi => Components.kpiCard(kpi)).join('')}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2">${Components.signalsActionsTable()}</div>
          ${Components.priorityStakeholdersList()}
        </div>
        ${Components.narrativeTrendChart()}
      </div>
      <div class="mt-8">${Components.actionPanel()}</div>`;
  },

  // Strategic Dashboard section
  renderStrategicDashboard() {
    return `
      ${Components.executiveInsight()}
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div class="lg:col-span-3 space-y-6">
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div class="mb-4 pb-3 border-b border-gray-200">
              <h2 class="text-lg text-blue-900 font-semibold">Media Visibility</h2>
              <p class="text-xs text-gray-600 mt-1">Coverage trends and source analysis</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              ${Components.mediaTrendChart()}
              ${Components.mediaSourceBreakdown()}
            </div>
            <div class="mt-6">${Components.topMediaOutlets()}</div>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div class="mb-4 pb-3 border-b border-gray-200">
              <h2 class="text-lg text-blue-900 font-semibold">Message Effectiveness</h2>
              <p class="text-xs text-gray-600 mt-1">Narrative alignment and message penetration</p>
            </div>
            ${Components.messagePickupChart()}
          </div>
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div class="mb-4 pb-3 border-b border-gray-200">
              <h2 class="text-lg text-blue-900 font-semibold">Reputation Health</h2>
              <p class="text-xs text-gray-600 mt-1">Sentiment monitoring and risk detection</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 class="text-sm text-slate-800 mb-4">Sentiment Overview</h3>
                ${Components.sentimentDonut()}
                <div class="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p class="text-xs text-gray-700"><strong>Excellent:</strong> No direct negative coverage found in reporting period</p>
                </div>
              </div>
              ${Components.riskAlerts()}
            </div>
            ${Components.negativeCoverageTable()}
          </div>
          ${Components.articleDetailsTable()}
        </div>
        <div class="lg:col-span-1">
          <div class="sticky top-6">${Components.executiveReadout()}</div>
        </div>
      </div>
      <div class="mt-8">${Components.actionPanel()}</div>`;
  },

  // Media Bias section
  renderMediaBias() {
    return `
      <div class="space-y-6">
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
          <h2 class="text-2xl text-blue-900 mb-2">Media Intelligence & Narrative Analysis</h2>
          <p class="text-sm text-gray-600">Strategic narrative positioning and competitive media analysis</p>
        </div>
        ${Components.narrativePolaritySpectrum()}
        ${Components.narrativeHeatmap()}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${Components.sentimentDistributionWheel()}
          ${Components.narrativeMomentumTracker()}
        </div>
        ${Components.stakeholderInfluenceMatrix()}
        ${Components.comparativeNarrativePanel()}
        <div class="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 shadow-sm">
          <div class="flex items-start gap-3">
            <div class="text-blue-700 text-sm font-semibold">INTELLIGENCE SUMMARY</div>
          </div>
          <p class="text-sm text-slate-800 mt-3 leading-relaxed">
            PSA maintains strong narrative dominance in innovation, sustainability, and automation themes.
            Strategic focus should continue on amplifying CSR success globally while monitoring geopolitical
            exposure narratives. Competitor narratives remain fragmented, presenting opportunity for continued
            thought leadership positioning.
          </p>
        </div>
      </div>
      <div class="mt-8">${Components.actionPanel()}</div>`;
  },

  // Competitor Analyses section
  renderCompetitors() {
    const cards = DASHBOARD_DATA.competitors.map(c => Components.competitorCard(c)).join('');
    return `
      <div class="space-y-6">
        <div class="mb-8">
          <h2 class="text-2xl text-slate-800 mb-2">Competitive Landscape – Global Terminal Operators</h2>
          <p class="text-sm text-gray-600">Summary of key competitors based on recent industry articles and public sources</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${cards}</div>
        ${Components.competitorComparisonChart()}
        ${Components.keyTakeaways()}
      </div>
      <div class="mt-8">${Components.actionPanel()}</div>`;
  },

  // Media Visibility section
  renderMediaVisibility() {
    return `
      <div class="space-y-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${Components.mediaTrendChart()}
          ${Components.mediaSourceBreakdown()}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${Components.topMediaOutlets()}
          ${Components.coverageHighlights()}
        </div>
      </div>
      <div class="mt-8">${Components.actionPanel()}</div>`;
  },

  // Message Effectiveness section
  renderMessageEffectiveness() {
    return `
      <div class="space-y-6">
        ${Components.messagePickupChart()}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${Components.quotePickupPanel()}
          ${Components.narrativeAlignmentPanel()}
        </div>
      </div>
      <div class="mt-8">${Components.actionPanel()}</div>`;
  },

  // Reputation Health section
  renderReputationHealth() {
    return `
      <div class="space-y-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 class="text-lg text-slate-800 mb-4">Sentiment Overview</h3>
            ${Components.sentimentDonut()}
            <div class="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span class="text-sm text-slate-800">Overall Status: Excellent</span>
              </div>
              <p class="text-xs text-gray-600 mt-2">No direct negative coverage. Narrative is overwhelmingly positive and highly controlled.</p>
            </div>
          </div>
          ${Components.riskAlerts()}
        </div>
        ${Components.negativeCoverageTable()}
      </div>
      <div class="mt-8">${Components.actionPanel()}</div>`;
  },

  // Stakeholder Intelligence section
  renderStakeholderIntelligence() {
    return `
      <div class="space-y-6">
        ${Components.stakeholderMatrix()}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${Components.topMediaOutlets()}
          ${Components.priorityFollowups()}
        </div>
      </div>
      <div class="mt-8">${Components.actionPanel()}</div>`;
  },

  // Bind events
  bindEvents() {
    // Navigation clicks
    document.getElementById('app-nav')?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-section]');
      if (!btn) return;
      const section = btn.dataset.section;
      if (section === this.activeSection) return;
      this.activeSection = section;
      this.renderNav();
      this.renderSection(section);
    });
  },
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
