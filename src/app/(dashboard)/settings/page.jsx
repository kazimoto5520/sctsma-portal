"use client";

import { GreaterThanIcon } from "hugeicons-react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BusinessDetailsForm from "./BusinessDetailsForm";

const Settings = () => {
  const pathname = usePathname();
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-y-2">
          <div>
            <h1 className="font-bold text-xl">Profile Update</h1>
            <div className="flex items-center space-x-1 text-gray-600 text-sm">
              <h1>Dashboard</h1>
              <GreaterThanIcon size={12} />
              <h1>Settings</h1>
              <GreaterThanIcon size={12} />
              <h1>Profile Update</h1>
            </div>
          </div>
        </div>

        {/* BUSINESS DETAILS && PERSONAL DETAILS */}
        <div className="mt-12">
          <div className="w-full text-sm max-sm:w-full">
            <div className="grid grid-cols-8 gap-3 border-b max-sm:grid-cols-2">
              <Link
                href="/settings"
                className={`pb-2 text-center ${
                  pathname === "/settings"
                    ? "border-b-2 border-gray-800"
                    : "text-gray-400"
                }`}
              >
                <span>Business Details</span>
              </Link>

              <Link
                href="/settings/personal-details"
                className={`pb-2 text-center ${
                  pathname === "/settings/personal-details"
                    ? "border-b-2 border-black"
                    : "text-gray-400"
                }`}
              >
                <span>Personal Details</span>
              </Link>
            </div>
          </div>

          <BusinessDetailsForm />
        </div>
      </div>
    </div>
  );
};

export default Settings;
