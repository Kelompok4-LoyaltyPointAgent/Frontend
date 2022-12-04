import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTokenAdmin } from "../stores/auth";
import { useNavigate, Link } from "react-router-dom";
import { CONST } from "../utils/Constants";
import "../assets/styles/login.css";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: CONST.BASE_URL_API,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axiosInstance
      .post("/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data.message == "success") {
          dispatch(addTokenAdmin(result.data.data));
          Swal.fire({
            title: "Login Succes!",
            text: "Welcome!",
            icon: "success",
          }).then(function () {
            navigate("/");
          });
        }
      })
      .catch((error) => {
        if (error.response.data.message == "failed") {
          Swal.fire({
            title: "Failed Login",
            text: "Wrong Username or passowrd",
            icon: "warning",
          });
        }
      });
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
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
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
