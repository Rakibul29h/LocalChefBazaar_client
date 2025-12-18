import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import CreateMealForm from "../../DashBoard/Form/CreateMealForm";
import UpdateMealForm from "../../DashBoard/Form/UpdateMealForm";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useSecureAxios";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";

export default function ReviewModal({ isOpen,name, setIsOpen, id }) {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

    const queryClient = useQueryClient();
const axiosSecure=useAxiosSecure();
  const {
    isPending,
    mutateAsync,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (payload) =>
      await axiosSecure.post(`/review`, payload),
    onSuccess: (data) => {
      if(data.data.insertedId)
      {
          toast.success("Review added successfully");
          setIsOpen(false)
          reset();
      }
       queryClient.invalidateQueries( ["review", user]);
       queryClient.invalidateQueries(["meals", user, id]);
      
      mutationReset();
      
    }
  });
  const onSubmit = async(data) => {
    const reviewData={
        foodId:id,
        rating:data.rating,
        comments:data.comments,
        reviewerName:user?.displayName,
        reviewerEmail:user?.email,
        reviewerImage:user?.photoURL,
        mealName:name,
        date:new Date()
    }

    await mutateAsync(reviewData)
   
  };
  if(isPending) return <LoadingSpinner></LoadingSpinner>
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full  bg-[#3130306e] items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-lg rounded-xl bg-white p-6 shadow-sm duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-2xl font-medium text-orange-500"
              >
                Give Review
              </DialogTitle>
              <div className="my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Rating */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text font-semibold text-slate-700">
                        Meal Name
                      </span>
                    </label>
                    <input
                      type="text"
                      min="0"
                      max="5"
                      defaultValue={name}
                      readOnly
                      className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                      {...register("name",{required:"Rating is required!"})}
                    />
       
                  </div>
                  <div className="form-control mt-5 w-full">
                    <label className="label">
                      <span className="label-text font-semibold text-slate-700">
                        Rating
                      </span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="5"
                      defaultValue={5}
                      className={`input input-bordered w-full focus:outline-none focus:border-orange-500
                  }`}
                      {...register("rating",{required:"Rating is required!"})}
                    />
                    {errors.rating && (
                  <span className="text-red-500">
                    {errors.rating.message}
                  </span>
                )}
                  </div>
                  <div className="form-control w-full mt-6">
                    <label className="label">
                      <span className="label-text font-semibold text-slate-700">
                        Comments
                      </span>
                    </label>
                    <br />
                    <textarea
                      className="textarea textarea-bordered h-24 w-full focus:outline-none focus:border-orange-500"
                      placeholder="Write Your Comments here"
                      {...register("comments",{required:"Comments is required!"})}
                    ></textarea>
            {errors.comments && (
                  <span className="text-red-500">
                    {errors.comments.message}
                  </span>
                )}{
                        
                    }
                  </div>
                  <div className="my-5">
                    <button type="submit" className="btn btn-primary rounded-full" >Add</button>
                  </div>
                </form>
              </div>

           <div className="relative">
               <div className=" absolute -top-16 right-0 " >
                
                <button className="btn btn-outline btn-error rounded-full hover:text-white" onClick={() => setIsOpen(false)}>Cancel</button>
              </div>
           </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
