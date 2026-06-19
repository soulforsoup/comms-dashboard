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
          <img src="${Data.logoBase64}" alt="PSA Logo" class="logo-img" />
          <div>
            <h1 class="text-lg tracking-tight text-blue-900 font-semibold">${d.title}</h1>
            <p class="header-subtitle text-xs text-gray-600 mt-0.5">${d.subtitle} | ${d.company} | ${d.period}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button id="btn-export" class="flex items-center gap-2 px-3 py-1.5 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-white border border-blue-700 text-sm">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span class="hidden sm:inline">Export PDF</span>
          </button>
          <button id="btn-about" class="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors text-gray-700 border border-gray-200 text-sm">
            ${Components.icons.info}
            <span class="hidden sm:inline">About</span>
          </button>
        </div>
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
        <img src="${Data.logoBase64}" alt="PSA" />
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

  async exportPDF() {
    const btn = document.getElementById('btn-export');
    if (!btn) return;

    // Show loading state
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `
      <svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      <span class="hidden sm:inline">Generating...</span>
    `;
    btn.disabled = true;

    try {
      // Clone the main content for PDF
      const mainContent = document.getElementById('app-main');

      // Create a wrapper for PDF content
      const pdfWrapper = document.createElement('div');
      pdfWrapper.style.background = '#ffffff';
      pdfWrapper.style.padding = '20px';
      pdfWrapper.style.maxWidth = '1200px';
      pdfWrapper.style.margin = '0 auto';

      // Add header info
      const headerClone = document.createElement('div');
      headerClone.innerHTML = `
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;padding-bottom:16px;border-bottom:2px solid #dbeafe;">
          <img src="${Data.logoBase64}" alt="PSA Logo" style="height:40px;width:auto;object-fit:contain;" />
          <div>
            <h1 style="font-size:18px;font-weight:600;color:#1e3a5f;margin:0;">${Data.header.title}</h1>
            <p style="font-size:11px;color:#6b7280;margin:4px 0 0 0;">${Data.header.subtitle} | ${Data.header.company} | ${Data.header.period}</p>
          </div>
        </div>
      `;
      pdfWrapper.appendChild(headerClone);

      // Clone sections and strip animations
      const sections = mainContent.querySelectorAll('.section');
      sections.forEach(section => {
        const clone = section.cloneNode(true);
        // Remove animation class to prevent transparency issues
        clone.classList.remove('animate-in');
        // Remove card styling for PDF (cleaner look)
        clone.style.background = 'none';
        clone.style.border = 'none';
        clone.style.boxShadow = 'none';
        clone.style.padding = '0';
        clone.style.marginBottom = '24px';
        clone.style.pageBreakInside = 'avoid';
        clone.style.opacity = '1';
        clone.style.transform = 'none';
        pdfWrapper.appendChild(clone);
      });

      // Add footer
      const footer = document.createElement('div');
      footer.innerHTML = `
        <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;font-size:10px;color:#9ca3af;text-align:center;">
          ${Data.header.disclaimer || ''} | Generated ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      `;
      pdfWrapper.appendChild(footer);

      // PDF options
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `C-DASH-Report-${new Date().toISOString().split('T')[0]}.pdf`,
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          letterRendering: true,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
        pagebreak: {
          mode: ['css'],
          before: '.page-break',
          avoid: '.no-break',
        },
      };

      // Generate PDF
      await html2pdf().set(opt).from(pdfWrapper).save();
    } catch (error) {
      console.error('PDF export failed:', error);
      alert('PDF export failed. Please try again.');
    } finally {
      // Restore button
      btn.innerHTML = originalHTML;
      btn.disabled = false;
    }
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

    // Export PDF button
    document.getElementById('btn-export')?.addEventListener('click', () => this.exportPDF());

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
