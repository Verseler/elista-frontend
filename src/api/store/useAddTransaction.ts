import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/api/axiosConfig';
import type { TransactionForm, TransactionFormErrors } from '@/types';
import type { AxiosError } from 'axios';
import { toast } from 'sonner';

type AddTransactionResponse = {
  errors: TransactionFormErrors;
}

export const useAddTransaction = () => {
  const queryClient = useQueryClient();

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
      queryClient.invalidateQueries({
        queryKey: ['borrowers'],
      });

      toast("Successfully create transaction", {
        position: 'top-center',
        className: '!border !border-green-500 !bg-green-50 !text-green-700',
      });
    }
  });
}