import AppLogo from "@/components/ui/app-logo";
import Container from "@/components/ui/container";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLogout } from "@/api/auth/useLogout";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { getNameInitial } from "@/lib/utils";

export default function MainHeader() {
  const { user } = useAuth();
  const { mutate } = useLogout();
  const userName = user?.name || "User";
  const nameInitial = getNameInitial(userName);

  const handleLogout = () => mutate();

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          <AppLogo />
          <div className="flex items-center space-x-4">
            <span className="text-sm capitalize text-gray-700">{userName}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="size-10 cursor-pointer">
                  <AvatarFallback className="bg-primary-100 text-primary-800  font-semibold">
                    {nameInitial}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44">
                <DropdownMenuCheckboxItem
                  onClick={handleLogout}
                  className="text-red-500 bg-red-50"
                >
                  Logout
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </nav>
  );
}
