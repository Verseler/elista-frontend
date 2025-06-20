import { useState, type PropsWithChildren } from "react";
import { AuthContext } from "@/hooks/useAuth";
import type { User } from "@/types";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const userLocallyStored = localStorage.getItem("user");
  const [user, setUser] = useState<User | null>(
    userLocallyStored && JSON.parse(userLocallyStored)
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("token")
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
