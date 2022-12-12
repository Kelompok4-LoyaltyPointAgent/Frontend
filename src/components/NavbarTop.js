import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteToken } from "../stores/auth";
import { Link } from "react-router-dom";
import { Dropdown, Navbar } from "react-bootstrap";
import '../assets/styles/NavbarTop.css'

const NavbarTop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    dispatch(deleteToken());
    navigate("/login");
  };

  const account = useSelector((state) => state.token.account);
  const usernameUser = useSelector((state) => state.token.username);
  const tokenGuest = useSelector((state) => state.token.tokens);
  const admin = () => {
    if (account == "Admin") {
      return usernameUser;
    }
  };

  return (
    <div >
      <Navbar className="NavbarTop d-flex"
        style={{ backgroundColor: "#F5F6F7" }}
      >
        <div className="container-fluid d-flex align-items-end justify-content-end pe-3">
          <div
            className="d-flex flex-row gap-2">
            <Navbar.Toggle
              aria-controls="navbar-example" />
        <Dropdown className="d-flex justify-content-center pe-1 pt-2">
          <Dropdown.Toggle 
          style={{backgroundColor:'#F5F6F7', padding: 0, margin: 0, borderColor:'#F5F6F7' }}>
            <span
              style={{ color: "#01478C", fontSize: '20px', 
              marginTop: '10px', backgroundColor:'#F5F6F7' }}>
              Hi, {admin()}!
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ padding: 0, margin: 0, textAlign:'center'}}>
            <a onClick={logOut}
            style={{padding: 0, margin: 0}}>
              Log out
            </a>
          </Dropdown.Menu>
        </Dropdown>
            <img style={{ width: '50px', height: '50px' }}
              src={require('../assets/images/User/Ellipse 5.png')}
              alt='admin' />

          </div>
        </div>
        
      </Navbar>
    </div>
  );
};
export default NavbarTop;
