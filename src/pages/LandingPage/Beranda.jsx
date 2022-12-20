import React from "react";
import { Col, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "../../assets/styles/landingNavbar.css";
import "../../assets/styles/landingPage.css";
import { Button } from "react-bootstrap";
import TentangKami from "./TentangKami";
import Layanan from "./Layanan";
import KontakKami from "./KontakKami";

const Beranda = () => {
  return (
    <div id="beranda" className="beranda">
      <Navbar
        sticky="top"
        className="navbar-top d-flex flex-row flex-wrap justify-content-start"
      >
        <Col sm={2} lg={2}>
          <Navbar.Brand href="#beranda" className="ms-4">
            <img
              alt="logo"
              src={require("../../assets/images/Logo/Logo Navbar Landing Page.png")}
              width="230"
              height="70"
            />
          </Navbar.Brand>
        </Col>
        <Col sm={7} lg={7}>
          <div className="d-flex flex-row flex-wrap justify-content-evenly">
            <Nav.Link href="#beranda" className="navbar-item">
              Beranda
            </Nav.Link>
            <Nav.Link href="#tentang-kami" className="navbar-item">
              Tentang Kami
            </Nav.Link>
            <Nav.Link href="#layanan" className="navbar-item">
              Layanan
            </Nav.Link>
            <Nav.Link href="#kontak-kami" className="navbar-item">
              Kontak
            </Nav.Link>
          </div>
        </Col>
        <Col className="ms-4" sm={2} lg={2}>
          <Nav.Link href="/dashboard" className="navbar-item-coba">
            Login
          </Nav.Link>
        </Col>
      </Navbar>
      <div className="background">
        <Col sm={4} lg={5}>
          <div
            className="d-flex flex-column align-items-start"
            style={{
              marginTop: "140px",
              marginLeft: "170px",
              marginBottom: "50px",
            }}
          >
            <spam
              style={{ fontSize: "70px", fontWeight: "700", color: "#01478C" }}
            >
              Hola Pulsa
            </spam>
            <span
              style={{
                fontSize: "24px",
                color: "#FBB505",
                fontWeight: "700",
                marginBottom: "50px",
              }}
            >
              Solusi tepat untuk Anda membeli pulsa dan paket Internet
            </span>
            <span style={{ marginBottom: "50px" }}>
              sebuah aplikasi mobile yang hadir untuk memenuhi kebutuhan Anda
              untuk membuka dunia penuh peluang dan menikmati tanpa batas
              melalui pemanfaatan layanan seluruh operator yang tersebar di
              Indonesia setiap harinya!
            </span>
            <Button style={{ backgroundColor: "#01478C" }} href="#tentang-kami">
              Tentang Kami
            </Button>
          </div>
        </Col>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="tentang-kami">
        <TentangKami />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="layanan">
        <Layanan />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="kontak-kami">
        <KontakKami />
      </div>
    </div>
  );
};

export default Beranda;
