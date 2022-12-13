import React from 'react'
import "../../assets/styles/Button.css";
import {FiPhone} from 'react-icons/fi'

const ItemRiwayatTransaksi = ({ data, index }) => {
    return (
      <tr
        style={
          index % 2 === 0
            ? { backgroundColor: "#F5F6F7" }
            : { backgroundColor: "#FEF0CD" }
        }
      >
        <td className="col-2 text-center">{data.created_date}</td>
        <td className="col-1">{data.transaction_detail.email}<br/>
        <FiPhone style={{fontSize:'16px', marginRight:'5px', marginBottom:'4px'}}/>{data.transaction_detail.number}</td>
        <td className="col-1">{data.type}</td>
        <td className="col-1">{data.method}</td>
        <td className="col-1">{data.amount}</td>
        <td className="col-1">{data.status}</td>
        <td className="col-1">
          <i className="bi bi-trash3 ms-3 delete-button"></i>
        </td>
      </tr>
    );
  };

export default ItemRiwayatTransaksi