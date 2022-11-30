import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
const KelolaTransaksi = () => {
  return (
    <div className="d-flex">
      <Sidebar list={3}></Sidebar>
      <div className="mt-5 pt-4">Transaksi</div>
    </div>
  );
};

export default KelolaTransaksi;
