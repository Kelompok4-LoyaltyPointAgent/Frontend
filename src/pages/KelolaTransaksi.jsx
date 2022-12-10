import React, { useState } from "react";
import NavbarTop from "../components/NavbarTop";
import NewSidebar from "../components/sidebar/NewSidebar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Card } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { TextField } from "@mui/material";
import { BiSearch, BiSortDown } from "react-icons/bi";
import Pagination from "../components/Pagination";
import ItemUser from "./KelolaPengguna/ItemUser";

const KelolaTransaksi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const [posts, setPosts] = useState([
    {
      nama: "diaken",
      email: "d@wow",
      role: "admin",
      poin: "1000",
    },
    {
      nama: "dery",
      email: "der@wow",
      role: "admin",
      poin: "2000",
    },
    {
      nama: "dik",
      email: "dik@wow",
      role: "admin",
      poin: "3000",
    },
  ]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setPosts(res.data);
  //   };

  //   fetchPosts();
  // }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="d-flex">
      <NewSidebar />
      <div className="w-100">
        <NavbarTop />
        <div className="mt-4 ps-3 pe-3 w-100">
        <Card className="">
            <div style={{ backgroundColor: "whitesmoke" }}>
              <p className="mb-4 mt-1 ps-3 pt-3">Kelola Transaksi</p>
            </div>
            <Box sx={{ p: 3 }}>
              <Typography>
                <div className="w-100">
  
                  <div className="d-flex flex-row justify-content-end mb-3">
                    <div className="d-flex flex-row gap-2 pe-3">
                      <div className="">
                        <TextField
                          id="search"
                          variant="outlined"
                          label={
                            <p style={{ fontSize: "13px", fontWeight: "540" }}>
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
                        <BiSortDown style={{ height: "40px", width: "30px" }} />
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
                        <th>Role</th>
                        <th>Poin</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="text-center" style={{ color: "#013B75" }}>
                      {currentPosts.map((item, index) => (
                        <ItemUser data={item} index={index}></ItemUser>
                      ))}
                    </tbody>
                  </table>
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                  {/* <div className="">
                    <Button href="/kelolaPengguna/detaileditpengguna/user">
                      Detail User Tes
                    </Button>
                    User
                  </div> */}
                </div>
              </Typography>
            </Box>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default KelolaTransaksi;
