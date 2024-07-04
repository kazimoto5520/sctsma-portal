"use client";

import LoadingButtonSpinner from "@/components/dashboard/LoadingButtonSpinner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/lib/hooks";
import { setUser } from "@/lib/redux/userSlice";
import withAuthRedirect from "@/lib/withAuthRedirect";
import { loginUser } from "@/services/userService";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


function SignIn() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // FORM SUBMISSION STARTS HERE !!!!!
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("data", data);
      const useDetails = data?.data?.user;
      const accessToken = data?.data?.accessToken;
      
      Cookies.set("next-auth.session-token", data?.data?.accessToken, {expires: 1});
      dispatch(setUser({ user: useDetails, accessToken}));
      toast.success("Login successful");
      router.push("/");
    },
    onError: (error) => {
      console.error("Error login user: ", error);
      if (error?.validationErrors) {
        toast.error(error?.validationErrors[0]);
      } else {
        toast.error(error?.error);
      }
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="w-full overflow-y-auto h-full">
      <Toaster />
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2">
        <div className="flex flex-col">
        
          <div className="flex flex-col my-8 max-sm:my-4">
            <h1 className="text-3xl font-bold max-sm:text-2xl">
              Welcome back to SCTSMA!
            </h1>
            <p className="text-gray-700 mt-2 max-sm:text-sm">
              Login to your dashboard
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col my-4"
          >
            <div className="flex flex-col space-y-2 p-1">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Username
              </label>
              <Input
                type="text"
                {...register("username", { required: "Username is required" })}
                placeholder="Enter your username"
                className="p-6 bg-main-gray"
                required
              />
            </div>

            <div className="flex flex-col space-y-2 mt-6 p-1 max-sm:mt-3">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="************"
                  className="p-6 bg-main-gray"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  className="absolute inset-y-0 right-0 flex items-center text-center py-6 px-3 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEye size={18} className="text-gray-500" />
                  ) : (
                    <FaEyeSlash size={18} className="text-gray-500" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm mt-4 max-sm:mt-2">
              <div className="flex space-x-2 items-center">
                <Checkbox id="remember" className="border border-gray-200" />
                <label
                  htmlFor="remember"
                  className="text-gray-500 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>

              <div className="text-gray-500">
                <Link
                  href="#"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:underline duration-300"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="mt-8 w-full">
              <Button
                type="submit"
                size="lg"
                className="font-semibold w-full p-6"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <div className="flex space-x-2 items-center">
                    <LoadingButtonSpinner />
                    <span>Sign In</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </div>

            {/* <div className="mt-6">
              <div className="flex justify-center items-center space-x-2 text-sm">
                <p className="text-gray-500">Don’t have an account?</p>
                <Link
                  href="/signup"
                  className="font-semibold underline hover:text-main-yellow duration-300"
                >
                  Sign Up
                </Link>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default withAuthRedirect(SignIn);
