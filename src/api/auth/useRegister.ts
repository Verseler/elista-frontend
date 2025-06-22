import { useAuth } from '@/hooks/useAuth';
import type { RegisterForm, User } from '@/types';
import { useMutation } from '@tanstack/react-query';
import axios from '@/api/axiosConfig';
import type { AxiosError } from 'axios';

type RegisterErrorResponse = {
  errors: {
     // Store Owner Info
  name?: string
  email?: string
  phone?: string
  password?: string
  password_confirmation?: string

  // Store Info
  store_name?: string
  store_image?: string
  store_location?: string
  }
}

type RegisterResponse = {
  token: string;
  user: User
}

export const useRegister = () => {
  const { setUser, setIsAuthenticated } = useAuth();

  return useMutation({
    mutationFn: (form: RegisterForm) => axios.post<RegisterResponse>("/register/store-owner", form)
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
          const serverErrors = (error as AxiosError<RegisterErrorResponse>).response?.data.errors;

          if (serverErrors) {
            throw {
              name: serverErrors.name?.[0] ?? undefined,
              email: serverErrors.email?.[0] ?? undefined,
              password: serverErrors.password?.[0] ?? undefined,
              phone: serverErrors.phone?.[0] ?? undefined,
              password_confirmation: serverErrors.password_confirmation?.[0] ?? undefined,
              store_name: serverErrors.store_name?.[0] ?? undefined,
              store_image: serverErrors.store_image?.[0] ?? undefined,
              store_location: serverErrors.store_location?.[0] ?? undefined,
            };
          }
    
          throw error;
        }),
  });
}