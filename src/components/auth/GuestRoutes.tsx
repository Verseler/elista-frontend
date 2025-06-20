import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/hooks/useAuth";

export default function GuestRoutes() {
  const { isAuthenticated, user } = useAuth();
  const role = user?.role;

  if (!isAuthenticated) {
    return <Outlet />;
  }

  if (role === "store_owner") {
    return <Navigate to="store-owner" replace />;
  }

  return <Navigate to="borrower" replace />;
}
