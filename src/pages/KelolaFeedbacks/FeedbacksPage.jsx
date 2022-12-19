import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getFeedbacks } from "../../api/getFeedbacks";
import NavbarTop from "../../components/NavbarTop";
import NewSidebar from "../../components/sidebar/NewSidebar";
import "../../assets/styles/overflow.css";
import "../../assets/styles/feedback.css";

const FeedbacksPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getFeedbacks();
      setData(res.data.data);
      setLoading(false);
    };
    if (loading) fetchPosts();
  }, [loading]);
  console.log(data);
  return (
    <div className="d-flex">
      <NewSidebar />
      <div className="w-100">
        <NavbarTop />
        {loading ? (
          <div class="position-absolute top-50 start-50 translate-middle ms-5 ps-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="ps-3 pe-3 w-100 pt-3 feedback-overflow judulF">
            <h4 className="mb-4 mt-1 pt-3 ">Feedback Pelanggan</h4>
            <div className="d-flex flex-row flex-wrap gap-4 justify-content-center pt-3">
              {data.map((item) => (
                <Card
                  style={{
                    height: "35vh",
                    backgroundColor: "#ECECEE",
                    color: "#01478C",
                    width: "35rem",
                    textAlign: "center",
                    padding: "10px",
                  }}
                >
                  <span className="boldF">
                    {item.is_information_helpful == true
                      ? "Informasi yang diberikan Membantu"
                      : "Informasi yang diberikan Tidak Membantu"}
                  </span>

                  <Card.Body className="d-flex flex-column justify-content-between text-start">
                    <div>{item.review}</div>
                    <div className="">
                      <img
                        alt=""
                        style={{
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          width: "42px",
                          height: "62px",
                        }}
                        src={require("../../assets/images/User/userlogo.png")}
                      />
                      <span className="ms-2 boldF">{data.user}</span>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbacksPage;
