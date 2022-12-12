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
      <td className="col-1 text-start">{data.provider}</td>
      <td className="col-1">{data.credit.amount}</td>
      <td className="col-1">{data.stock}</td>
      <td className="col-1">{data.price_points}</td>
      <td className="col-1">{data.price}</td>
      <td className="col-1">
        <i className="bi bi-file-earmark-text file-button"></i>
        <i className="bi bi-trash3 ms-3 delete-button"></i>
      </td>
    </tr>
  );
};

export default ItemPulsa;
