import { Axios } from "axios";
import { useState } from "react";
import { postFaqs } from "../../api/postFaqs";
import "../../assets/styles/PopUp.css";
import { axios } from "../../configs/axios";
import { data } from "../Dashboard/DonatDashboard";

const AddData = (props) => {
  const [data, setData] = useState({
    pertanyaan: "",
    jawaban: "",
    category: "",
  });
  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  const addNow = async (e) => {
    e.preventDefault();
    try {
      const res = await postFaqs({
        question: data.pertanyaan,
        answer: data.jawaban,
        category: data.category,
      });
      if (res.data.message === "success") {
        console.log(res);
        // window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h2 className="mb-4 mt-2">
          <center>Tambah Data</center>
        </h2>
        <form onSubmit={addNow}>
          <div className="form-group row mb-2">
            <label
              for="Pertanyaan"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Pertanyaan
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="pertanyaan"
                name="pertanyaan"
                onChange={(e) => handleInput(e)}
                value={data.pertanyaan}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="jawaban"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Jawaban
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="jawaban"
                name="jawaban"
                onChange={handleInput}
                value={data.jawaban}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="category"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Kategori
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                onChange={handleInput}
                value={data.category}
                required
              />
            </div>
          </div>
          <div className="button mt-4">
            <center>
              <button type="submit" className="btn btn-success mx-3">
                Tambah Data
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
export default AddData;
