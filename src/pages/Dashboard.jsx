import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar></Sidebar>
      <div className="mt-5 pt-4">Dashboard</div>
    </div>
  );
}
