import { useNavigate } from "react-router-dom";
import { Dropdown, Navbar } from "react-bootstrap";
import "../assets/styles/NavbarTop.css";
import storage from "../utils/storage";

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
            <Dropdown className="d-flex justify-content-center pe-1 pt-2">
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
                >
                  Hi, Admin!
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{ padding: 0, margin: 0, textAlign: "center" }}
              >
                <a onClick={logOut} style={{ padding: 0, margin: 0 }}>
                  Log out
                </a>
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
