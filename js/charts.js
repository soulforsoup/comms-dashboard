// C-DASH Chart Initializations
// All Chart.js chart rendering

const Charts = {
  instances: {},

  // Destroy all chart instances
  destroyAll() {
    Object.values(this.instances).forEach(chart => {
      if (chart && typeof chart.destroy === 'function') {
        chart.destroy();
      }
    });
    this.instances = {};
  },

  // Destroy a specific chart
  destroy(id) {
    if (this.instances[id]) {
      this.instances[id].destroy();
      delete this.instances[id];
    }
  },

  // Common chart options
  commonOptions: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#374151',
          font: { size: 12 },
        },
      },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#1f2937',
        bodyColor: '#374151',
        borderColor: '#d1d5db',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
      },
    },
    scales: {
      x: {
        ticks: { color: '#64748b' },
        grid: { color: '#e2e8f0' },
      },
      y: {
        ticks: { color: '#64748b' },
        grid: { color: '#e2e8f0' },
      },
    },
  },

  // Narrative Trend Chart (Executive Overview)
  initNarrativeTrend() {
    const ctx = document.getElementById('chart-narrative-trend');
    if (!ctx) return;
    this.destroy('narrativeTrend');
    this.instances.narrativeTrend = new Chart(ctx, {
      type: 'line',
      data: {
        labels: DASHBOARD_DATA.narrativeTrend.map(d => d.month),
        datasets: [
          {
            label: 'Positive %',
            data: DASHBOARD_DATA.narrativeTrend.map(d => d.positive),
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderWidth: 2,
            tension: 0.3,
            fill: false,
          },
          {
            label: 'Neutral %',
            data: DASHBOARD_DATA.narrativeTrend.map(d => d.neutral),
            borderColor: '#94a3b8',
            backgroundColor: 'rgba(148, 163, 184, 0.1)',
            borderWidth: 2,
            tension: 0.3,
            fill: false,
          },
          {
            label: 'Negative %',
            data: DASHBOARD_DATA.narrativeTrend.map(d => d.negative),
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderWidth: 2,
            tension: 0.3,
            fill: false,
          },
        ],
      },
      options: {
        ...this.commonOptions,
        scales: {
          ...this.commonOptions.scales,
          y: {
            ...this.commonOptions.scales.y,
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });
  },

  // Media Trend Chart
  initMediaTrend() {
    const ctx = document.getElementById('chart-media-trend');
    if (!ctx) return;
    this.destroy('mediaTrend');
    this.instances.mediaTrend = new Chart(ctx, {
      type: 'line',
      data: {
        labels: DASHBOARD_DATA.mediaTrend.map(d => d.week),
        datasets: [
          {
            label: 'Total Mentions',
            data: DASHBOARD_DATA.mediaTrend.map(d => d.mentions),
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            borderWidth: 2,
            tension: 0.3,
            fill: false,
          },
          {
            label: 'Tier 1 Coverage',
            data: DASHBOARD_DATA.mediaTrend.map(d => d.tier1),
            borderColor: '#dc2626',
            backgroundColor: 'rgba(220, 38, 38, 0.1)',
            borderWidth: 2,
            tension: 0.3,
            fill: false,
          },
        ],
      },
      options: {
        ...this.commonOptions,
        scales: {
          ...this.commonOptions.scales,
          y: {
            ...this.commonOptions.scales.y,
            beginAtZero: true,
          },
        },
      },
    });
  },

  // Media Source Breakdown
  initMediaSource() {
    const ctx = document.getElementById('chart-media-source');
    if (!ctx) return;
    this.destroy('mediaSource');
    this.instances.mediaSource = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: DASHBOARD_DATA.mediaSourceBreakdown.map(d => d.type),
        datasets: [{
          label: 'Count',
          data: DASHBOARD_DATA.mediaSourceBreakdown.map(d => d.count),
          backgroundColor: '#2563eb',
          borderRadius: 4,
        }],
      },
      options: {
        ...this.commonOptions,
        indexAxis: 'y',
        plugins: {
          ...this.commonOptions.plugins,
          legend: { display: false },
        },
        scales: {
          x: {
            ...this.commonOptions.scales.x,
            beginAtZero: true,
          },
          y: {
            ...this.commonOptions.scales.y,
            grid: { display: false },
          },
        },
      },
    });
  },

  // Message Pickup Chart
  initMessagePickup() {
    const ctx = document.getElementById('chart-message-pickup');
    if (!ctx) return;
    this.destroy('messagePickup');
    const data = DASHBOARD_DATA.messagePickup;
    this.instances.messagePickup = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => d.theme),
        datasets: [{
          label: 'Pick-Up %',
          data: data.map(d => d.pickup),
          backgroundColor: data.map(d => d.pickup >= 70 ? '#10b981' : d.pickup >= 50 ? '#2563eb' : '#dc2626'),
          borderRadius: 4,
        }],
      },
      options: {
        ...this.commonOptions,
        indexAxis: 'y',
        plugins: {
          ...this.commonOptions.plugins,
          legend: { display: false },
          tooltip: {
            ...this.commonOptions.plugins.tooltip,
            callbacks: {
              label: (context) => `${context.parsed.x}%`,
            },
          },
        },
        scales: {
          x: {
            ...this.commonOptions.scales.x,
            beginAtZero: true,
            max: 100,
          },
          y: {
            ...this.commonOptions.scales.y,
            grid: { display: false },
          },
        },
      },
    });
  },

  // Sentiment Donut
  initSentimentDonut() {
    const ctx = document.getElementById('chart-sentiment-donut');
    if (!ctx) return;
    this.destroy('sentimentDonut');
    const d = DASHBOARD_DATA.sentimentDonut;
    const data = [
      { name: 'Positive', value: d.positive, color: '#10b981' },
      { name: 'Neutral', value: d.neutral, color: '#94a3b8' },
    ];
    if (d.negative > 0) {
      data.push({ name: 'Negative', value: d.negative, color: '#ef4444' });
    }
    this.instances.sentimentDonut = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.map(d => d.name),
        datasets: [{
          data: data.map(d => d.value),
          backgroundColor: data.map(d => d.color),
          borderWidth: 0,
          hoverOffset: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#374151',
              font: { size: 12 },
              padding: 16,
              usePointStyle: true,
              pointStyleWidth: 10,
              generateLabels: (chart) => {
                const dataset = chart.data.datasets[0];
                return chart.data.labels.map((label, i) => ({
                  text: `${label} (${dataset.data[i]}%)`,
                  fillStyle: dataset.backgroundColor[i],
                  strokeStyle: dataset.backgroundColor[i],
                  lineWidth: 0,
                  pointStyle: 'circle',
                  hidden: false,
                  index: i,
                }));
              },
            },
          },
          tooltip: {
            backgroundColor: '#ffffff',
            titleColor: '#1f2937',
            bodyColor: '#374151',
            borderColor: '#d1d5db',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12,
          },
        },
      },
    });
  },

  // Sentiment Distribution Wheel
  initSentimentDistribution() {
    const ctx = document.getElementById('chart-sentiment-distribution');
    if (!ctx) return;
    this.destroy('sentimentDistribution');
    const data = DASHBOARD_DATA.sentimentDistribution;
    this.instances.sentimentDistribution = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.map(d => d.name),
        datasets: [{
          data: data.map(d => d.value),
          backgroundColor: data.map(d => d.color),
          borderWidth: 0,
          hoverOffset: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '55%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#374151',
              font: { size: 12 },
              padding: 16,
              usePointStyle: true,
              pointStyleWidth: 10,
              generateLabels: (chart) => {
                const dataset = chart.data.datasets[0];
                return chart.data.labels.map((label, i) => ({
                  text: `${label} (${dataset.data[i]}%)`,
                  fillStyle: dataset.backgroundColor[i],
                  strokeStyle: dataset.backgroundColor[i],
                  lineWidth: 0,
                  pointStyle: 'circle',
                  hidden: false,
                  index: i,
                }));
              },
            },
          },
          tooltip: {
            backgroundColor: '#ffffff',
            titleColor: '#1f2937',
            bodyColor: '#374151',
            borderColor: '#d1d5db',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12,
          },
        },
      },
    });
  },

  // Comparative Narrative Panel
  initComparativeNarrative() {
    const ctx = document.getElementById('chart-comparative-narrative');
    if (!ctx) return;
    this.destroy('comparativeNarrative');
    const data = DASHBOARD_DATA.comparativeNarrative;
    this.instances.comparativeNarrative = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => d.category),
        datasets: [
          {
            label: 'PSA International',
            data: data.map(d => d.PSA),
            backgroundColor: '#3b82f6',
            borderRadius: 4,
          },
          {
            label: 'Avg. Competitors',
            data: data.map(d => d.Competitors),
            backgroundColor: '#dc2626',
            borderRadius: 4,
          },
        ],
      },
      options: {
        ...this.commonOptions,
        indexAxis: 'y',
        scales: {
          x: {
            ...this.commonOptions.scales.x,
            beginAtZero: true,
            max: 100,
          },
          y: {
            ...this.commonOptions.scales.y,
            grid: { display: false },
          },
        },
      },
    });
  },

  // Competitor Comparison Chart
  initCompetitorComparison() {
    const ctx = document.getElementById('chart-competitor-comparison');
    if (!ctx) return;
    this.destroy('competitorComparison');
    const data = DASHBOARD_DATA.competitorComparison;
    this.instances.competitorComparison = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => d.company),
        datasets: [
          {
            label: 'Geographic Reach',
            data: data.map(d => d.reach),
            backgroundColor: '#2563eb',
            borderRadius: 4,
          },
          {
            label: 'Investment Intensity',
            data: data.map(d => d.investment),
            backgroundColor: '#dc2626',
            borderRadius: 4,
          },
          {
            label: 'Digital Maturity',
            data: data.map(d => d.digital),
            backgroundColor: '#10b981',
            borderRadius: 4,
          },
        ],
      },
      options: {
        ...this.commonOptions,
        scales: {
          ...this.commonOptions.scales,
          y: {
            ...this.commonOptions.scales.y,
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });
  },

  // Follow-ups by Team Chart
  initFollowupsByTeam() {
    const ctx = document.getElementById('chart-followups-team');
    if (!ctx) return;
    this.destroy('followupsTeam');
    const data = DASHBOARD_DATA.followupsByTeam;
    this.instances.followupsTeam = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => d.team),
        datasets: [
          {
            label: 'Overdue',
            data: data.map(d => d.overdue),
            backgroundColor: '#dc2626',
            borderRadius: 4,
          },
          {
            label: 'This Week',
            data: data.map(d => d.thisWeek),
            backgroundColor: '#f59e0b',
            borderRadius: 4,
          },
          {
            label: 'Upcoming',
            data: data.map(d => d.upcoming),
            backgroundColor: '#2563eb',
            borderRadius: 4,
          },
        ],
      },
      options: {
        ...this.commonOptions,
        indexAxis: 'y',
        scales: {
          x: {
            ...this.commonOptions.scales.x,
            beginAtZero: true,
            stacked: true,
          },
          y: {
            ...this.commonOptions.scales.y,
            stacked: true,
            grid: { display: false },
          },
        },
      },
    });
  },

  // Initialize all charts for a given section
  initForSection(section) {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      switch (section) {
        case 'executive':
          this.initNarrativeTrend();
          break;
        case 'overview':
          this.initMediaTrend();
          this.initMediaSource();
          this.initMessagePickup();
          this.initSentimentDonut();
          break;
        case 'mediabias':
          this.initSentimentDistribution();
          this.initComparativeNarrative();
          break;
        case 'competitors':
          this.initCompetitorComparison();
          break;
        case 'media':
          this.initMediaTrend();
          this.initMediaSource();
          break;
        case 'messages':
          this.initMessagePickup();
          break;
        case 'reputation':
          this.initSentimentDonut();
          break;
        case 'stakeholders':
          // No charts in stakeholders section (uses HTML matrix)
          break;
      }
    }, 50);
  },
};
