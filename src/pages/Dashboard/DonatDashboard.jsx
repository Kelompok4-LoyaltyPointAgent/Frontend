import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getAnalytics } from "../../api/getAnalytics";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutDashboard() {
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

  const takeData = posts.transactions_by_type?.map((item) => item);

  const data = {
    labels: takeData?.map((item) => item.Type),
    datasets: [
      {
        label: "Persentase",
        data: takeData?.map((item) => item.Value),
        backgroundColor: [
          "rgb(42, 176, 112)",
          "rgb(209, 95, 2)",
          "rgb(0, 107, 160)",
        ],
        borderColor: [
          "rgb(42, 176, 112)",
          "rgb(209, 95, 2)",
          "rgb(0, 107, 160)",
        ],
      },
    ],
  };

  return (
    <div style={{ width: 250, height: 400 }}>
      <span className="mb-3">Aktivitas</span>
      <Doughnut data={data} />
    </div>
  );
}
