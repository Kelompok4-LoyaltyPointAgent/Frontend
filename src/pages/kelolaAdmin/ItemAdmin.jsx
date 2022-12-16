import "../../assets/styles/Button.css";

const ItemAdmin = ({ data, index }) => {
  return (
    <tr
      style={
        index % 2 === 0
          ? { backgroundColor: "#ececee" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-1">{data.name}</td>
      <td className="col-2">{data.email}</td>
      <td className="col-1">{data.points}</td>
      <td className="col-1">
        <i className="bi bi-file-earmark-text file-button"></i>
        <i className="bi bi-trash3 ms-3 delete-button"></i>
      </td>
    </tr>
  );
};

export default ItemAdmin;
