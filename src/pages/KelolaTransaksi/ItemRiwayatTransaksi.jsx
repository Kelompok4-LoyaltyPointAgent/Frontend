import React from "react";
import "../../assets/styles/button.css";
import { FiPhone } from "react-icons/fi";
import Swal from "sweetalert2";
import "../../assets/styles/warnaTransaksi.css";
import { numberFormater } from "../../components/numberFormater";
import { NavLink } from "react-router-dom";

const ItemRiwayatTransaksi = ({ data, index }) => {
  const warna = () => {
    if (data.status == "Success") {
      return "sukses";
    } else if (data.status == "Pending") {
      return "pending";
    } else if (data.status == "Failed") {
      return "gagal";
    }
  };
  return (
    <tr
      style={
        index % 2 === 0
          ? { backgroundColor: "#ECECEE" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-1">{data.created_date}</td>
      <td className="col-1">{data.transaction_detail?.email}</td>
      <td className="col-1">{data.type}</td>
      <td className="col-1">{data.method}</td>
      <td className="col-1">{data.product_id ? data.product?.type : "Poin"}</td>
      <td className="col-1">{numberFormater(data.amount)}</td>
      <td className="col-1">
        <p className={warna()}>{data.status}</p>
      </td>
      <td className="col-1">
        <NavLink
          to={`/kelolatransaksi/detail/${data.id}`}
          key={data.id}
          className="bi bi-file-earmark-text file-button"
        ></NavLink>
      </td>
    </tr>
  );
};

export default ItemRiwayatTransaksi;
