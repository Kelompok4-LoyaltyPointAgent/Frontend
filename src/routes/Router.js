import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLoggedIn from "./AuthLoggedIn";
import AuthLogin from "./AuthLogin";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login";
import KelolaTransaksi from "../pages/KelolaTransaksi";
import DetailEditProdukPulsa from "../pages/KelolaStok/DetailEditProdukPulsa";
import DetailEditProdukPaket from "../pages/KelolaStok/DetailEditProdukPaket";
import DetailEditPengguna from "../pages/KelolaPengguna/DetailEditPengguna";
import KelolaAdmin from "../pages/KelolaPengguna/KelolaAdmin";
import StokPaketData from "../pages/KelolaStok/StokPaketData";
import StokPulsa from "../pages/KelolaStok/StokPulsa";
import KelolaPelanggan from "../pages/KelolaPengguna/KelolaPelanggan";
import FaqPage from "../pages/FaqPage";

function Router() {
  const token = useSelector((state) => state.token.tokens);

  return (
    <div className="Route">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLoggedIn token={token}></AuthLoggedIn>}>
            <Route path="/login" element={<Login></Login>} />
          </Route>

          <Route element={<AuthLogin token={token}></AuthLogin>}>
            <Route path="/" element={<Dashboard></Dashboard>} />
            <Route path="/kelolaPengguna/detaileditpengguna/user" exact element={<DetailEditPengguna/>}/>
            <Route path="/kelolapengguna/pelanggan" element={<KelolaPelanggan/>}/>
            <Route path="/kelolapengguna/admin" element={<KelolaAdmin/>}/>
            <Route path="/kelolatransaksi" element={<KelolaTransaksi />} />
            <Route path="/kelolastok/pulsa" element={<StokPulsa/>}/>
            <Route path="/kelolastok/paketdata" element={<StokPaketData/>}/>
            <Route path="/kelolastok/detaileditproduk/pulsa" element={<DetailEditProdukPulsa/>}/>
            <Route path="/kelolastok/detaileditproduk/paket" element={<DetailEditProdukPaket/>}/>          
            <Route path="/faq" element={<FaqPage/>}/>          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
