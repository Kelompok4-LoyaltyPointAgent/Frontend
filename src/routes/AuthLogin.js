import { Navigate, Outlet } from "react-router-dom";

const AuthLogin = ({ token, redirectPath = "/login", children }) => {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default AuthLogin;
