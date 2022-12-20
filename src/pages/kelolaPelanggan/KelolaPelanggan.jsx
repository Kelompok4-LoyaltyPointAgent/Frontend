import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Card } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import AddUser from "./AddUser";
import Pagination from "../../components/Pagination";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";
import ItemPelanggan from "./ItemPelanggan";
import "../../assets/styles/overflow.css";
import "../../assets/styles/pengguna.css";
import { getUsers } from "../../api/getPengguna";
import Search from "../../components/Search";
import { Skeleton } from "@mui/material";

export default function KelolaPelanggan() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getUsers();
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

  return (
    <>
      <div className="d-flex main-con">
        <NewSidebar list={1} />
        <div className="w-100">
          <NavbarTop />
          <div className="mt-4 ps-3 pe-3 w-100">
            <Card className="box-overflow kotak">
              <div className="judul">
                <h4 className="mb-4 mt-1 ps-4 pt-3">
                  {loading ? (
                    <Skeleton variant="rounded" width={210} height={35} />
                  ) : (
                    <span>Kelola Pengguna</span>
                  )}
                </h4>
              </div>
              <Box sx={{ pt: 3, pl: 3, pr: 1 }}>
                <Typography>
                  <div className="w-100">
                    {isOpen && (
                      <AddUser
                        handleClose={togglePopUp}
                        setReload={setReload}
                      />
                    )}
                    <div className="d-flex flex-row justify-content-between mb-3">
                      {loading ? (
                        <Skeleton variant="rounded" width={200} height={35} />
                      ) : (
                        <Button variant="success" onClick={togglePopUp}>
                          <AiOutlinePlusSquare
                            style={{
                              width: "20px",
                              height: "25px",
                              paddingBottom: "3px",
                              marginRight: "10px",
                            }}
                          />
                          Tambah Pengguna
                        </Button>
                      )}

                      <div>
                        {loading ? (
                          <Skeleton variant="rounded" width={200} height={35} />
                        ) : (
                          <Search
                            posts={posts}
                            setSearchResults={setSearchResult}
                            pages="user"
                            placeHolder="Cari Nama, Email"
                            change={change}
                          />
                        )}
                      </div>
                    </div>
                    <table class="tables">
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
                              <th>Nama Lengkap</th>
                              <th>Email</th>
                              <th>Poin</th>
                              <th className="aksi">Aksi</th>
                            </tr>
                          </thead>
                          <tbody
                            className="text-center"
                            style={{ color: "#013B75" }}
                          >
                            {currentPosts[0].length != 0 ? (
                              currentPosts.map((item, index) => (
                                <ItemPelanggan
                                  data={item}
                                  index={index}
                                  setReload={setReload}
                                ></ItemPelanggan>
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
                    <div className="table-pagination-P">
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
