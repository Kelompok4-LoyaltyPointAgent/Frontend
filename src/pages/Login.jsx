import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addTokenAdmin } from "../stores/auth";
import { useNavigate, Link } from "react-router-dom";
import "../assets/style/login.css";
import NavTitle from "../components/NavTitle";

export default function Login() {
  const dispatch = useDispatch();
  const [usernameR, setUserName] = useState("");
  const [passwordR, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [tempAdmin, setTempAdmin] = useState({
    token: "4gfnc1",
    id: 1,
    username: "Budi",
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function cek() {
      dispatch(addTokenAdmin(tempAdmin));
      Swal.fire({
        title: "Login Succes!",
        text: "Welcome!",
        icon: "success",
      }).then(function () {
        navigate("/");
      });
    }
    if (loading) {
      cek();
    }
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="login">
      <NavTitle></NavTitle>
      <div className="space">
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Username..."
              name="username"
              onChange={(e) => setUserName(e.target.value)}
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <p>Password</p>

          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password..."
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              aria-label="password"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="tombol">
            <center>
              <button
                type="submit"
                className="btn btn-outline-primary"
                data-testid="enter"
              >
                Submit
              </button>
            </center>
          </div>
        </form>
        <div className="text-center">
          <p>
            Dont Have Account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
