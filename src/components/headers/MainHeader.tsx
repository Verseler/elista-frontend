import type { PropsWithChildren } from "react";
import AppLogo from "@/components/ui/app-logo";
import Container from "@/components/ui/container";

export default function MainHeader({ children }: PropsWithChildren) {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          <AppLogo />
          <div className="flex items-center space-x-4">{children}</div>
        </div>
      </Container>
    </nav>
  );
}
