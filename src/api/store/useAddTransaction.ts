import { useMutation } from '@tanstack/react-query'
import axios from '@/api/axiosConfig';
import type { TransactionForm, TransactionFormErrors } from '@/types';
import { useNavigate } from 'react-router';
import { useAuth } from '@/hooks/useAuth';
import type { AxiosError } from 'axios';

type AddTransactionResponse = {
  errors: TransactionFormErrors;
}

export const useAddTransaction = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return useMutation({
    mutationFn: (form: TransactionForm) => axios.post<TransactionForm>("transaction", form)
      .then(res => {
        if(res.status === 200) return res.data;
      })
      .catch(error => { 
        const serverErrors = (error as AxiosError<AddTransactionResponse>).response?.data.errors;

        if(serverErrors) {
          const errors = {
             borrower_id: serverErrors.borrower_id?.[0] ?? undefined,
              due_date: serverErrors.due_date?.[0] ?? undefined,
          }

          throw errors;
        }

        throw error;
       }),
    onSuccess: () => {
      //Redirect to Borrower Detail page
      if(user) {
        navigate(`/store-owner/borrowers/${user.id}`);
      }
    }
  });
}