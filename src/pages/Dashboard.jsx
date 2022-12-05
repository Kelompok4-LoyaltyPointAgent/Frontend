import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar list={1}></Sidebar>
      <div className="mt-5 pt-4">Dashboard</div>
    </div>
  );
}
