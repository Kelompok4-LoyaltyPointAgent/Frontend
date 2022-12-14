import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login";
import KelolaTransaksi from "../pages/KelolaTransaksi/KelolaTransaksi";
import DetailEditProdukPulsa from "../pages/KelolaStok/DetailEditProdukPulsa";
import DetailEditProdukPaket from "../pages/KelolaStok/DetailEditProdukPaket";
import DetailEditPengguna from "../pages/KelolaPengguna/DetailEditPengguna";
import KelolaAdmin from "../pages/KelolaPengguna/KelolaAdmin";
import StokPaketData from "../pages/KelolaStok/StokPaketData";
import StokPulsa from "../pages/KelolaStok/StokPulsa";
import KelolaPelanggan from "../pages/KelolaPengguna/KelolaPelanggan";
import storage from "../utils/storage";
import KelolaFAQ from "../pages/KelolaFAQ/FaqPage";

function Router() {
  const token = storage.getToken();

  return (
    <div className="Route">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute token={token}></ProtectedRoute>}>
            <Route path="/login" element={<Login></Login>} />
          </Route>

          <Route element={<PrivateRoute token={token}></PrivateRoute>}>
            <Route path="/" element={<Dashboard></Dashboard>} />
            <Route
              path="/kelolaPengguna/pelanggan/detailpengguna/:id"
              exact
              element={<DetailEditPengguna />}
            />
            <Route
              path="/kelolapengguna/pelanggan"
              element={<KelolaPelanggan />}
            />
            <Route path="/kelolapengguna/admin" element={<KelolaAdmin />} />
            <Route path="/kelolatransaksi" element={<KelolaTransaksi />} />
            <Route path="/kelolastok/pulsa" element={<StokPulsa />} />
            <Route path="/kelolastok/paketdata" element={<StokPaketData />} />
            <Route
              path="/kelolastok/detaileditproduk/pulsa"
              element={<DetailEditProdukPulsa />}
            />
            <Route
              path="/kelolastok/detaileditproduk/paket"
              element={<DetailEditProdukPaket />}
            />
            <Route path="/kelolafaq" element={<KelolaFAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
