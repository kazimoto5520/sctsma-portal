"use client";

import LoadingButtonSpinner from "@/components/dashboard/LoadingButtonSpinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import withAuthRedirect from "@/lib/withAuthRedirect";
import { activateAccount } from "@/services/userService";
import { useMutation } from "@tanstack/react-query";
import { ArrowLeft02Icon } from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function ActivateAccount() {
  const router = useRouter();
  const [otp, setOtp] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOtp(localStorage.getItem("next-auth-otp"));
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: activateAccount,
    onSuccess: (data) => {
      console.log("User registered successfully: ", data);
      router.push("/signin");
    },
    onError: (error) => {
      console.error("Error registering user: ", error);
      if (error.validationErrors) {
        toast.error(error.validationErrors[0]);
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
              router.push("/signup/borrower");
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
                Verify your Account
              </h1>
              <p className="text-gray-700 mt-2 max-sm:text-sm">
                Insert the code we have sent verification code to your email:{" "}
                {otp ? otp : "-"}
              </p>
            </div>

            <div className="flex flex-col my-4">
              <div className="flex flex-col space-y-2 p-1">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Verification code
                </label>
                <Input
                  type="text"
                  {...register("otp", {
                    required: "Verification code is required",
                  })}
                  placeholder="Enter verification code"
                  className="p-6 bg-main-gray "
                />
                <div className="text-gray-500">
                  <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 duration-300">
                    Didn’t receive the code?{" "}
                    <Link
                      href="#"
                      className="hover:underline text-main-yellow duration-300"
                    >
                      <span className="text-main-yellow font-semibold">
                        Resent Code
                      </span>
                    </Link>
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
                      <span>Verify Me</span>
                    </div>
                  ) : (
                    "Verify Me"
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

export default withAuthRedirect(ActivateAccount);
