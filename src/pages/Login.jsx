import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addTokenAdmin } from "../stores/auth";
import { useNavigate, Link } from "react-router-dom";
import "../assets/styles/login.css";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("")
  const navigate = useNavigate();

  // const [usernameR, setUserName] = useState("");
  // const [passwordR, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [tempAdmin, setTempAdmin] = useState({
  //   token: "4gfnc1",
  //   id: 1,
  //   username: "Admin",
  // });
  

  // useEffect(() => {
  //   async function cek() {
  //     dispatch(addTokenAdmin(token));
  //     Swal.fire({
  //       title: "Login Succes!",
  //       text: "Welcome!",
  //       icon: "success",
  //     }).then(function () {
  //       navigate("/");
  //     });
  //   }
  //   if (loading) {
  //     cek();
  //   }
  // }, [loading]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e)
  //   setLoading(true);
  // };

  async function login(){
    console.warn(email,password)
    let item = {email,password};
    let result = await fetch("https://loyaltypointagent-staging-7vx5k3vnra-uc.a.run.app/api/v1/login",
    {
      method: 'POST',
      headers:{
        "Content-Type" : "application/json",
        "Accept" : 'application/json'
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    navigate("/")
  }

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
            onClick={login}
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
