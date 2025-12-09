import { useQuery } from "@tanstack/react-query"
import useAuth from "../../../hooks/useAuth"
import useRole from "../../../hooks/useRole"
import useAxiosSecure from "../../../hooks/useSecureAxios"



const Profile = () => {
  const { user } = useAuth()
  const [role] = useRole()
    const secureAxios=useAxiosSecure()
    const { data: userData={}  } = useQuery({
    queryKey: ['user',user],
    queryFn: async () => {
      const result = await secureAxios('/user')
      return result.data
    },
  })

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
        <div
          alt='cover photo'
         
          className='w-full bg-orange-500 mb-4 rounded-t-lg h-56'
        />
        <div className='flex flex-col items-start    p-4 -mt-23'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-2 object-cover rounded-full h-32 w-32  border-3 shadow-lg border-gray-300 '
            />
          </a>

      
          {/* <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user?.uid}
          </p> */}

        </div>
        
        <div className="mx-10">
<div >
              <h2 className="text-3xl font-bold"> {user?.displayName}</h2>
              <p className="my-2 text-gray-500">{user?.email}</p>
              <div className="flex gap-6">
                <div className="bg-orange-300 text-orange-700 rounded-full text-center px-3 py-1 ">
                    {role}
                </div>
                <div className="bg-lime-300 text-lime-700 rounded-full text-center px-3 py-1 ">
                    {userData.status}
                </div>
              
              </div>
          </div>

                <div className='w-full pb-10  mt-4 rounded-lg'>
            <div className='flex flex-col sm:flex-row flex-wrap items-stretch justify-between text-sm gap-3 text-gray-600 '>
                <div className="bg-gray-100 px-2 py-5 flex-1 rounded-xl">
                    <h3 className="text-gray-500">Address</h3>
                    <span className="text-black">  {userData.address}</span>
                  
                </div>

              <div className="flex flex-col flex-1">
                <button className='btn btn-outline btn-primary  px-10 py-1 rounded-lg text-orange-600 cursor-pointer hover:bg-orange-100 block mb-2'>
                  Update Profile
                </button>
                <button className='btn btn-outline btn-primary  px-10 py-1 rounded-lg text-orange-600 cursor-pointer hover:bg-orange-100 block mb-1'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
          
        



    
      </div>
    </div>
  )
}

export default Profile
