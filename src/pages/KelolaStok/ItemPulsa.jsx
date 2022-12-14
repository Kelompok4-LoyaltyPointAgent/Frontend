import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { deletePulsa } from "../../api/deletePulsa";
import "../../assets/styles/Button.css";

const ItemPulsa = ({ data, index }) => {
  const navigate = useNavigate();
  const info = (id) => {
    navigate("/kelolastok/detaileditproduk/pulsa/" + id);
  };
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
        deletePulsa(id);
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
          onClick={() => info(data.id)}
        ></i>
        <i
          className="bi bi-trash3 ms-3 delete-button"
          onClick={() => deleteItem(data.id)}
        ></i>
      </td>
    </tr>
  );
};

export default ItemPulsa;
