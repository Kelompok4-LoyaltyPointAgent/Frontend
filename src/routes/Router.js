import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLoggedIn from "./AuthLoggedIn";
import AuthLogin from "./AuthLogin";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import KelolaStok from "../pages/KelolaStok/KelolaStok";
import KelolaTransaksi from "../pages/KelolaTransaksi";
import KelolaPengguna from "../pages/KelolaPengguna/KelolaPengguna";

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
            <Route path="/kelolaPengguna" element={<KelolaPengguna />} />
            <Route path="/kelolatransaksi" element={<KelolaTransaksi />} />
            <Route path="/kelolastok" element={<KelolaStok />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
