import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Card } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { TextField } from "@mui/material";
import { BiSearch, BiSortDown } from "react-icons/bi";
import AddUser from "./AddUser";
import Pagination from "../../components/Pagination";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";
import ItemPelanggan from "./ItemPelanggan";
import "../../assets/styles/Overflow.css";
import { getUsers } from "../../api/getPengguna";
import Search from "../../components/Search";

export default function KelolaPelanggan() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getUsers();
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
        <NewSidebar list={1} />
        <div className="w-100">
          <NavbarTop />
          <div className="mt-4 ps-3 pe-3 w-100">
            <Card className="box-overflow">
              <div style={{ backgroundColor: "whitesmoke" }}>
                <p className="mb-4 mt-1 ps-3 pt-3">Kelola Pengguna</p>
              </div>
              <Box sx={{ p: 3 }}>
                <Typography>
                  <div className="w-100">
                    {isOpen && (
                      <AddUser
                        handleClose={togglePopUp}
                        setReload={setReload}
                      />
                    )}
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
                      <Search
                        posts={posts}
                        setSearchResults={setSearchResult}
                        pages="user"
                        placeHolder="Cari Nama,Email"
                      />
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
                          <ItemPelanggan
                            data={item}
                            index={index}
                            setReload={setReload}
                          ></ItemPelanggan>
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
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
