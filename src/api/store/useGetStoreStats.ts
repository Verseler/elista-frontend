import { useQuery } from '@tanstack/react-query'
import axios from '../axiosConfig';
import type { DashboardStats } from '@/types';

export const useGetStoreStats = () => {
  return useQuery({
    queryKey: ['store-stats'],
    queryFn: () => axios.get<DashboardStats>("store-stats")
      .then(res => {
        if(res.status === 200) {
          return res.data;
        }
      })
      .catch(error => {
        throw error;
      })
  });
}