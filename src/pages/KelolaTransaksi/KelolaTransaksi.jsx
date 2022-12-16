import React, { useState, useEffect } from "react";
import NavbarTop from "../../components/NavbarTop";
import NewSidebar from "../../components/sidebar/NewSidebar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { TextField } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import Pagination from "../../components/Pagination";
import CardTopTransaksi from "./CardTopTransaksi";
import ItemRiwayatTransaksi from "./ItemRiwayatTransaksi";
import AddTransaksi from "./AddTransaksi";
import "../../assets/styles/Overflow.css";
import { getTransactions } from "../../api/getTransaksi";
import Search from "../../components/Search";

const KelolaTransaksi = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex">
      <NewSidebar />
      <div className="w-100">
        <NavbarTop />
        <div className="pt-4 ps-3 pe-3 w-100 main-overflow">
          <p
            className="mb-4 mt-1 pt-3"
            style={{ fontSize: "22px", color: "#" }}
          >
            Riwayat Transaksi
          </p>
          <div>
            <CardTopTransaksi />
          </div>

          <Box>
            <Typography>
              <div className="w-100">
                {isOpen && <AddTransaksi handleClose={togglePopUp} />}
                <div className="d-flex flex-row justify-content-end mb-3 mt-3">
                  <Search
                    posts={posts}
                    setSearchResults={setSearchResult}
                    pages="transaksi"
                    placeHolder="Cari Nama, Email"
                  />
                </div>
                <table class="table table-borderless ">
                  <thead
                    style={{
                      border: "1px solid",
                    }}
                  >
                    <tr
                      className="text-center"
                      style={{ backgroundColor: "#013B75", color: "#F5F6F7" }}
                    >
                      <th className="text-center">Tanggal</th>
                      <th>Email</th>
                      <th>Nama</th>
                      <th>Tipe</th>
                      <th>Metode</th>
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
                <div className="d-flex justify-content-center">
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
