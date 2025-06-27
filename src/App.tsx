import { Route, Routes } from "react-router";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import StoreOwnerDashboardPage from "@/pages/StoreOwnerDashboardPage";
import BorrowerDashboardPage from "@/pages/BorrowerDashboardPage";
import BorrowerDetailPage from "@/pages/BorrowerDetailPage";
import BorrowerProfilePage from "@/pages/BorrowerProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";
import GuestRoutes from "@/components/auth/GuestRoutes";
import ProtectedRoutes from "@/components/auth/ProtectedRoutes";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<GuestRoutes />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route
          path="borrower"
          element={<ProtectedRoutes allowedRoles={["borrower"]} />}
        >
          <Route index element={<BorrowerDashboardPage />} />
          <Route path="profile" element={<BorrowerProfilePage />} />
        </Route>
        <Route
          path="store-owner"
          element={<ProtectedRoutes allowedRoles={["store_owner"]} />}
        >
          <Route index element={<StoreOwnerDashboardPage />} />
          <Route path="borrowers/:id" element={<BorrowerDetailPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
