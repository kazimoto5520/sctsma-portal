"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCardIcon, SmartPhone01Icon } from "hugeicons-react";
import React, { useState } from "react";
import BankWithdraw from "./BankWithdraw";
import MobileMoneyWithdraw from "./MobileMoneyWithdraw";

const WithdrawFundWallet = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("bankWithdraw");

  const handlePaymentMethodChange = (value) => {
    setSelectedPaymentMethod(value);
  };

  return (
    <div className="flex flex-col mt-3 p-4 max-sm:p-2">
      <div className="flex flex-col">
        <h1 className="font-semibold">Choose Payment Method</h1>
        <p className="text-gray-400 text-sm">
          Winvo accept all major payments methods
        </p>
      </div>

      <div className="mt-4">
        <RadioGroup
          defaultValue={selectedPaymentMethod}
          className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-sm:gap-2 max-lg:grid-cols-2 max-lg:gap-4"
        >
          <label
            htmlFor="bankWithdraw"
            className={`flex items-center justify-between bg-white p-6 rounded-xl border ${
              selectedPaymentMethod === "bankWithdraw"
                ? "border-main-yellow"
                : "text-gray-400"
            }`}
            onClick={() => handlePaymentMethodChange("bankWithdraw")}
          >
            <CreditCardIcon size={20} />
            <Label htmlFor="bankWithdraw">Bank Withdraw</Label>
            <RadioGroupItem value="bankWithdraw" id="bankWithdraw" />
          </label>
          <label
            htmlFor="mobileMoney"
            className={`flex items-center justify-between bg-white p-6 rounded-xl border ${
              selectedPaymentMethod === "mobileMoney"
                ? "border-main-yellow"
                : "text-gray-400"
            }`}
            onClick={() => handlePaymentMethodChange("mobileMoney")}
          >
            <SmartPhone01Icon size={20} />
            <Label htmlFor="mobileMoney">Mobile Money</Label>
            <RadioGroupItem value="mobileMoney" id="mobileMoney" />
          </label>
        </RadioGroup>
      </div>

      {selectedPaymentMethod === "bankWithdraw" && <BankWithdraw />}

      {selectedPaymentMethod === "mobileMoney" && <MobileMoneyWithdraw />}
    </div>
  );
};

export default WithdrawFundWallet;
