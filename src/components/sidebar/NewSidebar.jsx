import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { MdOutlineDashboard, MdOutlineCast } from 'react-icons/md'
import { AiOutlineFileText } from 'react-icons/ai'
import { CgUserList } from 'react-icons/cg'
import '../sidebar/NewSidebar.css'
import { deleteToken } from "../../stores/auth";
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap';

const NewSidebar = ({ list }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    dispatch(deleteToken());
    navigate("/login");
  };

  const sidebarMenu = [
    {
      route: "/",
      name: "Dahsboard",
      icon: <MdOutlineDashboard />
    },
    {
      route: "/kelolapengguna",
      name: "Kelola Pengguna",
      icon: <CgUserList />,
      active: ""
    },
    {
      route: "/kelolatransaksi",
      name: "Kelola Transaksi",
      icon: <AiOutlineFileText />
    },
    {
      route: "/kelolastok",
      name: "Kelola Stok",
      icon: <MdOutlineCast />
    },
  ]
  return (
    <>
      <div className='container'>
        <div className="sidebar">
          <div className="logo">
            <img src={require('../../assets/images/Logo/Logo.png')} alt='logo' />
          </div>
          <div className="">
            {
              sidebarMenu.map((item, index, active) => (

                <NavLink to={item.route} key={index}
                  className='list-menu d-flex flex-row' 
                  activeclassName='active'
                >
                  <div className='icon'>{item.icon}</div>
                  <div className='list-item'>{item.name}</div>
                </NavLink>

              ))
            }
          </div>
        </div>
      </div>
    </>

  )
}

export default NewSidebar