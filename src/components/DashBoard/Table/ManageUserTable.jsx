import React from "react";
import { ShoppingBag, UserLock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import toast from "react-hot-toast";

const ManageUserTable = () => {

    const {user}=useAuth();
    const axiosSecure=useAxiosSecure()
    const {data:usersList}=useQuery({
        queryKey:["usersList",user],
        queryFn: async()=>{
            const result =await axiosSecure("/users")
            return result.data;
        }
    })

    const makeFraud=(id)=>{
        axiosSecure.patch(`/user/makeFraud?id=${id}`)
        .then(res=>{
            if(res.data.modifiedCount)
            {
                toast.success("User marked as Fraud successfully.")
            }
        })

    }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-300">
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
                usersList.map(user=><tr key={user._id} className="bg-gray-50 hover:bg-orange-50">
              <td>
                <h2 className="text-lg font-semibold ">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
              </td>
              <td>{user.role}</td>
              <td ><span className={`${user.status==="Active"?"bg-green-200  text-green-900":" bg-red-400 "} px-3 py-2 rounded-full font-semibold `}>{user.status}</span></td>
              <td>{user.role === "Admin" || <button disabled={user.status ==="Fraud"} onClick={()=>{
                makeFraud(user._id)
              }} className={`bg-red-200 hover:bg-red-300 cursor-pointer px-3 py-2 rounded-full text-red-800 font-semibold disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed`}> Make fraud</button>}</td>
            </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUserTable;
