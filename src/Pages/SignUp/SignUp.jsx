import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { imageUpload } from "../../Utils/Utility";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import useAxios from "../../hooks/useAxios";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const [passError, setPassError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const Axios = useAxios();
  const onSubmit = async (data) => {
    const { name, image, email, password, Cpassword, address } = data;
    setLoading(true);
    if (password !== Cpassword) {
      setPassError(true);
      return;
    }
    setPassError(false);
    const imageFile = image[0];
    try {
      const imageURL = await imageUpload(imageFile);

      await createUser(email, password);
      await updateUserProfile(name, imageURL);
      const userData = {
        name,
        email,
        address,
        photoURL: imageURL,
      };
    await Axios.post("/user", userData);
   
      reset();
      toast.success("Signup Successful");
      navigate("/");
    } catch (err) {
      if (err.message === "Firebase: Error (auth/email-already-in-use).")
        toast.error("Email already in use");
      else toast.error(err.message);
    }
    setLoading(false);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
            <Helmet>
              <title>Sign Up</title>
            </Helmet>
      <div className="flex flex-col max-w-md md:min-w-[400px] p-6 rounded-md sm:p-10 bg-gray-50 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-500">Welcome to ChefLocalBazaar</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-200 bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
                {...register("name", {
                  required: "Name is required",
                  maxLength: {
                    value: 40,
                    message: "Name cannot be too long",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Image */}
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Profile Image
              </label>
              <input
                name="image"
                type="file"
                id="image"
                accept="image/*"
                className="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-lime-50 file:text-lime-700
      transition-all
      hover:file:bg-orange-100
      bg-gray-100 border border-dashed border-orange-300 rounded-md cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400
      py-2"
                {...register("image")}
              />
              <p className="mt-1 text-xs text-gray-400">
                PNG, JPG or JPEG (max 2MB)
              </p>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-200 bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="address" className="block mb-2 text-sm">
                Address
              </label>
              <textarea
                type="text"
                id="address"
                placeholder="Enter your address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-200 bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
                {...register("address", {
                  required: "Address is required",
                })}
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                autoComplete="new-password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-200 bg-gray-100 text-gray-900"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Confirm password
                </label>
              </div>
              <input
                type="password"
                autoComplete="new-password"
                id="Cpassword"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-orange-200 bg-gray-100 text-gray-900"
                {...register("Cpassword", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.Cpassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {passError && (
              <span className="text-red-500 text-sm">
                {" "}
                Passwords do not match
              </span>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>

        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-primary text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
