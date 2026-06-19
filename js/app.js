// C-DASH Application Controller
// One-pager layout with sidebar (desktop) + anchor nav (mobile) + scroll spy

let Data = {};

const App = {
  activeSection: 'executive',
  observer: null,

  async init() {
    await DataLoader.load();
    Data = DataLoader.get();

    this.renderHeader();
    this.renderSidebar();
    this.renderMobileNav();
    this.renderAllSections();
    this.initScrollSpy();
    this.bindEvents();
  },

  renderHeader() {
    const header = document.getElementById('app-header');
    if (!header) return;
    const d = Data.header;
    header.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img src="assets/psa-logo.png" alt="PSA Logo" class="h-9" />
          <div>
            <h1 class="text-lg tracking-tight text-blue-900 font-semibold">${d.title}</h1>
            <p class="header-subtitle text-xs text-gray-600 mt-0.5">${d.subtitle} | ${d.company} | ${d.period}</p>
          </div>
        </div>
        <button id="btn-about" class="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-gray-700 border border-gray-200 text-sm">
          ${Components.icons.info}
          <span class="hidden sm:inline">About</span>
        </button>
      </div>`;
  },

  renderSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    if (!sidebar) return;

    const items = Components.sidebarItems.map(item => {
      const isActive = this.activeSection === item.id;
      return `
        <a href="#${item.id}" class="sidebar-item ${isActive ? 'active' : ''}" data-section="${item.id}">
          <span class="sidebar-item-icon">${Components.icons[item.icon]}</span>
          <span>${item.label}</span>
        </a>`;
    }).join('');

    sidebar.innerHTML = `
      <div class="sidebar-logo">
        <img src="assets/psa-logo.png" alt="PSA" />
        <h2>C-DASH</h2>
      </div>
      ${items}`;
  },

  renderMobileNav() {
    const nav = document.getElementById('mobile-nav');
    if (!nav) return;

    const items = Components.sidebarItems.map(item => {
      const isActive = this.activeSection === item.id;
      return `
        <a href="#${item.id}" class="mobile-nav-item ${isActive ? 'active' : ''}" data-section="${item.id}">
          ${item.label}
        </a>`;
    }).join('');

    nav.innerHTML = `<div class="mobile-nav-inner">${items}</div>`;
  },

  renderAllSections() {
    const main = document.getElementById('app-main');
    if (!main) return;

    main.innerHTML = [
      Components.executiveOverviewSection(),
      Components.mediaSentimentSection(),
      Components.strategicDashboardSection(),
      Components.competitorLandscapeSection(),
      Components.stakeholderMatrixSection(),
      Components.stakeholderIntelligenceSection(),
      Components.methodologySection(),
    ].join('');

    Charts.initForSection('competitors');
  },

  initScrollSpy() {
    const sections = document.querySelectorAll('.section');
    if (sections.length === 0) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    sections.forEach(section => this.observer.observe(section));
  },

  setActiveSection(sectionId) {
    if (sectionId === this.activeSection) return;
    this.activeSection = sectionId;

    // Update sidebar
    document.querySelectorAll('.sidebar-item').forEach(item => {
      item.classList.toggle('active', item.dataset.section === sectionId);
    });

    // Update mobile nav
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.section === sectionId);
    });

    // Scroll active sidebar item into view
    const activeSidebar = document.querySelector(`.sidebar-item[data-section="${sectionId}"]`);
    if (activeSidebar) {
      activeSidebar.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    // Scroll active mobile nav item into view
    const activeMobile = document.querySelector(`.mobile-nav-item[data-section="${sectionId}"]`);
    if (activeMobile) {
      activeMobile.scrollIntoView({ inline: 'center', behavior: 'smooth' });
    }
  },

  showAboutModal() {
    const modal = document.getElementById('about-modal');
    const content = document.getElementById('about-content');
    if (!modal || !content) return;

    content.innerHTML = Components.aboutContent();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  },

  hideAboutModal() {
    const modal = document.getElementById('about-modal');
    if (!modal) return;

    modal.classList.add('hidden');
    modal.classList.remove('flex');
  },

  bindEvents() {
    // Sidebar clicks (smooth scroll)
    document.getElementById('app-sidebar')?.addEventListener('click', (e) => {
      const item = e.target.closest('[data-section]');
      if (!item) return;
      e.preventDefault();
      const target = document.getElementById(item.dataset.section);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });

    // Mobile nav clicks (smooth scroll)
    document.getElementById('mobile-nav')?.addEventListener('click', (e) => {
      const item = e.target.closest('[data-section]');
      if (!item) return;
      e.preventDefault();
      const target = document.getElementById(item.dataset.section);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });

    // About button
    document.getElementById('btn-about')?.addEventListener('click', () => this.showAboutModal());

    // Close modal
    document.getElementById('about-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'about-modal' || e.target.closest('#btn-close-modal')) {
        this.hideAboutModal();
      }
    });

    // ESC to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.hideAboutModal();
    });
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
