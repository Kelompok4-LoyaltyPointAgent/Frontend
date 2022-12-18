import React from "react";
import { useState, useEffect } from "react";
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
import { Card } from "react-bootstrap";
import { getAnalytics } from "../../api/getAnalytics";
import { DoughnutDashboard } from "./DonatDashboard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAnalytics();
      setPosts(res.data.data);
    };
    fetchPosts();
    setTimeout(isReload, 5000);
  }, [loading]);

  const isReload = () => {
    setLoading(!loading);
  };

  const months = [
    "January",
    "February",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "July",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const value = posts.transactions_by_month?.map((item) => item.Value);
  var data = {
    labels: months,
    datasets: [
      {
        label: "Pembelian",
        data: value,
        borderWidth: 1,
        backgroundColor: ["#FBB505"],
        borderRadius: 5,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
    label: {
      display: false,
    },
  };

  return (
    <div className="d-flex flex-row mt-5 mb-2 justify-content-between">
      <Card className="p-3 pe-5">
        <span className="mb-3">Tahun Ini</span>
        <div style={{ width: 850 }}>
          <Bar data={data} height={300} options={options} />
        </div>
        <span className="text-center mt-4">
          <h4>Produk Terjual</h4>
        </span>
      </Card>
      <Card className="d-flex p-3">
        <DoughnutDashboard />
      </Card>
    </div>
  );
};

export default BarDashboard;
