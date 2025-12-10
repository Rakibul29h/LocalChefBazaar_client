import React from "react";
import { CircleCheckBig, CircleX, ShoppingBag, UserLock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const ManageRequestTable = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: usersList = [] } = useQuery({
    queryKey: ["usersList", user],
    queryFn: async () => {
      const result = await axiosSecure("/request");
      return result.data;
    },
  });
  const queryClient = useQueryClient();

  const handleApproved = (user) => {
    const{_id:requestId,id:userId,requestType:type}=user
    axiosSecure.patch(`/approve?requestId=${requestId}&userId=${userId}&type=${type}`)
    .then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Request has been Approved successfully!");

        queryClient.invalidateQueries(["usersList"]);
      }
    });
  };

  const handleRejected = (requestId) => {
    axiosSecure.patch(`/reject?requestId=${requestId}`).then((res) => {
      if (res.data.modifiedCount) {
        toast.success("Request has been rejected successfully!");

        queryClient.invalidateQueries(["usersList"]);
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-300">
              <th>User</th>
              <th>Request Type</th>
              <th>Request Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {usersList.map((user) => (
              <tr key={user._id} className="bg-gray-50 hover:bg-orange-50">
                <td>
                  <h2 className="text-lg font-semibold ">{user.name}</h2>
                  <p className="text-gray-500">{user.email}</p>
                </td>
                <td>
                  <span className="font-bold text-orange-500">
                    {user?.requestType?.toUpperCase()}
                  </span>
                </td>
                <td>
                  <span>
                    {new Date(user.requestTime).toLocaleString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </span>
                </td>
                <td>
                  <span
                    className={`${
                      user.requestStatus === "Approved"
                        ? "bg-green-200  text-green-900"
                        : user.requestStatus === "Rejected"
                        ? "bg-red-200 text-red-600 "
                        : " bg-amber-400 "
                    } px-3 py-2 rounded-full font-semibold `}
                  >
                    {user.requestStatus}
                  </span>
                </td>
                <td>
                  <div className="flex gap-4">
                    <button
                    disabled={user.requestType!=="Pending"}
                      onClick={() => handleApproved(user)}
                      className="bg-green-400 p-1 btn hover:bg-green-600 disabled:bg-gray-200 disabled:cursor-not-allowed"
                    >
                      <CircleCheckBig />
                    </button>
                    <button
                    disabled={user.requestType!=="Pending"}
                      onClick={() => handleRejected(user._id)}
                      className="bg-red-400 p-1 btn hover:bg-red-600 disabled:bg-gray-200 disabled:cursor-not-allowed"
                    >
                      <CircleX />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRequestTable;
