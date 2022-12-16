import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

const PrivateRoute = ({ redirectPath = "/login", children }) => {
  const { state } = useAuth();
  if (!state.isAuthenticated && state.isLoaded) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
