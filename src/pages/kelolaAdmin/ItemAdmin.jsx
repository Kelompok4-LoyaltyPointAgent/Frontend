import "../../assets/styles/Button.css";

const ItemAdmin = ({ data, index, sentData, toggle }) => {


  const editItem = (data) => {
    sentData(data);
    toggle();
  };
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
      <td className="col-1">*******</td>
      <td className="col-1">
        <i
          className="bi bi-file-earmark-text file-button"
          onClick={() => editItem(data)}
        ></i>

      </td>
    </tr>
  );
};

export default ItemAdmin;
