import { StoreIcon } from "lucide-react";
import { Link } from "react-router";

export default function AppLogo() {
  return (
    <Link to="/">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
          <StoreIcon className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900">Elista</span>
      </div>
    </Link>
  );
}
