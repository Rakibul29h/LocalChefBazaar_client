
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useSecureAxios';
import useAuth from './useAuth';

const useRole = () => {
  const { user, loading } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data: role, isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['role', user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/user/role`)
      return result.data.role
    },
  })
  return [role, isRoleLoading]
}

export default useRole
