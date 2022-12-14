import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Card } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { TextField } from "@mui/material";
import { BiSearch, BiSortDown } from "react-icons/bi";
import AddUser from "./AddUser";
import ItemAdmin from "./ItemAdmin";
import Pagination from "../../components/Pagination";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";
import "../../assets/styles/Overflow.css";
import { getAdmin } from "../../api/getAdmin";

export default function KelolaAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAdmin();
      setPosts(res.data.data);
    };

    fetchPosts(posts);
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = "";
  if (!posts[0]) {
    currentPosts = [posts];
  } else {
    currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="d-flex">
        <NewSidebar />
        <div className="w-100">
          <NavbarTop />
          <div className="mt-4 ps-3 pe-3 w-100">
            <Card className="box-overflow">
              <div style={{ backgroundColor: "whitesmoke" }}>
                <p className="mb-4 mt-1 ps-3 pt-3">Kelola Admin</p>
              </div>
              <Box sx={{ p: 3 }}>
                <Typography>
                  <div className="w-100">
                    {isOpen && <AddUser handleClose={togglePopUp} />}
                    <div className="d-flex flex-row justify-content-between mb-3">
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
                      <div className="d-flex flex-row gap-2 pe-3">
                        <div className="">
                          <TextField
                            id="search"
                            variant="outlined"
                            label={
                              <p
                                style={{ fontSize: "13px", fontWeight: "540" }}
                              >
                                <BiSearch
                                  style={{ height: "20px", width: "20px" }}
                                />
                                Cari
                              </p>
                            }
                            size="small"
                          />
                        </div>
                        <div>
                          <BiSortDown
                            style={{ height: "40px", width: "30px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <table
                      class="table table-borderless "
                      style={{
                        border: "1px solid #013B75",
                      }}
                    >
                      <thead>
                        <tr
                          className="text-center"
                          style={{ backgroundColor: "#013B75", color: "white" }}
                        >
                          <th>Nama Lengkap</th>
                          <th>Email/Username</th>
                          <th>Poin</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody
                        className="text-center"
                        style={{ color: "#013B75" }}
                      >
                        {currentPosts.map((item, index) => (
                          <ItemAdmin data={item} index={index}></ItemAdmin>
                        ))}
                      </tbody>
                    </table>
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={posts.length}
                      paginate={paginate}
                      currentPage={currentPage}
                    />
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
