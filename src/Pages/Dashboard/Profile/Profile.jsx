import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import toast from "react-hot-toast";
import LoadingSpinner from "./../../../components/Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const secureAxios = useAxiosSecure();
  const { data: userData = {}, isLoading } = useQuery({
    queryKey: ["user", user],
    queryFn: async () => {
      const result = await secureAxios("/user");
      return result.data;
    },
  });

  const { _id: id, email, name, photoURl: image, status, chefID } = userData;

  const sendRequest = (type) => {
    const requestData = {
      id: id,
      email,
      name,
      image,
      status,
      requestType: type,
      requestTime: new Date(),
    };

    secureAxios.post("/beAdminOrChef", requestData).then((res) => {
      if (res.data.insertedId) {
        toast.success(
          "Your request has been successfully sent to the admin. Kindly wait while your access is evaluated and approved."
        );
      } else if (res.data.message === "already sent") {
        toast.error(
          "Your request has already been sent to the admin. Please wait for approval."
        );
      }
    });
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  const adminButton = (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <button
        onClick={() => sendRequest("admin")}
        className="btn btn-outline btn-primary w-full   py-1 rounded-lg text-orange-600 cursor-pointer hover:bg-orange-100 block mb-1"
      >
        Be an Admin
      </button>
    </div>
  );

  const chefButton = (
    <>
      <button
        onClick={() => sendRequest("chef")}
        className="btn btn-outline btn-primary w-full  py-1 rounded-lg text-orange-600 cursor-pointer hover:bg-orange-100 block mb-2"
      >
        Be a Chef
      </button>
    </>
  );
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl w-full md:w-4/5 xl:w-3/5">
        <div
          alt="cover photo"
          className="w-full bg-orange-500 mb-4 rounded-t-lg h-56"
        />
        <div className="flex flex-col items-start    p-4 -mt-23">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-2 object-cover rounded-full h-32 w-32  border-3 shadow-lg border-gray-300 "
            />
          </a>
        </div>

        <div className="mx-10">
          <div>
            <div className="flex  w-full justify-between  item-center">
              <h2 className="text-3xl font-bold"> {user?.displayName}</h2>
              {role === "Chef" && (
                <div className="  bg-gray-200 px-2 py-1 rounded-2xl">
                  <h3>CHEF-ID:</h3>
                  <span className="font-semibold ">{chefID}</span>
                </div>
              )}
            </div>
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

          <div className="w-full pb-10  mt-4 rounded-lg">
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-between text-sm gap-3 text-gray-600 ">
              <div className="bg-gray-100 px-2 py-5 flex-1 rounded-xl">
                <h3 className="text-gray-500">Address</h3>
                <span className="text-black"> {userData.address}</span>
              </div>

              {role === "Admin" || (
                <div className="flex flex-col flex-1">
                  {role === "Customer" && (
                    <>
                      <div>{chefButton}</div> <div>{adminButton}</div>
                    </>
                  )}
                  {role === "Chef" && <div>{adminButton}</div>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
