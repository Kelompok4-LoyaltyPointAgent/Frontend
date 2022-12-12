import { Navigate, Outlet } from "react-router-dom";

const AuthLoggedIn = ({ token, redirectPath = "/", children }) => {
  if (token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default AuthLoggedIn;
