import { useState } from "react";
import "../../assets/styles/PopUp.css";

const EditProdukPulsa = (props) => {
  const [data, setData] = useState({
    nama: "",
    provider: "",
    harga: "",
    hargaDalamPoin: "",
    hadiahDalamPoin: "",
    stock: "",
    rekomendasi: "",
    periodeAktif: "",
    nilai: "",
    deskripsi: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleCheck = (e) => {
    const name = e.target.name;
    const check = e.target.checked;

    setData({
      ...data,
      [name]: check,
    });
    console.log(data.rekomendasi);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h2 className="mb-4 mt-2">
          <center>Edit Produk</center>
        </h2>
        <form onSubmit="">
          <div className="form-group row mb-2">
            <label
              for="inputNama"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Nama
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputNama"
                name="nama"
                onChange={handleInput}
                value={data.nama}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputProvider"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Provider
            </label>
            <div className="col-sm-7">
              <select
                className="form-select"
                id="inputProvider"
                name="provider"
                onChange={handleInput}
                value={data.provider}
                required
              >
                <option defaultValue hidden disabled>
                  Choose...
                </option>
                <option required value="1">
                  One
                </option>
                <option required value="2">
                  Two
                </option>
                <option required value="3">
                  Three
                </option>
              </select>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputHarga"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Harga
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputHarga"
                name="harga"
                onChange={handleInput}
                value={data.harga}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputHargaDalamPoin"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Harga Dalam Poin
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputHargaDalamPoin"
                name="hargaDalamPoin"
                onChange={handleInput}
                value={data.hargaDalamPoin}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputHadiahDalamPoin"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Hadiah Dalam Poin
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputHadiahDalamPoin"
                name="hadiahDalamPoin"
                onChange={handleInput}
                value={data.hadiahDalamPoin}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputStock"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Stock
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputStock"
                name="stock"
                onChange={handleInput}
                value={data.stock}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputRekomendasi"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Rekomendasi
            </label>
            <div className="col-sm-7 ms-1">
              <div className="form-check form-switch toggle ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="inputRekomendasi"
                  name="rekomendasi"
                  onChange={handleCheck}
                />
              </div>
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputPeriodeAktif"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Periode Aktif
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputPeriodeAktif"
                name="periodeAktif"
                onChange={handleInput}
                value={data.periodeAktif}
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputNilai"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Nilai
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputNilai"
                name="nilai"
                onChange={handleInput}
                value={data.nilai}
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputDeskripsi"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Deskripsi
            </label>
            <div className="col-sm-7">
              <textarea
                className="form-control"
                id="inputDeskripsi"
                style={{ height: "70px" }}
                name="deskripsi"
                onChange={handleInput}
                value={data.deskripsi}
              ></textarea>
            </div>
          </div>

          <div className="button mt-4">
            <center>
              <button type="submit" className="btn mx-3" 
              style={{backgroundColor:'#006BA0', color:'white'}}>
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
export default EditProdukPulsa;