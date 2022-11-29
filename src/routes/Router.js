import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLoggedIn from "./AuthLoggedIn";
import AuthLogin from "./AuthLogin";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Register from "../pages/Register";

function Router() {
  const token = useSelector((state) => state.token.tokens);

  return (
    <div className="Route">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLoggedIn token={token}></AuthLoggedIn>}>
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
          </Route>

          <Route element={<AuthLogin token={token}></AuthLogin>}>
            <Route path="/" element={<Dashboard></Dashboard>} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
