import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import { login } from "../api/login";
import storage from "../utils/storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  // //     try {
  // //       const res = await login({ email, password });
  // //       if (res.data.message == "success") {
  // //         storage.setToken(res.data.data.token);
  // //         Swal.fire({
  // //           title: "Login Succes!",
  // //           text: "Welcome!",
  // //           icon: "success",
  // //         }).then(function () {
  // //           window.location.reload();
  // //         });
  // //       }
  // //     } catch (error) {
  // //       if (error.response.data.message == "failed") {
  // //         Swal.fire({
  // //           title: "Failed Login",
  // //           text: "Wrong Username or passowrd",
  // //           icon: "warning",
  // //         });
  // //       }
  // //     }
  // //   };

  return (
    <div className="d-flex flex-column align-items-center login ">
      <div className="background"></div>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center header">
        <img alt="logo" src={require("../assets/images/LoginLogo.png")} />
        <p>Masukkan Email untuk reset Password</p>
      </div>
      <div className="forms">
        <div className="space">
          <form>
            <label>Email</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Ex. cukuptau@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
              />
            </div>
          </form>
        </div>
        <div className="tombol">
          <button
            onClick={handleSubmit}
            className="btn btn-warning"
            data-testid="enter"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
