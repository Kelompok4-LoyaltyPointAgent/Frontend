import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "../../assets/styles/cardShadow.css";
import { getAnalyticsProduk } from "../../api/getAnalyticsProduk";
import { numberFormater } from "../../components/numberFormater";
import { Skeleton } from "@mui/material";

const CardTopPaket = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAnalyticsProduk();
      setPosts(res.data.data);
    };
    fetchPosts();
    setTimeout(isReload, 5000);
  }, [loading]);

  const isReload = () => {
    setLoading(!loading);
  };
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {loading ?
        <Skeleton variant="rounded" width={400} height={110} />
        :
        <Card
          className="d-flex card-shadow"
          style={{
            borderRadius: "10px",
            borderLeftColor: "#2B669F",
            borderLeftWidth: "4px",
            width: "25rem",
            padding: "10px",
          }}
        >
          <span className="mt-2 mb-2 ms-2">
            <h5>Stok Produk</h5>
          </span>
          <span className="mb-2 ms-2" style={{ color: "#2B669F" }}>
            <h5>{posts.totalProduct}</h5>
          </span>
        </Card>}
      {loading ?
        <Skeleton variant="rounded" width={400} height={110} />
        :
        <Card
          className="d-flex card-shadow"
          style={{
            borderRadius: "10px",
            borderLeftColor: "#559CC0",
            borderLeftWidth: "4px",
            width: "25rem",
            padding: "10px",
          }}
        >
          <span className="mt-2 mb-2 ms-2">
            <h5>Saldo Cash Out</h5>
          </span>
          <span className="mb-2 ms-2" style={{ color: "#559CC0" }}>
            <h5>Rp. {numberFormater(posts.cashoutBalance)}</h5>
          </span>
        </Card>
      }
      {loading ?
        <Skeleton variant="rounded" width={400} height={110} />
        :
        <Card
          className="d-flex card-shadow"
          style={{
            borderRadius: "10px",
            borderLeftColor: "#CC8A93",
            borderLeftWidth: "4px",
            width: "25rem",
            padding: "10px",
          }}
        >
          <span className="mt-2 mb-2 ms-2">
            <h5>Provider</h5>
          </span>
          <span className="mb-2 ms-2" style={{ color: "#CC8A93" }}>
            <h5>{posts.totalProvider}</h5>
          </span>
        </Card>
      }

    </div>
  );
};

export default CardTopPaket;
