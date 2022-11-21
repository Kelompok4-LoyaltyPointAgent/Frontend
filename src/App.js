import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLogin from "./components/AuthLogin";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
