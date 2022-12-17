import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/Dashboard.css";
import "../../assets/styles/Overflow.css";
import CardDashboard from "./CardDashboard";
import BarDashboard from "./BarDashboard";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";
import ItemTransaksi from "./ItemTransaksi";
import { getStatistikDatas } from "../../api/getStastistikDatas";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await getStatistikDatas();
  //     setPosts(res.data.data);
  //     setData(res.data.data);
  //   };
  //   if (loading) fetchPosts();
  //   setLoading(false);
  // }, [loading]);
  console.log(data)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="d-flex">
      <NewSidebar />
      <div className="w-100">
        <NavbarTop />
        <div className="pt-4 ps-3 pe-3 w-100 dashboard-overflow">
          <div>
            <CardDashboard />
          </div>
          <div>
            <BarDashboard />
          </div>
          <div className="mt-3">
            <div className="d-flex flex-row justify-content-between">
              <p>
                <h5>Transaksi Terakhir</h5>
              </p>
              <NavLink
                style={{ textDecoration: "none", color: "#8A9096" }}
                to={"/kelolatransaksi"}
              >
                <p>Selengkapnya</p>
              </NavLink>
            </div>
            <div className="d-flex flex-row flex-wrap" style={{ gap: "100px" }}>
              <table class="table table-borderless ">
                <thead
                  style={{
                    border: "1px solid #013B75",
                  }}
                >
                  <tr
                    className="text-center"
                    style={{ backgroundColor: "#ECECEE", color: "#013B75" }}
                  >
                    <th>Tanggal</th>
                    <th>Nama</th>
                    <th>Tipe</th>
                    <th>Metode</th>
                    <th>Produk</th>
                    <th>Nilai (Rp)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="text-center" style={{ color: "#013B75" }}>
                  {currentPosts.map((item, index) => (
                    <ItemTransaksi data={item} index={index}></ItemTransaksi>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
