import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import AppLogo from "../ui/app-logo";

export default function GuestHeader() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          <AppLogo />

          <div className="ml-auto space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button className="bg-primary-600 hover:bg-primary-700" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
