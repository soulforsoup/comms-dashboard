// C-DASH Chart Initializations
// Bar chart for competitor coverage

const Charts = {
  instances: {},

  destroyAll() {
    Object.values(this.instances).forEach(chart => {
      if (chart && typeof chart.destroy === 'function') chart.destroy();
    });
    this.instances = {};
  },

  destroy(id) {
    if (this.instances[id]) {
      this.instances[id].destroy();
      delete this.instances[id];
    }
  },

  // Competitor Coverage Bar Chart
  initCompetitorCoverage() {
    const ctx = document.getElementById('chart-competitor-coverage');
    if (!ctx) return;
    this.destroy('competitorCoverage');

    const competitors = Data.partA.competitors;
    const coverageMap = { 'High': 3, 'Medium': 2, 'Low': 1, 'Low–Medium': 1.5 };
    const colors = competitors.map(c =>
      c.isHighlighted ? '#2563eb' : '#94a3b8'
    );

    this.instances.competitorCoverage = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: competitors.map(c => c.company),
        datasets: [{
          label: 'Coverage Volume',
          data: competitors.map(c => coverageMap[c.coverage] || 2),
          backgroundColor: colors,
          borderRadius: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#ffffff',
            titleColor: '#1f2937',
            bodyColor: '#374151',
            borderColor: '#d1d5db',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12,
            callbacks: {
              label: (item) => {
                const comp = competitors[item.dataIndex];
                return [
                  `Coverage: ${comp.coverage}`,
                  `Sentiment: ${comp.sentiment}`,
                ];
              },
            },
          },
        },
        scales: {
          x: { display: false },
          y: {
            ticks: { color: '#374151', font: { size: 12 } },
            grid: { display: false },
          },
        },
      },
    });
  },

  // Initialize charts for a section
  initForSection(section) {
    setTimeout(() => {
      switch (section) {
        case 'competitors':
          this.initCompetitorCoverage();
          break;
      }
    }, 50);
  },
};
