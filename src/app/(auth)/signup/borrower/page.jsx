"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/userService";
import toast, { Toaster } from "react-hot-toast";
import { ArrowLeft02Icon } from "hugeicons-react";
import LoadingButtonSpinner from "@/components/dashboard/LoadingButtonSpinner";
import withAuthRedirect from "@/lib/withAuthRedirect";

function SignUpAsBorrower() {
  const router = useRouter();

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
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("User registered successfully: ", data);
      localStorage.setItem("next-auth-otp", data?.data?.otp);
      router.push("/signup/borrower/activate");
    },
    onError: (error) => {
      console.error("Error registering user: ", error);
      if (error.validationErrors) {
        toast.error(error.validationErrors[0]);
      } else {
        toast.error(error.error);
      }
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="w-full overflow-y-auto h-full">
      <Toaster />
      <div className="flex flex-col">
        <div className="flex justify-between items-center max-sm:flex-col">
          <div className="-ml-6">
            <Image
              src="/img/logo_dark.png"
              width={182}
              height={182}
              alt="Logo"
            />
          </div>
        </div>

        <div className="">
          <div
            onClick={() => {
              router.push("/signup");
            }}
            className="flex items-center space-x-2 hover:text-main-yellow hover:cursor-pointer duration-300"
          >
            <ArrowLeft02Icon size={24} className="" />
            <p className="font-semibold underline">Go back</p>
          </div>
        </div>

        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="flex flex-col my-8 max-sm:my-4">
              <h1 className="text-3xl font-bold max-sm:text-2xl">
                Welcome to Winvo!
              </h1>
              <p className="text-gray-700 mt-2 max-sm:text-sm">
                Fill in your account details
              </p>
            </div>

            <div className="flex flex-col my-4">
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <div className="hidden">
                  <Input
                    type="text"
                    {...register("accountType", {
                      required: "Account type is required",
                    })}
                    value="Borrower"
                    placeholder="Enter account type"
                    className="p-6 bg-main-gray"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2 p-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    First name
                  </label>
                  <Input
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    placeholder="Enter your first name"
                    className="p-6 bg-main-gray"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-2 p-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Middle name
                  </label>
                  <Input
                    type="text"
                    {...register("middleName", {
                      required: "Middle name is required",
                    })}
                    placeholder="Enter your middle name"
                    className="p-6 bg-main-gray"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-2 p-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Last name
                  </label>
                  <Input
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    placeholder="Enter your last name"
                    className="p-6 bg-main-gray"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-2 p-1">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email address
                  </label>
                  <Input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="Enter your email"
                    className="p-6 bg-main-gray"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2 mt-4 p-1 max-sm:mt-3">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Business phone number
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    min={0}
                    {...register("contactPhoneNumber", {
                      required: "Business phone number is required",
                    })}
                    placeholder="Enter business phone number"
                    className="py-6 pl-8 bg-main-gray"
                    prefix="Hello"
                    required
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center text-center py-6 px-3">
                    <div className="flex items-center space-x-1">
                      <Image
                        src="/img/tz.png"
                        width={64}
                        height={64}
                        alt="Country flag"
                        className="w-[16px] h-full object-cover px-0"
                      />
                      <div className="w-[1px] h-[12px] bg-gray-400"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-2 mt-4 p-1 max-sm:mt-3">
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

              <div className="text-sm mt-2">
                <div className="text-gray-500">
                  <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 duration-300">
                    Must be at least 8 characters
                  </p>
                </div>
              </div>

              <div className="mt-8 w-full">
                <Button
                  type="submit"
                  size="lg"
                  className="font-semibold w-full p-6"
                  disable={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <div className="flex space-x-2 items-center">
                      <LoadingButtonSpinner />
                      <span>Sign Up</span>
                    </div>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withAuthRedirect(SignUpAsBorrower);
