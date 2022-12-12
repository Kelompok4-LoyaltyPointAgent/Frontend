import React from "react";
import "../../assets/styles/Dashboard.css";
import CardDashboard from "./CardDashboard";
import BarDashboard from "./BarDashboard";
import { Card } from "react-bootstrap";
import NewSidebar from "../../components/sidebar/NewSidebar";
import NavbarTop from "../../components/NavbarTop";

export default function Dashboard() {
  return (
    <div className="d-flex">
      <NewSidebar />
      <div className="w-100">
        <NavbarTop />
        <div className="mt-4 ps-3 pe-3 w-100">
          <div>
            <CardDashboard />
          </div>
          <div>
            <BarDashboard />
          </div>
          <div>
            <p>Transaksi Terakhir</p>
            <div className="d-flex flex-row flex-wrap" style={{ gap: "100px" }}>
              <Card
                className="d-flex flex-row m-0 card-shadow-info"
                style={{ width: "35rem", padding: "10px" }}
              >
                <img
                  style={{ width: "50px", height: "50px", marginLeft: "10px" }}
                  src={require("../../assets/images/User/Rectangle 20.png")}
                  alt="icon"
                />
                <div>
                  <p
                    className="ms-3 mb-0"
                    style={{ fontSize: "20px", color: "#01478C" }}
                  >
                    Edi Wibowo
                  </p>
                  <p
                    className="ms-3 mb-0 mt-0"
                    style={{ fontSize: "14px", color: "#FBB505" }}
                  >
                    4 Transaksi
                  </p>
                </div>
              </Card>
              <Card
                className="d-flex flex-row m-0 card-shadow-info"
                style={{ width: "35rem", padding: "10px" }}
              >
                <img
                  style={{ width: "50px", height: "50px", marginLeft: "10px" }}
                  src={require("../../assets/images/User/Rectangle 20.png")}
                  alt="icon"
                />
                <div>
                  <p
                    className="ms-3 mb-0"
                    style={{ fontSize: "20px", color: "#01478C" }}
                  >
                    Edi Wibowo
                  </p>
                  <p
                    className="ms-3 mb-0 mt-0"
                    style={{ fontSize: "14px", color: "#FBB505" }}
                  >
                    4 Transaksi
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
