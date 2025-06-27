import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Home, ArrowLeft, Store, AlertTriangle, StoreIcon } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-12">
          <div className="relative mx-auto w-48 h-48 mb-8">
            {/* Main 404 Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl font-bold text-gray-200 select-none">
                404
              </span>
            </div>

            {/* Simple Floating Elements */}
            <div className="absolute top-2 left-2 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <Store className="w-4 h-4 text-primary-600" />
            </div>
            <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-3 h-3 text-yellow-600" />
            </div>
            <div className="absolute bottom-8 left-4 w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xs font-bold">₱</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-500">
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8 bg-transparent"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>

          {user ? (
            <Button
              size="lg"
              className="h-12 px-8 bg-primary-600 hover:bg-primary-700"
              onClick={() =>
                navigate(
                  user.role === "store_owner" ? "/store-owner" : "/borrower"
                )
              }
            >
              <Home className="size-4 mr-2" />
              Dashboard
            </Button>
          ) : (
            <Button
              size="lg"
              className="h-12 px-8 bg-primary-600 hover:bg-primary-700"
              onClick={() => navigate("/")}
            >
              <StoreIcon className="size-4 mr-2" />
              Landing Page
            </Button>
          )}
        </div>

        <div className="mt-16 text-center text-gray-400 text-sm">
          <p>Error 404 - Elista Sari-sari Store Management</p>
        </div>
      </div>
    </div>
  );
}
