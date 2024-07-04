"use client";

import { useAppSelector } from "@/lib/hooks";
import { CustomerSupportIcon } from "hugeicons-react";
import React from "react";

const CustomerIconComponent = () => {
  const userSelector = useAppSelector((state) => state.user.user);
  return (
    <div>
      {userSelector?.accountType === "Investor" && (
        <div className="w-fit rounded-full p-2 shadow-md transition-transform transform hover:scale-110 bg-main-yellow hover:bg-yellow-400 hover:cursor-pointer">
          <CustomerSupportIcon size={24} />
        </div>
      )}
    </div>
  );
};

export default CustomerIconComponent;
