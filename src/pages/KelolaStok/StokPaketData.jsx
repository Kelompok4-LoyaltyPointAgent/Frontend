import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Card } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { TextField } from "@mui/material";
import { BiSearch, BiSortDown } from "react-icons/bi";
import Pagination from "../../components/Pagination";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";
import ItemPaket from "./ItemPaket";
import AddStockPaket from "./AddStockPaket";
import CardTopPaket from "./CardTopPaket";
import "../../assets/styles/Overflow.css";
import { getPackages } from "../../api/getPackages";
import { motion } from "framer-motion";
import Search from "../../components/Search";

export default function StokPaketData() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPackages();
      setPosts(res.data.data);
      setData(res.data.data);
    };
    if (loading) fetchPosts();
    setLoading(false);
  }, [loading]);

  const setReload = () => {
    setLoading(true);
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

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="d-flex">
        <NewSidebar list={3} />
        <div className="w-100">
          <NavbarTop />
          <div className="pt-4 ps-3 pe-3 w-100 main-overflow ">
            <div>
              <CardTopPaket />
            </div>
            <Box>
              <Typography>
                <div className="w-100">
                  {isOpen && (
                    <AddStockPaket
                      setReload={setReload}
                      handleClose={togglePopUp}
                    />
                  )}
                  <p className="mt-1 pt-3" style={{ fontSize: "24px" }}>
                    Stok Paket
                  </p>
                  <div className="d-flex flex-row justify-content-between mb-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        color: "white",
                        backgroundColor: "#197722",
                        paddingRight: "10px",
                        paddingLeft: "10px",
                        borderRadius: "5px",
                        borderWidth: "1px",
                        borderColor: "#197722",
                      }}
                      onClick={togglePopUp}
                    >
                      <AiOutlinePlusSquare
                        style={{
                          width: "20px",
                          height: "25px",
                          paddingBottom: "3px",
                          marginRight: "10px",
                        }}
                      />
                      Tambah Paket Data
                    </motion.button>
                    <Search
                      posts={posts}
                      setSearchResults={setSearchResult}
                      pages="stock"
                      placeHolder="Cari Nama"
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
                        <th className="text-start">Provider</th>
                        <th>Nama Paket</th>
                        <th>Stok</th>
                        <th>Hadiah Poin</th>
                        <th>Harga (Rp)</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="text-center" style={{ color: "#013B75" }}>
                      {currentPosts.map((item, index) => (
                        <ItemPaket
                          setReload={setReload}
                          data={item}
                          index={index}
                        ></ItemPaket>
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
                </div>
              </Typography>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
