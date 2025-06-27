import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from '@/api/axiosConfig';
import type { PaymentForm } from '@/types';
import type { AxiosError } from 'axios';
import { toast } from 'sonner';

type PaymentFormResponse = {
  errors: {
      amount?: string;
    notes?: string;
  };
}

export const usePayment = (borrowerId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (form: PaymentForm) => axios.post<PaymentForm>("payment", form)
      .then(res => {
        if(res.status === 200) return res.data;
      })
      .catch(error => { 
        const serverErrors = (error as AxiosError<PaymentFormResponse>).response?.data.errors;

        if(serverErrors) {
          throw {
             amount: serverErrors.amount?.[0] ?? undefined,
              notes: serverErrors.notes?.[0] ?? undefined,
          }
        }

        throw error;
       }),
    onSuccess: () => {
      if(borrowerId) {
        queryClient.invalidateQueries({
          queryKey: ['borrower'],
        });
      }

      toast("Successfully record payment", {
        position: 'top-center',
        className: '!border !border-green-500 !bg-green-50 !text-green-700',
      });
    }
  });
}