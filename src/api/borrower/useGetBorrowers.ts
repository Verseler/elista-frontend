import { useQuery } from '@tanstack/react-query'
import axios from '@/api/axiosConfig';
import type { BorrowerWithStats } from '@/types';

export const useGetBorrowers = () => {
  return useQuery({
    queryKey: ['borrowers'],
    queryFn: () => axios.get<BorrowerWithStats[]>("borrowers")
      .then(res => {
        if(res.status === 200) {
          return res.data;
        }
      })
      .catch(error => { throw error })
  });
}