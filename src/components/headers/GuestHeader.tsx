import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import AppLogo from "@/components/ui/app-logo";
import { useAuth } from "@/hooks/useAuth";
import type { UserRole } from "@/types";

export default function GuestHeader() {
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          <AppLogo />

          <div className="ml-auto space-x-2">
            <GuestHeaderNav
              isAuthenticated={isAuthenticated}
              role={user?.role || "borrower"}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}

type GuestHeaderNavProps = {
  isAuthenticated: boolean;
  role: UserRole;
};

function GuestHeaderNav({ isAuthenticated, role }: GuestHeaderNavProps) {
  if (!isAuthenticated) {
    return (
      <>
        <Button variant="ghost" asChild>
          <Link to="/login">Sign In</Link>
        </Button>
        <Button className="bg-primary-600 hover:bg-primary-700" asChild>
          <Link to="/register">Get Started</Link>
        </Button>
      </>
    );
  }

  if (role === "store_owner") {
    return (
      <Button className="bg-primary-600 hover:bg-primary-700" asChild>
        <Link to="/store-owner">Dashboard</Link>
      </Button>
    );
  }

  //borrower
  return (
    <Button className="bg-primary-600 hover:bg-primary-700" asChild>
      <Link to="/borrower">Dashboard</Link>
    </Button>
  );
}
