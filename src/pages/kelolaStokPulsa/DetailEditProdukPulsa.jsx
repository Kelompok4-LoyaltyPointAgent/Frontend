import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../assets/styles/detailEditProduk.css";
import "../../assets/styles/overflow.css";
import EditProdukPulsa from "./EditProdukPulsa";
import NewSidebar from "../../components/sidebar/NewSidebar";
import { getCreditId } from "../../api/getCreditId";
import NavbarTop from "../../components/NavbarTop";
import { numberFormater } from "../../components/numberFormater";

const DetailEditProdukPulsa = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getCreditId(id);
      setData(res.data.data);
    };

    fetchPosts(data);
  }, [id]);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="d-flex">
        <NewSidebar />
        <div className="w-100">
          <NavbarTop />
          <div className="pt-3 ps-3 pe-3 w-100 main">
            {isOpen && (
              <EditProdukPulsa handleClose={togglePopUp} data={data} />
            )}
            <Card border="dark" className="">
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
                        src={require("../../assets/images/ProdukPulsa/Frame 33773.png")}
                      />
                    </i>
                  </Col>
                  <Col
                    sm={8}
                    lg={8}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <p className="mt-4" style={{ color: "white" }}>
                      <h4>Detail Pulsa</h4>
                    </p>
                    <p className="text-harga">
                      <h2>Rp {numberFormater(data.price)}</h2>
                    </p>
                    <img
                      style={{
                        height: "70px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                      }}
                      alt="productPicture"
                      src={data.icon?.url}
                    />
                  </Col>
                  <Col
                    sm={2}
                    lg={2}
                    className="d-flex justify-content-end pe-4"
                  >
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
                          <h4>{numberFormater(data.reward_points)}</h4>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Text className="text-overflow">
                  <div className="mt-2 d-flex justify-content-between list-detail">
                    <p className="detail-produk-text">MASA AKTIF</p>
                    <p className="detail-produk-text">
                      {data.credit?.active_period} HARI
                    </p>
                  </div>
                  <div className="d-flex justify-content-between list-detail">
                    <p className="detail-produk-text">STOK</p>
                    <p className="detail-produk-text">{data.stock}</p>
                  </div>
                  <div className="d-flex justify-content-between list-detail">
                    <p className="detail-produk-text">HARGA</p>
                    <p className="detail-produk-text">
                      Rp {numberFormater(data.price)}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between list-detail">
                    <p className="detail-produk-text">HARGA (POIN)</p>
                    <p className="detail-produk-text">
                      {numberFormater(data.price_points)}
                    </p>
                  </div>
                  <div style={{ marginLeft: "100px" }}>
                    <p>Deskripsi</p>
                    <p>{data.description}</p>
                  </div>
                  <br />
                </Card.Text>
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
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailEditProdukPulsa;
