import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../assets/styles/DetailEditProduk.css";
import EditProdukPaket from "./EditProdukPaket";

const DetailEditProdukPaket = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="d-flex">
        <Sidebar list={4} />
        <div className="mt-5 pt-5 ps-3 pe-3 w-100">
          {isOpen && <EditProdukPaket handleClose={togglePopUp} />}
          <Card border="dark">
            <Card.Img
              style={{ padding: "10px", height: "250px" }}
              src={require("../../assets/images/ProdukPulsa/Vector 2.png")}
            />
            <Card.ImgOverlay>
              <Row>
                <Col sm={2} lg={2} className="d-flex justify-content-end">
                  <i>
                    <img
                      style={{ height: "120px" }}
                      alt="iconproduk"
                      src={require("../../assets/images/ProdukPaket/Frame 33773.png")}
                    />
                  </i>
                </Col>
                <Col
                  sm={8}
                  lg={8}
                  className="d-flex flex-column justify-content-center align-items-center"
                >
                  <p className="mt-4" style={{ color: "white" }}>
                    <h4>Detail Paket Data</h4>
                  </p>
                  <p className="text-harga">
                    <h2>DUAAARRR!!! SAKTI 50GB</h2>
                  </p>
                  <p className="text-provider">Provider</p>
                </Col>
                <Col sm={2} lg={2} className="d-flex justify-content-end pe-4">
                  <div>
                    <img
                      style={{
                        marginTop: "13px",
                        height: "110px",
                        width: "125px",
                        zIndex: "2",
                        top: "0px",
                        position: "relative",
                      }}
                      alt="iconpoin"
                      src={require("../../assets/images/ProdukPulsa/Rectangle 15.png")}
                    />
                    <div
                      className="text-center"
                      style={{
                        padding: "3px",
                        zIndex: "9",
                        position: "absolute",
                        top: "30px",
                        color: "#013B75",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          marginTop: "2px",
                          marginLeft: "30px",
                        }}
                      >
                        <h5>Reward</h5>
                      </p>
                      <p
                        style={{
                          margin: "0px",
                          marginTop: "2px",
                          marginLeft: "30px",
                        }}
                      >
                        <h4>777</h4>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.ImgOverlay>
            <Card.Body>
              <Card.Text>
                <div className="mt-2 d-flex justify-content-between list-detail">
                  <p className="detail-produk-text">Masa Aktif</p>
                  <p className="detail-produk-text">60 Hari</p>
                </div>
                <div className="d-flex justify-content-between list-detail">
                  <p className="detail-produk-text">Stok</p>
                  <p className="detail-produk-text">500</p>
                </div>
                <div className="d-flex justify-content-between list-detail">
                  <p className="detail-produk-text">Harga</p>
                  <p className="detail-produk-text">Rp 12.000</p>
                </div>
                <div className="d-flex justify-content-between list-detail">
                  <p className="detail-produk-text">Harga (Poin)</p>
                  <p className="detail-produk-text">1.200</p>
                </div>
                <div style={{ marginLeft: "100px" }}>
                  <p>Deskripsi</p>
                  <p>
                    Dapatkan pulsa 10.000 dengan harga Rp 12.000 Harga sudah
                    termasuk PPN 10%
                  </p>
                </div>
                <br />
                <div
                  style={{ position: "relative" }}
                  className="mb-2 d-flex justify-content-center gap-5"
                >
                  <Button
                    style={{
                      backgroundColor: "#006BA0",
                      borderColor: "#006BA0",
                    }}
                    onClick={togglePopUp}
                  >
                    Ubah
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#D15F02",
                      borderColor: "#D15F02",
                    }}
                    onClick={handleGoBack}
                  >
                    Kembali
                  </Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DetailEditProdukPaket;
