import { Navigate, Outlet } from "react-router-dom";

const AuthLogin = ({ token, redirectPath = "/login", children }) => {
  console.log("test" + token);

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default AuthLogin;
