import { NavLink } from "react-router-dom";
import "../../assets/styles/Button.css";
import Swal from "sweetalert2";
import { deleteUser } from "../../api/deleteUser";
import { numberFormater } from "../../components/numberFormater";

const ItemPelanggan = ({ data, index, setReload }) => {
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
        deleteUser(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted!",
          icon: "success",
        }).then(function () {
          setReload();
        });
      }
    });
  };
  return (
    <tr
      style={
        index % 2 == 0
          ? { backgroundColor: "#ececee" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-1">{data.name}</td>
      <td className="col-2">{data.email}</td>
      <td className="col-1">{numberFormater(data.points)}</td>
      <td className="col-1">
        <NavLink
          to={`/kelolaPengguna/pelanggan/detailpengguna/${data.id}`}
          key={data.id}
          className="bi bi-file-earmark-text file-button"
        ></NavLink>
        <i
          className="bi bi-trash3 ms-3 delete-button"
          onClick={() => deleteItem(data.id)}
        ></i>
      </td>
    </tr>
  );
};

export default ItemPelanggan;
