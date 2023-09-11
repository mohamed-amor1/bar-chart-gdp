export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: {
          size: 12,
          family: "Arial",
        },
      },
    },
    title: {
      display: true,
      text: "USA GDP (Billion USD)",
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          let label = "";
          if (context.parsed.y) {
            label = "$" + context.parsed.y + " Billion";
          }
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Year",
      },
    },
    y: {
      title: {
        display: true,
        text: "GDP (Billion USD)",
      },
    },
  },
  zoom: {
    zoom: {
      wheel: {
        enabled: true,
      },
      pinch: {
        enabled: true,
      },
      mode: "xy",
    },
  },
};
