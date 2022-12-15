import { useState } from "react";
import { updateFAQ } from "../../api/updateFAQ";
import "../../assets/styles/PopUp.css";

const EditFAQ = (props) => {
  const [data, setData] = useState({
    category: props.data.category,
    question: props.data.question,
    answer: props.data.answer,
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
      const res = await updateFAQ(props.data.id, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log("testaddnow");
    window.location.reload();
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
              for="inputQuestion"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Pertanyaan
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputQuestion"
                name="question"
                onChange={handleInput}
                value={data.question}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputAnswer"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Jawaban
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputAnswer"
                name="answer"
                onChange={handleInput}
                value={data.answer}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputCategory"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Kategori
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputCategory"
                name="category"
                onChange={handleInput}
                value={data.category}
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
export default EditFAQ;
