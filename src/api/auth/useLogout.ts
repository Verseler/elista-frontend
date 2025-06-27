import { useAuth } from '@/hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import axios from '@/api/axiosConfig';

export const useLogout = () => {
  const { setUser, setIsAuthenticated } = useAuth();
  
  const logout = async () => {
    try {
      await axios.post("/logout");

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsAuthenticated(false);
      setUser(null);

    } catch (error) {
      console.error("AuthContext.logout", error);
    } 
  };

  return useMutation({ mutationFn: logout});
}
