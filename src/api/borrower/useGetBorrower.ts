import { useQuery } from '@tanstack/react-query'
import axios from '@/api/axiosConfig';
import type { BorrowerWithStats } from '@/types';

export const useGetBorrower = (id: string) => {
  return useQuery({
    queryKey: ['borrower'],
    queryFn: () => axios.get<BorrowerWithStats>(`borrowers/${id}`)
      .then(res => {
        if(res.status === 200) {
          return res.data;
        }
      })
      .catch(error => { throw error }),
  });
}