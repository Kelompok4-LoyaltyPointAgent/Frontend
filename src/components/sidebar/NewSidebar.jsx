import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineCast } from "react-icons/md";
import { AiOutlineFileText, AiOutlineQuestionCircle } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";
import "../sidebar/NewSidebar.css";

const NewSidebar = ({ list }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const sidebarMenu = [
    {
      route: "/",
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
    },
    {
      name: "Kelola Pengguna",
      icon: <CgUserList />,
      dropdown: [
        {
          route: "/kelolapengguna/admin",
          name: "Admin",
        },
        {
          route: "/kelolapengguna/pelanggan",
          name: "Pelanggan",
        },
      ],
    },
    {
      route: "/kelolatransaksi",
      name: "Kelola Transaksi",
      icon: <AiOutlineFileText />,
    },
    {
      name: "Kelola Stok",
      icon: <MdOutlineCast />,
      dropdown: [
        {
          route: "/kelolastok/pulsa",
          name: "Pulsa",
        },
        {
          route: "/kelolastok/paketdata",
          name: "Paket Data",
        },
      ],
    },
    {
      route: "/faq",
      name: "Kelola FAQ",
      icon: <AiOutlineQuestionCircle />,
    },
  ];

  const togglePopUp = (index) => {
    index == 1 ? setIsOpen1(!isOpen1) : setIsOpen3(!isOpen3);
  };

  const navNormal = (item, index) => {
    if (index == 1 || index == 3) {
      if (isOpen1 && index == 1) {
        return (
          <>
            <a
              key={index}
              className="list-menu d-flex flex-row active-drop"
              activeclassName="active"
              onClick={() => togglePopUp(index)}
            >
              <div className="icon">{item.icon}</div>
              <div className="list-item">{item.name}</div>
            </a>
            {item.dropdown.map((list) => (
              <NavLink
                to={list.route}
                className="list-menu list-drop d-flex flex-row"
                activeclassName="active"
              >
                <div className="list-item drop-item">{list.name}</div>
              </NavLink>
            ))}
          </>
        );
      } else if (isOpen3 && index == 3) {
        return (
          <>
            <a
              key={index}
              className="list-menu d-flex flex-row active-drop"
              activeclassName="active"
              onClick={() => togglePopUp(index)}
            >
              <div className="icon">{item.icon}</div>
              <div className="list-item">{item.name}</div>
            </a>
            {item.dropdown.map((list) => (
              <NavLink
                to={list.route}
                className="list-menu list-drop d-flex flex-row"
                activeclassName="active"
              >
                <div className="list-item drop-item">{list.name}</div>
              </NavLink>
            ))}
          </>
        );
      } else {
        return (
          <a
            key={index}
            className="list-menu d-flex flex-row"
            activeclassName="active"
            onClick={() => togglePopUp(index)}
          >
            <div className="icon">{item.icon}</div>
            <div className="list-item">{item.name}</div>
          </a>
        );
      }
    } else {
      return (
        <NavLink
          to={item.route}
          key={index}
          className="list-menu d-flex flex-row"
          activeclassName="active"
        >
          <div className="icon">{item.icon}</div>
          <div className="list-item">{item.name}</div>
        </NavLink>
      );
    }
  };
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="logo">
            <center>
              <img
                src={require("../../assets/images/Logo/Logo.png")}
                alt="logo"
              />
            </center>
          </div>
          <div className="">
            {sidebarMenu.map((item, index, active) =>
              navNormal(item, index, active)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSidebar;
