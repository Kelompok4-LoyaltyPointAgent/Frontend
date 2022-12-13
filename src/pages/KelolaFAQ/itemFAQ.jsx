import "../../assets/styles/Button.css";

const ItemFAQ = ({ data, index }) => {
  return (
    <tr
      style={
        index % 2 == 0
          ? { backgroundColor: "#ececee" }
          : { backgroundColor: "#FEF0CD" }
      }
    >
      <td className="col-3 text-start">{data.question}</td>
      <td className="col-3">{data.answer}</td>
      <td className="col-2">{data.category}</td>
      <td className="col-1">
        <i className="bi bi-file-earmark-text file-button"></i>
        <i className="bi bi-trash3 ms-3 delete-button"></i>
      </td>
    </tr>
  );
};

export default ItemFAQ;