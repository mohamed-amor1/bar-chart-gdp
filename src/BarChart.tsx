import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { options } from "./chartOptions";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

type GDPData = Array<[string, number]>;

export function BarChart() {
  const [data, setData] = useState<GDPData[]>([]);

  useEffect(() => {
    const apiUrl =
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const labels = data.map((d) => d[0]);
  const chartData = {
    labels,
    datasets: [
      {
        label: "GDP in Billions",
        data: labels.map((label) => {
          const matchingData = data.find((d) => d[0] === label);
          return matchingData ? matchingData[1] : 0;
        }),
        backgroundColor: "#9BD0F5",
        hoverOffset: 100,
      },
    ],
  };

  return <Bar options={options} data={chartData} />;
}
