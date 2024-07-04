"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  BankIcon,
  BitcoinBagIcon,
  CreditCardIcon,
  SmartPhone01Icon,
} from "hugeicons-react";
import React, { useState } from "react";
import DebitCreditCard from "./DebitCreditCard";
import MobileMoneyDeposit from "./MobileMoneyDeposit";
import BankTransferWallet from "./BankTransferWallet";
import CryptoCurrencyWallet from "./CryptoCurrencyWallet";

const DepositFundWallet = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("debitCreditCard");

  const handlePaymentMethodChange = (value) => {
    setSelectedPaymentMethod(value);
  };

  return (
    <div className="flex flex-col p-4 mt-3 max-sm:p-2">
      {/* HEADING */}
      <div className="flex flex-col">
        <h1 className="font-semibold">Payment Method</h1>
        <p className="text-gray-400 text-sm">Choose your payment method</p>
      </div>
      {/* GROUP RADIO BUTTONS */}
      <div className="mt-4">
        <RadioGroup
          defaultValue={selectedPaymentMethod}
          className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-sm:gap-2 max-lg:grid-cols-2 max-lg:gap-4"
        >
          <label
            htmlFor="debitCreditCard"
            className={`flex items-center justify-between bg-white p-6 rounded-xl border ${
              selectedPaymentMethod === "debitCreditCard"
                ? "border-main-yellow"
                : "text-gray-400"
            }`}
            onClick={() => handlePaymentMethodChange("debitCreditCard")}
          >
            <CreditCardIcon size={20} />
            <Label htmlFor="debitCreditCard">Credit & Debit Card</Label>
            <RadioGroupItem value="debitCreditCard" id="debitCreditCard" />
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
          <label
            htmlFor="bankTransfer"
            className={`flex items-center justify-between bg-white p-6 rounded-xl border ${
              selectedPaymentMethod === "bankTransfer"
                ? "border-main-yellow"
                : "text-gray-400"
            }`}
            onClick={() => handlePaymentMethodChange("bankTransfer")}
          >
            <BankIcon size={20} />
            <Label htmlFor="bankTransfer">Bank Transfer</Label>
            <RadioGroupItem value="bankTransfer" id="bankTransfer" />
          </label>
          <label
            htmlFor="cryptoCurrency"
            className={`flex items-center justify-between bg-white p-6 rounded-xl border ${
              selectedPaymentMethod === "cryptoCurrency"
                ? "border-main-yellow"
                : "text-gray-400"
            }`}
            onClick={() => handlePaymentMethodChange("cryptoCurrency")}
          >
            <BitcoinBagIcon size={20} />
            <Label htmlFor="cryptoCurrency">CryptoCurrency</Label>
            <RadioGroupItem value="cryptoCurrency" id="cryptoCurrency" />
          </label>
        </RadioGroup>
      </div>

      <div className="mt-6">
        {selectedPaymentMethod === "debitCreditCard" && <DebitCreditCard />}

        {/* MOBILE SECTION */}
        {selectedPaymentMethod === "mobileMoney" && <MobileMoneyDeposit />}

        {selectedPaymentMethod === "bankTransfer" && <BankTransferWallet />}

        {/* CRYPTO SECTION */}
        {selectedPaymentMethod === "cryptoCurrency" && <CryptoCurrencyWallet />}
      </div>
    </div>
  );
};

export default DepositFundWallet;
