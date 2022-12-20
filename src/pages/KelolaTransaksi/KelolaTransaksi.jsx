import React, { useState, useEffect } from "react";
import NavbarTop from "../../components/NavbarTop";
import NewSidebar from "../../components/sidebar/NewSidebar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Pagination from "../../components/Pagination";
import CardTopTransaksi from "./CardTopTransaksi";
import ItemRiwayatTransaksi from "./ItemRiwayatTransaksi";
import "../../assets/styles/overflow.css";
import "../../assets/styles/transaksi.css";
import { getTransactions } from "../../api/getTransaksi";
import Search from "../../components/Search";
import { Skeleton } from "@mui/material";

const KelolaTransaksi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getTransactions();
      setPosts(res.data.data);
      setData(res.data.data);
      setLoading(false);
    };
    if (loading) fetchPosts();
  }, []);
  const change = () => {
    setCurrentPage(1);
  };

  const setSearchResult = (datas) => {
    setData(datas);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = "";
  if (!data[0]) {
    currentPosts = [data];
  } else {
    currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="d-flex">
      <NewSidebar />
      <div className="w-100">
        <NavbarTop />
        <div className="ps-3 pe-3 w-100 main-overflow judulT">
          <h4 className="mb-4 mt-1 pt-3">
            {loading ? (
              <Skeleton variant="rounded" width={250} height={40} />
            ) : (
              <span>Riwayat Transaksi</span>
            )}
          </h4>
          <div>
            <CardTopTransaksi loading={loading} />
          </div>

          <Box>
            <Typography>
              <div className="w-100">
                <div className="d-flex flex-row justify-content-end mb-3 mt-3">
                  {loading ? (
                    <Skeleton variant="rounded" width={200} height={35} />
                  ) : (
                    <Search
                      posts={posts}
                      setSearchResults={setSearchResult}
                      pages="transaksi"
                      placeHolder="Cari Email, Tipe, Status"
                      change={change}
                    />
                  )}
                </div>
                {loading ? (
                  <Skeleton variant="rounded" height={350} />
                ) : (
                  <table class="tablesT ">
                    <thead>
                      <tr
                        className="text-center"
                        style={{ backgroundColor: "#013B75", color: "#F5F6F7" }}
                      >
                        <th className="tanggal">Tanggal</th>
                        <th className="email">Email</th>
                        <th>Tipe</th>
                        <th>Metode</th>
                        <th>Produk</th>
                        <th>Nilai(Rp)</th>
                        <th>Status</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="text-center" style={{ color: "#013B75" }}>
                      {currentPosts[0].length != 0 ? (
                        currentPosts?.map((item, index) => (
                          <ItemRiwayatTransaksi
                            data={item}
                            index={index}
                          ></ItemRiwayatTransaksi>
                        ))
                      ) : (
                        <span className="position-absolute top-50 start-50 translate-middle fs-3">
                          Data Tidak Ditemukan
                        </span>
                      )}
                    </tbody>
                  </table>
                )}

                <div className="table-pagination-T">
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default KelolaTransaksi;
