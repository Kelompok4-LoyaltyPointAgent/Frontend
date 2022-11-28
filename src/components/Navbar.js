import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavTitle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const account = useSelector((state) => state.token.account);
  const usernameUser = useSelector((state) => state.token.username);
  const tokenGuest = useSelector((state) => state.token.tokens);
  const admin = () => {
    if (account == "Admin") {
      return usernameUser;
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark"
        style={{ backgroundColor: "#1b1c1d", height: "60px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1
              style={{
                color: "#2185D0",
                fontFamily: "Lato",
                fontSize: "38px",
                fontWeight: "600",
                paddingLeft: "10px",
              }}
            >
              HolaPulsa
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end px-5"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="nav-link ms-5"
                style={{
                  color: "#000",
                  backgroundColor: "#fff",
                  borderRadius: "50% 50%",
                  fontSize: "15px",
                }}
              >
                <i class="bi bi-bell"></i>
              </a>
              <a className="nav-link ms-5" style={{ color: "#fff" }}>
                Hi, {admin()}!
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavTitle;
