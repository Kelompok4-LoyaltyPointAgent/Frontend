import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../assets/style/home.css";

export default function Dashboard() {
  return (
    <div className="home">
      <Navbar />
      <div className="space">
        <h1 className="text-center">Welcome</h1>
        <p className="px-5 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          dolor lorem, suscipit quis feugiat convallis, convallis id leo.
          Quisque nec ex placerat, pretium risus sit amet, blandit dui. Cras at
          sem vel diam ornare gravida eu et justo. Pellentesque ac erat vitae
          magna ultrices cursus ac eget risus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
          non sem lacus. In interdum posuere turpis, in dignissim mi tristique
          nec. Donec congue erat id tincidunt feugiat. Fusce purus massa, mollis
          fringilla tincidunt sed, ultrices id lorem. Sed ac odio iaculis,
          varius nulla nec, varius lorem
        </p>
        <div className="d-flex justify-content-evenly my-4">
          <Link to="/">
            <button type="button" class="btn btn-outline-primary">
              Kiri
            </button>
          </Link>
          <Link to="/">
            <button type="button" class="btn btn-outline-primary">
              Kanan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
