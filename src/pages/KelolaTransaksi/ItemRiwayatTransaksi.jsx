import React from "react";
import "../../assets/styles/Button.css";
import { FiPhone } from "react-icons/fi";
import Swal from "sweetalert2";
import { deleteTransaksi } from "../../api/deleteTransaksi";
import "../../assets/styles/warnaTransaksi.css";

const ItemRiwayatTransaksi = ({ data, index }) => {
  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTransaksi(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted!",
          icon: "success",
        }).then(function () {
          window.location.reload();
        });
      }
    });
  };
  const warna = () => {
    if (data.status == "Success") {
      return "sukses";
    } else if (data.status == "Pending") {
      return "pending";
    } else if (data.status == "Gagal") {
      return "gagal";
    }
  };
  return (
    <tr
      style={
        index % 2 === 0
          ? { backgroundColor: "#F5F6F7" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-2 text-center">{data.created_date}</td>
      <td className="col-1">
        {data.transaction_detail?.email}
        <br />
        <div style={{ color: "#8C8C8C" }}>
          <FiPhone
            style={{
              fontSize: "16px",
              marginRight: "5px",
              marginBottom: "4px",
            }}
          />
          {data.transaction_detail?.number}
        </div>
      </td>
      <td className="col-1">{data.type}</td>
      <td className="col-1">{data.method}</td>
      <td className="col-1">{data.amount}</td>
      <td className="col-1">
        <p className={warna()}>{data.status}</p>
      </td>
      <td className="col-1">
        <i
          className="bi bi-trash3 ms-3 delete-button"
          onClick={() => deleteItem(data.id)}
        ></i>
      </td>
    </tr>
  );
};

export default ItemRiwayatTransaksi;
