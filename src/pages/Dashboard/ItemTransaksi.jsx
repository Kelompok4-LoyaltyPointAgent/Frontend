import "../../assets/styles/Button.css";

const ItemTransaksi = ({ data, index }) => {
  return (
    <tr
      style={
        index % 2 == 0
          ? { backgroundColor: "#F5F6F7" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-1 text-start">{data.nama}</td>
      <td className="col-3">{data.email}</td>
      <td className="col-2">{data.role}</td>
      <td className="col-1">{data.poin}</td>
      <td className="col-1">{data.poin}</td>
      <td className="col-2">{data.poin}</td>
      <td className="col-2">{data.poin}</td>
    </tr>
  );
};

export default ItemTransaksi;