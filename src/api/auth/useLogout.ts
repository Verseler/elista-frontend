import { useAuth } from '@/hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import axios from '@/api/axiosConfig';

export const useLogout = () => {
  const { setUser, setIsAuthenticated } = useAuth();
  
  const logout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsAuthenticated(false);
      setUser(null);

      await axios.post("/logout");



    } catch (error) {
      console.error("AuthContext.logout", error);
    } 
  };

  return useMutation({ mutationFn: logout});
}
