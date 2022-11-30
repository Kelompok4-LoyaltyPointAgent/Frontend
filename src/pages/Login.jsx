import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addTokenAdmin } from "../stores/auth";
import { useNavigate, Link } from "react-router-dom";
import "../assets/styles/login.css";

export default function Login() {
  const dispatch = useDispatch();
  const [usernameR, setUserName] = useState("");
  const [passwordR, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [tempAdmin, setTempAdmin] = useState({
    token: "4gfnc1",
    id: 1,
    username: "Admin",
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
    <div className="d-flex flex-column align-items-center login ">
      <div className="background"></div>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center header">
        <img alt="logo" src={require("../assets/images/LoginLogo.png")} />
        <p>
          Haaaiiii, Semoga harimu menyenangkan <br />
          Masuk dulu yukk untuk melanjutkan...
        </p>
      </div>
      <div className="forms">
        <div className="space">
          <form>
            <label>Nama Pengguna</label>
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

            <label>Password</label>
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
          </form>
          <div className="text-end">
            <a href="">Lupa Kata Sandi</a>
          </div>
        </div>
        <div className="tombol">
          <button
            onClick={handleSubmit}
            className="btn btn-warning"
            data-testid="enter"
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
}
