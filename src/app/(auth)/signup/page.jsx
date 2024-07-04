"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import withAuthRedirect from "@/lib/withAuthRedirect";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const router = useRouter();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleContinue = (path) => {
    if (isChecked) {
      router.push(path);
    } else {
      toast.error("You must agree to the terms and conditions to continue.");
    }
  };

  return (
    <div className="w-full overflow-y-auto h-full">
      <Toaster />
      <div className="grid grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-1">
        <div className="flex flex-col">
          <div className="-ml-6">
            <Image
              src="/img/logo_dark.png"
              width={182}
              height={182}
              alt="Logo"
            />
          </div>

          <div className="flex flex-col my-8 max-sm:my-4">
            <h1 className="text-3xl font-bold max-sm:text-2xl">
              Get started with Winvo!
            </h1>
            <p className="text-gray-700 mt-2 max-sm:text-sm">
              Thousands of recruitment businesses and consultancies choose WINVO
              because, unlike traditional banking institutions, we offer a
              seamless and user-friendly experience, with support available
              whenever you need it.
            </p>
            <p className="text-gray-700 max-sm:text-sm">
              Provide us with your information, and we{"'"}ll guide you through
              our platform and secure funding quickly.
            </p>
          </div>

          <div className="flex justify-between items-center max-sm:flex-col max-sm:space-y-4 max-sm:-ml-12">
            <div className="text-gray-500">
              <h1 className="font-semibold text-black text-lg mb-2">
                Borrowers Benefits
              </h1>
              <ul className="list-disc px-6 max-sm:text-sm">
                <li>100% of your invoice profit</li>
                <li>No concentration limits</li>
                <li>No all-turnover agreement</li>
                <li>No reserves</li>
                <li>No liersonal guarantees</li>
                <li>No intro, exit, or additional fees</li>
                <li>No long contracts</li>
                <li>Bad debt protection included</li>
                <li>Simple process</li>
              </ul>
            </div>

            <div className="text-gray-500">
              <h1 className="font-semibold text-black text-lg mb-2">
                Investors Benefits
              </h1>
              <ul className="list-disc px-6 max-sm:text-sm">
                <li>100% of your invoice profit</li>
                <li>No concentration limits</li>
                <li>No all-turnover agreement</li>
                <li>No reserves</li>
                <li>No liersonal guarantees</li>
                <li>No intro, exit, or additional fees</li>
                <li>No long contracts</li>
                <li>Bad debt protection included</li>
                <li>Simple process</li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-2 items-center mt-8">
            <Checkbox
              id="terms"
              className="border border-gray-200"
              checked={isChecked}
              onCheckedChange={handleCheckboxChange}
            />
            <label
              htmlFor="terms"
              className="text-gray-500 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Agree to our{" "}
              <span className="text-main-yellow font-bold">Terms</span> and{" "}
              <span className="text-main-yellow font-bold">Conditions</span>
            </label>
          </div>

          <div className="flex space-x-4 items-center mt-8 max-sm:flex-col max-sm:justify-center max-sm:space-y-4 max-sm:space-x-0">
            <Button
              size="lg"
              className="font-bold max-sm:w-full"
              onClick={() => handleContinue("/signup/borrower")}
            >
              Continue as borrower
            </Button>
            <Button
              size="lg"
              className="font-bold bg-main-black text-white hover:bg-white hover:text-main-black duration-300 hover:border hover:border-main-black max-sm:w-full"
              onClick={() => handleContinue("/signup/investor")}
            >
              Continue as investor
            </Button>
          </div>

          <div className="mt-6">
            <div className="flex items-center space-x-2 text-sm max-sm:justify-center">
              <p className="text-gray-500">Already have an account?</p>
              <Link
                href="/signin"
                className="font-semibold underline hover:text-main-yellow duration-300"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthRedirect(SignUp);
