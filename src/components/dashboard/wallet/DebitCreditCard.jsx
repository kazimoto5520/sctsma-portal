"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";

const DebitCreditCard = () => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-1">
      {/* PAYMENT FORM */}
      <form
        onSubmit={handleFormSubmit}
        className="bg-white rounded-xl shadow-md p-6 max-sm:p-4"
      >
        <div className="flex flex-col">
          <p className="text-sm text-gray-400">
            Winvo accept all major credit and debit cards
          </p>

          {/* PAYMENT METHOD LOGO */}
          <div className="flex space-x-4 items-center my-4 border-b pb-4">
            {["visa-logo.png", "amex-logo.png", "mastercard-logo.png"].map(
              (logo, index) => (
                <div
                  key={index}
                  className="w-16 h-8 rounded-sm border shadow-sm overflow-hidden transform transition-transform duration-200 hover:scale-105"
                >
                  <Image
                    src={`/img/wallet/${logo}`}
                    width={1280}
                    height={640}
                    alt={logo.split("-")[0]}
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            )}
          </div>

          {/* PAYMENT METHOD INPUTS */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-3">
              <div>
                <Label className="text-gray-600">Amount</Label>
                <Input
                  type="number"
                  min={0}
                  placeholder="Enter Amount"
                  className="bg-white placeholder:text-xs"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-4 gap-4 pb-2">
                <Button
                  size="sm"
                  className="text-xs text-gray-600 bg-main-gray border hover:bg-gray-100"
                  onClick={() => handleButtonClick(1000000)}
                >
                  TZS 1M
                </Button>
                <Button
                  size="sm"
                  className="text-xs text-gray-600 bg-main-gray border hover:bg-gray-100"
                  onClick={() => handleButtonClick(5000000)}
                >
                  TZS 5M
                </Button>
                <Button
                  size="sm"
                  className="text-xs text-gray-600 bg-main-gray border hover:bg-gray-100"
                  onClick={() => handleButtonClick(10000000)}
                >
                  TZS 10M
                </Button>
                <Button
                  size="sm"
                  className="text-xs text-gray-600 bg-main-gray border hover:bg-gray-100"
                  onClick={() => handleButtonClick(20000000)}
                >
                  TZS 20M
                </Button>
              </div>
            </div>

            <div className="flex flex-col">
              <Label className="text-gray-600 mb-1">Card Number</Label>
              <div className="">
                <Input
                  type="text"
                  placeholder="**** **** **** **** ****"
                  className="bg-white placeholder:text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1 max-sm:grid-cols-1 max-sm:gap-2">
              <div>
                <Label className="text-gray-600">Expiry Date</Label>
                <Input
                  type="text"
                  placeholder="MM/YY"
                  className="bg-white placeholder:text-xs"
                />
              </div>

              <div>
                <Label className="text-gray-600">Security Code (CVC/CVV)</Label>
                <Input
                  type="text"
                  placeholder="CVC/CVV"
                  className="bg-white placeholder:text-xs"
                />
              </div>
            </div>

            <div className="flex items-center py-2 space-x-2">
              <Checkbox id="terms" className="border border-gray-200" />
              <label
                htmlFor="terms"
                className="text-gray-400 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Save card details
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="border" size="sm">
                Cancel
              </Button>
              <Button className="" size="sm">Confirm Deposit</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DebitCreditCard;
