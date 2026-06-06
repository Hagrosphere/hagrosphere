import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectIsAdmin } from "../features/auth/slice/authSlice";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAdmin = useSelector(selectIsAdmin);

  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;
  if (!isAdmin) return <Navigate to="/" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
