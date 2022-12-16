import { useState } from "react";
import { postCredits } from "../../api/postCredits";
import "../../assets/styles/PopUp.css";

const AddStockPulsa = (props) => {
  const [data, setData] = useState({
    nama: "",
    provider: "Telkomsel",
    harga: "",
    hargaDalamPoin: "",
    hadiahDalamPoin: "",
    stock: "",
    rekomendasi: "",
    fotoProduk: "",
    periodeAktif: "",
    jumlah: "",
    call: "",
    sms: "",
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
  };
  const handleFile = (e) => {
    const name = e.target.name;
    const value = e.target.files[0];
    setData({
      ...data,
      [name]: value,
    });
  };

  const addNow = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      let formData = new FormData();
      formData.append("name", data.nama);
      formData.append("provider", data.provider);
      formData.append("price", data.harga);
      formData.append("price_points", data.hargaDalamPoin);
      formData.append("reward_points", data.hadiahDalamPoin);
      formData.append("stock", data.stock);
      formData.append("recommended", data.rekomendasi);
      formData.append("product_picture", data.fotoProduk, data.fotoProduk.name);
      formData.append("active_period", data.periodeAktif);
      formData.append("amount", data.jumlah);
      formData.append("call", data.call);
      formData.append("sms", data.sms);
      formData.append("description", data.deskripsi);
      const res = await postCredits(formData);
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
          <center>Tambah Stok</center>
        </h2>
        <form onSubmit={addNow}>
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
                <option required value="Telkomsel">
                  Telkomsel
                </option>
                <option required value="Xl">
                  Xl
                </option>
                <option required value="Indosat">
                  Indosat
                </option>
                <option required value="Axis">
                  Axis
                </option>
                <option required value="Smartfren">
                  Smartfren
                </option>
                <option required value="Tri">
                  Tri
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
              for="inputFotoProduk"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Foto Produk
            </label>
            <div className="col-sm-7">
              <input
                type="file"
                className="form-control"
                id="inputFotoProduk"
                name="fotoProduk"
                onChange={handleFile}
                required
              />
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
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputJumlah"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Jumlah
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputJumlah"
                name="jumlah"
                onChange={handleInput}
                value={data.jumlah}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputCall"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Call
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputCall"
                name="call"
                onChange={handleInput}
                value={data.call}
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputSms"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              SMS
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputSms"
                name="sms"
                onChange={handleInput}
                value={data.sms}
                required
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
                required
              ></textarea>
            </div>
          </div>

          <div className="button mt-4">
            <center>
              <button type="submit" className="btn btn-success mx-3">
                Tambah Produk
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
export default AddStockPulsa;
