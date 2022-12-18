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

const KelolaTransaksi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getTransactions();
      setPosts(res.data.data);
      setData(res.data.data);
    };
    fetchPosts();
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
          <h4 className="mb-4 mt-1 pt-3">Riwayat Transaksi</h4>
          <div>
            <CardTopTransaksi />
          </div>

          <Box>
            <Typography>
              <div className="w-100">
                <div className="d-flex flex-row justify-content-end mb-3 mt-3">
                  <Search
                    posts={posts}
                    setSearchResults={setSearchResult}
                    pages="transaksi"
                    placeHolder="Cari Nama, Email"
                    change={change}
                  />
                </div>
                <table class="tablesT ">
                  <thead>
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#013B75", color: "#F5F6F7" }}
                    >
                      <th>Tanggal</th>
                      <th>Email</th>
                      <th>Tipe</th>
                      <th>Metode</th>
                      <th>Produk</th>
                      <th>Nilai(Rp)</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="text-center" style={{ color: "#013B75" }}>
                    {currentPosts?.map((item, index) => (
                      <ItemRiwayatTransaksi
                        data={item}
                        index={index}
                      ></ItemRiwayatTransaksi>
                    ))}
                  </tbody>
                </table>
                <div className="table-pagination">
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>

                {/* <div className="">
                    <Button href="/kelolaPengguna/detaileditpengguna/user">
                      Detail User Tes
                    </Button>
                    User
                  </div> */}
              </div>
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default KelolaTransaksi;
