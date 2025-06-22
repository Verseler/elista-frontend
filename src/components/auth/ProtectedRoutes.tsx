import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import type { UserRole } from "@/types";

type ProtectedRouteProps = {
  allowedRoles: UserRole[];
};

export default function ProtectedRoutes({ allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/not-found" replace />;
  }

  return <Outlet />;
}
