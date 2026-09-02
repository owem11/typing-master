import React from 'react';
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
import { Line } from 'react-chartjs-2';
import { useTheme } from '../Context/ThemeContext';

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

    return (
        <Line 
            data={{
                // Extract time (seconds) for X-axis labels
                labels: graphData.map((item) => item[0]), 
                datasets: [
                    {
                        label: 'WPM',
                        // Extract calculated WPM values for Y-axis points
                        data: graphData.map((item) => item[1]), 
                        fill: false,
                        borderColor: theme ? theme.main : '#e2b714',
                        tension: 0.2
                    }
                ]
            }}
        /> 
    );
};

export default Graph;