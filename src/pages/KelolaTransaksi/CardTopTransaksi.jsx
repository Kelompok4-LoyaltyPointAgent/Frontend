import { Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getTransactions } from "../../api/getTransaksi";

import "../../assets/styles/cardShadow.css";

const CardTopTransaksi = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getTransactions();
      setPosts(res.data.data);
    };
    fetchPosts();
    setTimeout(isReload, 5000);
  }, [loading]);

  const isReload = () => {
    setLoading(!loading);
  };

  const sukses = () => {
    let total = 0;
    posts.map((item) => (item.status == "Success" ? total++ : ""));
    return total;
  };
  const pending = () => {
    let total = 0;
    posts.map((item) => (item.status == "Pending" ? total++ : ""));
    return total;
  };
  const gagal = () => {
    let total = 0;
    posts.map((item) => (item.status == "Failed" ? total++ : ""));
    return total;
  };

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {loading ?
        <Skeleton variant="rounded" width={240} height={110} />
        :
        <Card
          className="d-flex card-shadow"
          style={{
            borderRadius: "10px",
            borderLeftColor: "#E09456",
            borderLeftWidth: "5px",
            width: "15rem",
            padding: "10px",
          }}
        >
          <span className="mt-2 mb-2 ms-2" style={{ color: "#838587" }}>
            <h5>Transaksi</h5>
          </span>
          <span className="mb-2 ms-2" style={{ color: "#E09456" }}>
            <h5>{posts.length}</h5>
          </span>
        </Card>}
      {loading ?
        <Skeleton variant="rounded" width={240} height={110} />
        :
        <Card
          className="d-flex card-shadow"
          style={{
            borderRadius: "10px",
            borderLeftColor: "#66A46C",
            borderLeftWidth: "4px",
            width: "15rem",
            padding: "10px",
          }}
        >
          <span className="mt-2 mb-2 ms-2" style={{ color: "#838587" }}>
            <h5>Sukses</h5>
          </span>
          <span className="mb-2 ms-2" style={{ color: "#66A46C" }}>
            <h5>{sukses()}</h5>
          </span>
        </Card>}
      {loading ?
        <Skeleton variant="rounded" width={240} height={110} />
        :
        <Card
          className="d-flex card-shadow"
          style={{
            borderRadius: "10px",
            borderLeftColor: "#5684B2",
            borderLeftWidth: "4px",
            width: "15rem",
            padding: "10px",
          }}
        >
          <span className="mt-2 mb-2 ms-2" style={{ color: "#838587" }}>
            <h5>Dalam Proses</h5>
          </span>
          <span className="mb-2 ms-2" style={{ color: "#5684B2" }}>
            <h5>{pending()}</h5>
          </span>
        </Card>}
      {loading ?
        <Skeleton variant="rounded" width={240} height={110} />
        :
        <Card
          className="d-flex card-shadow"
          style={{
            borderRadius: "10px",
            borderLeftColor: "#BB6470",
            borderLeftWidth: "4px",
            width: "15rem",
            padding: "10px",
          }}
        >
          <span className="mt-2 mb-2 ms-2" style={{ color: "#838587" }}>
            <h5>Gagal</h5>
          </span>
          <span className="mb-2 ms-2" style={{ color: "#BB6470" }}>
            <h5>{gagal()}</h5>
          </span>
        </Card>}
    </div>
  );
};

export default CardTopTransaksi;
