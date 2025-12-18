import React from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { loading, signIn, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) return <LoadingSpinner />;
  const from = location.state || "/";
  if (user) return <Navigate to={from} replace={true} />;
  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signIn(email, password);
      toast.success("Login Successful");
      reset();
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err?.message);
      setLoading(false);
      reset();
      navigate("/login");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
            <Helmet>
              <title>Log In</title>
            </Helmet>
      <div className="flex flex-col max-w-md md:min-w-[400px] p-6 rounded-md sm:p-10 bg-gray-50 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
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
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>

        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/signup"
            state={from}
            className="hover:underline hover:text-primary text-gray-600"
          >
            Sign Up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default LogIn;
