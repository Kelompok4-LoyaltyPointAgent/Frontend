import { useNavigate } from "react-router-dom";
import { Dropdown, Navbar } from "react-bootstrap";
import "../assets/styles/NavbarTop.css";
import storage from "../utils/storage";
import { motion } from "framer-motion";
import {CgLogOff} from "react-icons/cg"
import {BsGear} from "react-icons/bs"

const NavbarTop = () => {
  const navigate = useNavigate();
  const logOut = (e) => {
    storage.clearToken();
    window.location.reload();
  };

  return (
    <div>
      <Navbar className="NavbarTop" style={{ backgroundColor: "#F5F6F7" }}>
        <div className="container-fluid d-flex align-items-end justify-content-end pe-3">
          <div className="d-flex flex-row gap-2">
            <Navbar.Toggle aria-controls="navbar-example" />
            <Dropdown 
            className="d-flex justify-content-center pe-1 pt-2">
              <Dropdown.Toggle
                style={{
                  backgroundColor: "#F5F6F7",
                  padding: 0,
                  margin: 0,
                  borderColor: "#F5F6F7",
                }}
              >
                <span
                  style={{
                    color: "#01478C",
                    fontSize: "20px",
                    marginTop: "10px",
                    backgroundColor: "#F5F6F7",
                  }}
                ><motion.div
                whileHover={{ scale: 1.03, originX: 0, }}
                whileTap={{ scale: 0.9 }}
                style={{height:10}}>
                    Hi, Admin!
                </motion.div>
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{padding: 0, marginTop: '5px', textAlign: "center", borderRadius:'5px'}}
              >
                <Dropdown.Item 
                className="dd-item-admin"
                style={{ padding: 0, margin: 0 }}>
                  <BsGear className="icon-setting"/>Ganti Password
                </Dropdown.Item>
                <Dropdown.Item
                className="dd-item-admin"
                onClick={logOut} style={{ padding: 0, margin: 0 }}>
                  <CgLogOff className="icon-logout"/>Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <img
              style={{ width: "50px", height: "50px" }}
              src={require("../assets/images/User/Ellipse 5.png")}
              alt="admin"
            />
          </div>
        </div>
      </Navbar>
    </div>
  );
};
export default NavbarTop;
