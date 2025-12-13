
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useSecureAxios';
import useAuth from './useAuth';

const useChefID = () => {
  const { user, loading } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data: chefID="", isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['chefID', user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/user/chefID`)
      return result.data.chefID
    },
  })
  return [chefID, isRoleLoading]
}

export default useChefID
