import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Loading() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <ReactLoading type="spin" color="#0d6efd" height={500} width={400} />
    </div>
  );
}
