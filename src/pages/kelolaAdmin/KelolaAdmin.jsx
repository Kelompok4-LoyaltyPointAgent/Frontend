import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card } from "react-bootstrap";
import ItemAdmin from "./ItemAdmin";
import Pagination from "../../components/Pagination";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";
import "../../assets/styles/Overflow.css";
import "../../assets/styles/pengguna.css";
import { getAdmin } from "../../api/getAdmin";
import EditAdmin from "./EditAdmin";

export default function KelolaAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAdmin();
      setPosts(res.data.data);
      setData(res.data.data);
    };
    if (loading) fetchPosts();
    setLoading(false);
  }, [loading]);

  const change = () => {
    setCurrentPage(1);
  };

  const setReload = () => {
    setLoading(true);
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

  const togglePopUpEdit = () => {
    setIsOpen(!isOpen);
  };

  const itemData = (data) => {
    setEditData(data);
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
                <h4 className="mb-4 mt-1 ps-4 pt-3">Kelola Admin</h4>
              </div>
              <Box sx={{ p: 3 }}>
                <Typography>
                  <div className="w-100">
                    {isOpen && (
                      <EditAdmin
                        data={editData}
                        setReload={setReload}
                        handleClose={togglePopUpEdit}
                      />
                    )}
                    <div className="d-flex flex-row justify-content-between mb-3"></div>
                    <table class="tables">
                      <thead>
                        <tr
                          className="text-center"
                          style={{ backgroundColor: "#013B75", color: "white" }}
                        >
                          <th>Nama Lengkap</th>
                          <th>Email/Username</th>
                          <th>Password</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody
                        className="text-center"
                        style={{ color: "#013B75" }}
                      >
                        {currentPosts.map((item, index) => (
                          <ItemAdmin
                            setReload={setReload}
                            data={item}
                            index={index}
                            toggle={togglePopUpEdit}
                            sentData={itemData}
                          ></ItemAdmin>
                        ))}
                      </tbody>
                    </table>
                    <div className="table-pagination">
                      <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
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
