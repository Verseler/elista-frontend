import type { User, LoginForm } from '@/types';
import { useAuth } from '@/hooks/useAuth';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import axios from '@/api/axiosConfig';

type LoginErrorResponse = {
  errors: {
    email?: string[];
    password?: string[];
  }
}

type LoginResponse = {
  token: string;
  user: User,
}

export const useLogin = () => {
  const { setUser, setIsAuthenticated } = useAuth();

  return useMutation({
    mutationFn: (form: LoginForm) => axios.post<LoginResponse>("/login", form)
    .then(res => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setIsAuthenticated(true);
        setUser(res.data.user);

        return res.data;
      }
      
      throw new Error("Something went wrong!");
    })
    .catch(error => {
      const serverErrors = (error as AxiosError<LoginErrorResponse>).response?.data.errors;
        
      if (serverErrors) {
        throw {
          email: serverErrors.email?.[0] ?? undefined,
          password: serverErrors.password?.[0] ?? undefined,
        };
      }

      throw error;
    }),
  });
}
