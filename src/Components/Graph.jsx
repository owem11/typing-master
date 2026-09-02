import React from 'react';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../Context/ThemeContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ graphData }) => {
  const { theme } = useTheme();

  const data = {
    labels: graphData.map((i) => i[0]),
    datasets: [
      {
        data: graphData.map((i) => i[1]),
        label: 'WPM',
        borderColor: theme.main,
        backgroundColor: theme.main,
      },
    ],
  };

  return (
    <div style={{ width: '100%' }}>
      <Line data={data} />
    </div>
  );
};

export default Graph;