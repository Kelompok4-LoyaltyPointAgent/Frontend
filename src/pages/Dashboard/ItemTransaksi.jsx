import "../../assets/styles/Button.css";
import { FiPhone } from "react-icons/fi";
import { numberFormater } from "../../components/numberFormater";

const ItemTransaksi = ({ data, index }) => {
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
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-1">{data.created_date}</td>
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
      <td className="col-1">{data.product_id ? data.product?.type : "Poin"}</td>
      <td className="col-1">{numberFormater(data.amount)}</td>
      <td className="col-1">
        <p className={warna()}>{data.status}</p>
      </td>
    </tr>
  );
};

export default ItemTransaksi;
