import { useState } from "react";
import { updateUser } from "../../api/updateUser";
import "../../assets/styles/PopUp.css";

const EditAdmin = (props) => {
  const [data, setData] = useState({
    name: props.data.name,
    email: props.data.email,
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const addNow = async (e) => {
    e.preventDefault();
    try {
      const res = await updateUser(props.data.id, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    props.setReload();
    props.handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h2 className="mb-4 mt-2">
          <center>Edit Faq</center>
        </h2>
        <form onSubmit={addNow}>
          <div className="form-group row mb-2">
            <label
              for="inputName"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Nama Lengkap
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                onChange={handleInput}
                value={data.name}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputEmail"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Email
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                name="email"
                onChange={handleInput}
                value={data.email}
                required
              />
            </div>
          </div>
          <div className="button mt-4">
            <center>
              <button
                type="submit"
                className="btn mx-3"
                style={{ backgroundColor: "#006BA0", color: "white" }}
              >
                Update
              </button>

              <button
                className="btn btn-danger mx-3"
                onClick={props.handleClose}
              >
                Batal
              </button>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditAdmin;
