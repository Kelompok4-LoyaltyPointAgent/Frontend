import { useState } from "react";
import { updatePaket } from "../../api/updatePaket";
import "../../assets/styles/popUp.css";

const EditProdukPaket = (props) => {
  const [image, setImage] = useState("");
  const [data, setData] = useState({
    nama: props.data.name,
    provider: props.data.provider,
    harga: props.data.price,
    hargaDalamPoin: props.data.price_points,
    hadiahDalamPoin: props.data.reward_points,
    stock: props.data.stock,
    rekomendasi: props.data.recommended,
    fotoProduk: "",
    periodeAktif: props.data.package.active_period,
    mainInternet: props.data.package.main_internet,
    nightInternet: props.data.package.night_internet,
    socialMedia: props.data.package.social_media,
    call: props.data.package.call,
    sms: props.data.package.sms,
    deskripsi: props.data.description,
    deskripsiPaket: props.data.package.description,
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (
      name == "harga" ||
      name == "hargaDalamPoin" ||
      name == "hadiahDalamPoin" ||
      name == "stock" ||
      name == "periodeAktif" ||
      name == "mainInternet" ||
      name == "nightInternet" ||
      name == "socialMedia" ||
      name == "jumlah" ||
      name == "call" ||
      name == "sms"
    ) {
      const regexNumber = /^[0-9]*$/;
      if (regexNumber.test(value)) {
        setData({
          ...data,
          [name]: value,
        });
      }
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
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
    setImage(URL.createObjectURL(e.target.files[0]));
    setData({
      ...data,
      [name]: value,
    });
  };
  const addNow = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      const totalInternet =
        parseInt(data.mainInternet) +
        parseInt(data.nightInternet) +
        parseInt(data.socialMedia);
      formData.append("name", data.nama);
      formData.append("provider", data.provider);
      formData.append("price", data.harga);
      formData.append("price_points", data.hargaDalamPoin);
      formData.append("reward_points", data.hadiahDalamPoin);
      formData.append("stock", data.stock);
      formData.append("recommended", data.rekomendasi);
      if (data.fotoProduk) {
        formData.append(
          "product_picture",
          data.fotoProduk,
          data.fotoProduk.name
        );
      }
      formData.append("active_period", data.periodeAktif);
      formData.append("total_internet", totalInternet);
      formData.append("main_internet", data.mainInternet);
      formData.append("night_internet", data.nightInternet);
      formData.append("social_media", data.socialMedia);
      formData.append("call", data.call);
      formData.append("sms", data.sms);
      formData.append("description", data.deskripsi);
      formData.append("package_description", data.deskripsiPaket);
      const res = await updatePaket(props.data.id, formData);
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
                  checked={data.rekomendasi ? "checked" : ""}
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
              <img
                src={
                  data.fotoProduk ? image : props?.data?.product_picture?.url
                }
                class="rounded float-start img-thumbnail"
                alt="productPicture"
              />
              <input
                type="file"
                className="form-control"
                id="inputFotoProduk"
                name="fotoProduk"
                onChange={handleFile}
                accept="image/*"
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
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputMainInternet"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Main Internet
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputMainInternet"
                name="mainInternet"
                onChange={handleInput}
                value={data.mainInternet}
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputNightInternet"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Internet Malam
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputNightInternet"
                name="nightInternet"
                onChange={handleInput}
                value={data.nightInternet}
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label
              for="inputSocialMedia"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Social Media
            </label>
            <div className="col-sm-7">
              <input
                type="text"
                className="form-control"
                id="inputSocialMedia"
                name="socialMedia"
                onChange={handleInput}
                value={data.socialMedia}
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
          <div className="form-group row mb-2">
            <label
              for="inputDeskripsiPaket"
              className="offset-sm-1 col-sm-3 col-form-label"
            >
              Deskripsi Paket
            </label>
            <div className="col-sm-7">
              <textarea
                className="form-control"
                id="inputDeskripsiPaket"
                style={{ height: "70px" }}
                name="deskripsiPaket"
                onChange={handleInput}
                value={data.deskripsiPaket}
              ></textarea>
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
export default EditProdukPaket;
