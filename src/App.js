import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AuthLogin from "./components/AuthLogin";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";

function App() {
  const token = useSelector((state) => state.token.tokens);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route element={<AuthLogin token={token}></AuthLogin>}>
            <Route path="/" element={<Dashboard></Dashboard>} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
