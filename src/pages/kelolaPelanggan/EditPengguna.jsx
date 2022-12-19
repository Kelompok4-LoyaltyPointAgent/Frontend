import { useState } from "react";
import "../../assets/styles/popUp.css";
import { updateUser } from "../../api/updateUser";

const EditPengguna = (props) => {
  const [data, setData] = useState({
    namaLengkap: props.data.name,
    email: props.data.email,
    password: "******",
    poin: props.data.points,
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const updateData = async (e) => {
    e.preventDefault();
    const datas = {
      name: data.namaLengkap,
      email: data.email,
    };
    try {
      const res = await updateUser(props.data.id, datas);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h2 className="mb-4 mt-2">
          <center>Edit Pengguna</center>
        </h2>
        <form onSubmit={updateData}>
          <div className="form-group row mb-2">
            <label
              for="inputNamaLengkap"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Nama Lengkap
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputNamaLengkap"
                name="namaLengkap"
                onChange={handleInput}
                value={data.namaLengkap}
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
          <div className="form-group row mb-2">
            <label
              for="inputPoin"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Point
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputPoin"
                name="poin"
                onChange={handleInput}
                value={data.poin}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputPassword"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Password
            </label>
            <div className="col-sm-7">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                onChange={handleInput}
                value={data.password}
                disabled
                style={{ color: "gray" }}
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
export default EditPengguna;
