import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Pagination from "../../components/Pagination";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";
import ItemFAQ from "./ItemFAQ";
import AddData from "./AddData";
import "../../assets/styles/overflow.css";
import "../../assets/styles/stok.css";
import { getFaqs } from "../../api/getFaqs";
import { motion } from "framer-motion";
import EditFAQ from "./EditFAQ";
import Search from "../../components/Search";
import { Skeleton } from "@mui/material";

export default function KelolaFAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getFaqs();
      setPosts(res.data.data);
      setData(res.data.data);
      setLoading(false);
    };

    if (loading) fetchPosts();
  }, [loading]);

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

  const togglePopUpEdit = () => {
    setIsOpen1(!isOpen1);
  };
  const itemData = (data) => {
    setEditData(data);
  };

  return (
    <>
      <div className="d-flex">
        <NewSidebar />
        <div className="w-100">
          <NavbarTop />

          <div className="mt-4 ps-3 pe-3 w-100">
            <Card className="box-overflow">
              <div className="judul">
                <h4 className="mb-4 mt-1 ps-3 pt-3">
                  {loading ? (
                    <Skeleton variant="rounded" width={170} height={35} />
                  ) : (
                    <span>Kelola Frequently Asked Question</span>
                  )}
                </h4>
              </div>
              <Box sx={{ p: 3 }}>
                <Typography>
                  <div className="w-100">
                    {isOpen && (
                      <AddData
                        setReload={setReload}
                        handleClose={togglePopUp}
                      />
                    )}
                    {isOpen1 && (
                      <EditFAQ
                        data={editData}
                        setReload={setReload}
                        handleClose={togglePopUpEdit}
                      />
                    )}
                    <div className="d-flex flex-row justify-content-between mb-3">
                      {loading ? (
                        <Skeleton variant="rounded" width={200} height={35} />
                      ) : (
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
                          Tambah Item
                        </motion.button>
                      )}
                      {loading ? (
                        <Skeleton variant="rounded" width={200} height={35} />
                      ) : (
                        <Search
                          posts={posts}
                          setSearchResults={setSearchResult}
                          pages="faq"
                          placeHolder="Cari Pertanyaan, jawaban"
                          change={change}
                        />
                      )}
                    </div>
                    <table class="tablesE mb-4">
                      {loading ? (
                        <Skeleton variant="rectangular" height={370} />
                      ) : (
                        <>
                          <thead>
                            <tr
                              className="text-center"
                              style={{
                                backgroundColor: "#013B75",
                                color: "white",
                              }}
                            >
                              <th className="pertanyaan">Pertanyaan</th>
                              <th className="jawaban">Jawaban</th>
                              <th>Kategori</th>
                              <th className="aksi">Aksi</th>
                            </tr>
                          </thead>
                          <tbody
                            className="text-center"
                            style={{ color: "#013B75" }}
                          >
                            {currentPosts[0].length != 0 ? (
                              currentPosts.map((item, index) => (
                                <ItemFAQ
                                  setReload={setReload}
                                  data={item}
                                  index={index}
                                  toggle={togglePopUpEdit}
                                  sentData={itemData}
                                ></ItemFAQ>
                              ))
                            ) : (
                              <span className="position-absolute top-50 start-50 translate-middle fs-3">
                                Data Tidak Ditemukan
                              </span>
                            )}
                          </tbody>
                        </>
                      )}
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
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
