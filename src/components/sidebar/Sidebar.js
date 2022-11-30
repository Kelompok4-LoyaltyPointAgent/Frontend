import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../../stores/auth";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    dispatch(deleteToken());
    navigate("/login");
  };

  const account = useSelector((state) => state.token.account);
  const usernameUser = useSelector((state) => state.token.username);
  const admin = () => {
    if (account == "Admin") {
      return usernameUser;
    }
  };

  return (
    <div className="sidebar">
      <div className="container-fluid float-end verbar">
        <a className="me-3">
          <i class="bi bi-bell"></i>
        </a>
        <a className="me-3">Hi, {admin()}!</a>
        <img
          className="me-3"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="sideNavbar">
        <CDBSidebar className="CDBSidebar">
          <CDBSidebarHeader
            className="CDBSidebarHeader"
            prefix={<i className="fa fa-bars fa-large"></i>}
          >
            <img src={require("../../assets/images/Logo.png")} alt="logo" />
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/kelolapengguna"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="table">
                  Kelola Pengguna
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/kelolatransaksi"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="user">
                  Kelola Transaksi
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/kelolastok" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">
                  Kelola Stok
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          <CDBSidebarFooter className="CDBSidebarFooter">
            <CDBSidebarMenuItem
              className="sidebar-logout"
              style={{ padding: " 8px 2px 8px 2px" }}
            >
              <a className="nav-link" onClick={logOut}>
                <i class="bi bi-box-arrow-in-right pe-2"></i>
                Log Out
              </a>
            </CDBSidebarMenuItem>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </div>
  );
};

export default Sidebar;
