import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import NavTitle from "../components/NavTitle";
import "../assets/style/register.css";

export default function Register() {
  const [usernameR, setUserName] = useState();
  const [passwordR, setPassword] = useState();
  const [cofPasswordR, setCofPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function cek() {
      if (passwordR != cofPasswordR) {
        alert("Password yang dimasukkan tidak sesuai dengan yang sebelumnya");
      } else {
        Swal.fire({
          title: "Create New Accout Succes!",
          text: "Your Account has Already Created, Now You can Login!",
          type: "success",
        }).then(function () {
          console.log("test");
          navigate("/login");
        });
      }
      setLoading(false);
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
    <div className="register">
      <NavTitle></NavTitle>
      <div className="space">
        <h1 className="text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <p>New Username</p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="New Username..."
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
              onChange={(e) => setPassword(e.target.value)}
              aria-label="password"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <p>Confirm Password</p>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Confirm Password..."
              onChange={(e) => setCofPassword(e.target.value)}
              aria-label="confirmPassword"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="tombol">
            <center>
              <button
                className="btn btn-outline-primary"
                type="submit"
                data-testid="enter"
              >
                Make New Account
              </button>
            </center>
          </div>
        </form>
        <div className="text-center">
          <p>
            Already Have Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
