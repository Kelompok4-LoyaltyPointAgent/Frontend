import { useNavigate } from "react-router-dom";
import "../../assets/styles/Button.css";

const ItemPulsa = ({ data, index }) => {
  const navigate = useNavigate();
  const info = (id) => {
    navigate("/kelolastok/detaileditproduk/pulsa/" + id);
  };

  return (
    <tr
      style={
        index % 2 === 0
          ? { backgroundColor: "white" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-1 text-start">{data.provider}</td>
      <td className="col-1">{data.name}</td>
      <td className="col-1">{data.stock}</td>
      <td className="col-1">{data.price_points}</td>
      <td className="col-1">{data.price}</td>
      <td className="col-1">
        <i
          className="bi bi-file-earmark-text file-button"
          onClick={() => info(data.credit.id)}
        ></i>
        <i className="bi bi-trash3 ms-3 delete-button"></i>
      </td>
    </tr>
  );
};

export default ItemPulsa;
