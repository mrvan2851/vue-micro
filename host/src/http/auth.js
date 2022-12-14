import { useAxiosStore } from "@/stores/axios";
export const useApi = () => {
  const axios = useAxiosStore()
  return {
    fetchUser() {
      return axios.get({
        url: '/auth/user-info'
      })
    },
    login(data) {
      return axios.post({
        url : '/auth/login',
        data 
      });
    },
  }
}