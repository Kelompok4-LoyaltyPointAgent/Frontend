import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/dashboard.css";
import "../../assets/styles/overflow.css";
import "../../assets/styles/transaksi.css";
import CardDashboard from "./CardDashboard";
import BarDashboard from "./BarDashboard";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";
import ItemTransaksi from "./ItemTransaksi";
import { getAnalytics } from "../../api/getAnalytics";
import { Skeleton } from "@mui/material";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadData, setLoadData] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAnalytics();
      setPosts(res.data.data);
      setLoading(false);
    };
    fetchPosts();
    setTimeout(isReload, 5000);
  }, [loadData]);
  const isReload = () => {
    setLoadData(!loadData);
  };

  return (
    <div className="d-flex">
      <NewSidebar />
      <div className="w-100">
        <NavbarTop />

        <div className="pt-4 pb-5 ps-3 pe-3 w-100 dashboard-overflow">
          <div>
            <CardDashboard loading={loading} />
          </div>
          <div>
            <BarDashboard loading={loading} />
          </div>
          <div className="mt-3">
            <div className="d-flex flex-row justify-content-between judulP">
              <p>
                <h4>
                  {loading ? (
                    <Skeleton variant="rounded" width={200} height={35} />
                  ) : (
                    <span className="boltP">Transaksi Terakhir</span>
                  )}
                </h4>
              </p>
              <NavLink
                style={{ textDecoration: "none", color: "#8A9096" }}
                to={"/kelolatransaksi"}
              >
                <p>
                  {loading ? (
                    <Skeleton variant="rounded" width={200} height={35} />
                  ) : (
                    <span>Selengkapnya</span>
                  )}
                </p>
              </NavLink>
            </div>

            {loading ? (
              <Skeleton variant="rounded" height={300} />
            ) : (
              <table class="tablesT">
                <thead className="dash">
                  <tr
                    className="text-center"
                    style={{
                      backgroundColor: "#ECECEE",
                      color: "#013B75",
                      fontWeight: "1000",
                    }}
                  >
                    <th className="tanggal">Tanggal</th>
                    <th className="email">Gmail</th>
                    <th>Tipe</th>
                    <th>Metode</th>
                    <th>Produk</th>
                    <th>Nilai (Rp)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="text-center" style={{ color: "#013B75" }}>
                  {posts.recent_transactions?.map((item, index) => (
                    <ItemTransaksi data={item} index={index}></ItemTransaksi>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
