import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Pagination from "../../components/Pagination";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";
import AddStockPulsa from "./AddStockPulsa";
import ItemPulsa from "./ItemPulsa";
import CardTopPulsa from "./CardTopPulsa";
import "../../assets/styles/overflow.css";
import "../../assets/styles/stok.css";
import { getCredit } from "../../api/getCredits";
import { motion } from "framer-motion";
import Search from "../../components/Search";

export default function StokPulsa() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getCredit();
        setPosts(res.data.data);
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (loading) fetchPosts();
  }, [loading]);

  // if (loading) {
  //   return (
  //     <div class="text-center">
  //       <div class="spinner-border" role="status">
  //         <span class="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }

  const change = () => {
    setCurrentPage(1);
  };

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
          {loading ? (
            <div class="position-absolute top-50 start-50 translate-middle ms-5 ps-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="pt-4 ps-3 pe-3 w-100 main-overflow">
              <div>
                <CardTopPulsa />
              </div>
              <Box>
                <Typography>
                  <div className="w-100 judulE">
                    {isOpen && (
                      <AddStockPulsa
                        setReload={setReload}
                        handleClose={togglePopUp}
                      />
                    )}
                    <h4 className="pt-3 pb-2">Stok Pulsa</h4>
                    <div className="d-flex flex-row justify-content-between mb-3">
                      <motion.button
                        whileHover={{ scale: 1.03, originX: 0 }}
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
                        Tambah Pulsa
                      </motion.button>
                      <Search
                        posts={posts}
                        setSearchResults={setSearchResult}
                        pages="stock"
                        placeHolder="Cari Nama"
                        change={change}
                      />
                    </div>
                    <table class="tablesE">
                      <thead>
                        <tr
                          className="text-center"
                          style={{
                            backgroundColor: "#013B75",
                            color: "#F5F6F7",
                          }}
                        >
                          <th className="text-start">Provider</th>
                          <th className="nama">Nama Produk</th>
                          <th>Stok</th>
                          <th>Hadiah Poin</th>
                          <th>Harga (Rp)</th>
                          <th className="aksi">Aksi</th>
                        </tr>
                      </thead>
                      <tbody
                        className="text-center"
                        style={{ color: "#013B75" }}
                      >
                        {currentPosts?.map((item, index) => (
                          <ItemPulsa
                            setReload={setReload}
                            data={item}
                            index={index}
                          ></ItemPulsa>
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
                  </div>
                </Typography>
              </Box>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
