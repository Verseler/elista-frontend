import type { BorrowerRegisterForm, User } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '@/api/axiosConfig';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router';


type RegisterErrorResponse = {
  errors: Partial<BorrowerRegisterForm>
}

type RegisterResponse = {
  token: string;
  user: User
}

export const useBorrowerRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (form: BorrowerRegisterForm) => axios.post<RegisterResponse>("/register/borrower", form)
    .then(res => {
          if (res.status === 200) return res.data;

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
            };
          }
    
          throw error;
        }),
    onSuccess: ({ user }) => {
    queryClient.invalidateQueries({
      queryKey: ['borrowers'],
    });

    //Redirect to Borrower Detail page
    navigate(`/store-owner/borrowers/${user.id}`);
  },
  });
}