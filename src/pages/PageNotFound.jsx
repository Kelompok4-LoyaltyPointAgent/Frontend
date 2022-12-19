import React from "react";
import { Button } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <div className="coba-page">
      <div className="background">
        <div className="d-flex justify-content-center">
          <div
            className="d-flex flex-column"
            style={{ marginTop: "150px", marginLeft: "600px" }}
          >
            <span
              style={{ fontSize: "200px", fontWeight: "700", color: "#01478C" }}
            >
              <center>404</center>
            </span>
            <span
              className="text-center"
              style={{
                color: "#FBB505",
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "0",
              }}
            >
              Page Not Found
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
