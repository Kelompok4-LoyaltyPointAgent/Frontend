import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/styles/login.css";
import { resetPassword } from "../api/resetPassword";

export default function Reset() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    new_password: "",
    confirm_password: "",
    access_key: token,
  });
  console.log(data);
  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await resetPassword({
        new_password: data.new_password,
        confirm_password: data.confirm_password,
        access_key: data.access_key,
      });
      if (res.data.message == "success") {
        Swal.fire({
          title: "Selamat!",
          text: "Password kamu berhasil diganti",
          icon: "success",
        }).then(function () {
          navigate("/login");
        });
      }
    } catch (error) {
      if (error.response.data.message == "failed") {
        Swal.fire({
          title: "Failed Login",
          text: "Wrong Username or passowrd",
          icon: "warning",
        });
      }
    }
  };

  return (
    <div className="d-flex flex-column align-items-center login ">
      <div className="background"></div>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center header">
        <img alt="logo" src={require("../assets/images/LoginLogo.png")} />
        <p>Masukkan kata Sandi baru untuk masuk ke halaman Admin</p>
      </div>
      <div className="forms">
        <div className="space">
          <form>
            <label>Password Baru</label>
            <div class="input-group mb-3">
              <input
                id="new_password"
                name="new_password"
                value={data.new_password}
                type="text"
                class="form-control"
                placeholder="Masukan kata sandi baru"
                onChange={(e) => handleInput(e)}
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <label>Konfirmasi Password</label>
            <div class="input-group mb-3">
              <input
                id="confirm_password"
                name="confirm_password"
                value={data.confirm_password}
                type="text"
                class="form-control"
                placeholder="Masukan kata sandi baru"
                onChange={(e) => handleInput(e)}
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
              />
            </div>
            <label>Kode Verifikasi</label>
            <div class="input-group mb-3">
              <input
                id="access_key"
                name="access_key"
                value={data.access_key}
                type="text"
                class="form-control"
                placeholder={data.access_key}
                aria-label="Username"
                aria-describedby="basic-addon1"
                disabled
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
