'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

type Props = {
  total: number;
  incomeHistory?: number[]; // Optional income history for the chart
};

const TeacherEarningsDashboard = ({ total, incomeHistory }: Props) => {
  // Dummy data for the chart if not passed
  const earningsData = incomeHistory || [200, 350, 420, 580, 700, 850, total];
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Monthly Earnings ($)',
        data: earningsData,
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderColor: '#4f46e5',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Earnings Trend',
        font: { size: 18 },
      },
    },
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center text-indigo-700">
        💰 Teacher Earnings Dashboard
      </h1>

      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 text-center">
        <h2 className="text-2xl font-medium text-gray-600 mb-1">
          Total Earnings
        </h2>
        <p className="text-5xl font-bold text-green-600">${total}</p>
        <p className="text-sm text-gray-400 mt-1">Updated this month</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default TeacherEarningsDashboard;
