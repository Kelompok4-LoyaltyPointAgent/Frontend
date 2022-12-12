import "../../assets/styles/Button.css";

const ItemPulsa = ({ data, index }) => {
  return (
    <tr
      style={
        index % 2 == 0
          ? { backgroundColor: "#ececee" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-3 text-start">{data.nama}</td>
      <td className="col-3">{data.email}</td>
      <td className="col-2">{data.role}</td>
      <td className="col-2">{data.poin}</td>
      <td className="col-1">
        <i className="bi bi-file-earmark-text file-button"></i>
        <i className="bi bi-trash3 ms-3 delete-button"></i>
      </td>
    </tr>
  );
};

export default ItemPulsa;