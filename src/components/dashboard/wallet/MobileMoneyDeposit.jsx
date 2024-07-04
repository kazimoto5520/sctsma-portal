"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft02Icon } from "hugeicons-react";
import Image from "next/image";
import React, { useState } from "react";

const MobileMoneyDeposit = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedMobileNetwork, setSelectedMobileNetwork] = useState("");

  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  const handleMobileNetworkChange = (value) => {
    setSelectedMobileNetwork(value);
  };
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 max-lg:grid-cols-1">
      <div className="bg-white rounded-xl shadow-md p-6 max-sm:p-4">
        {selectedMobileNetwork === "" && (
          <div className="flex flex-col">
            <h1 className="font-medium mb-4">Select your network</h1>

            <div className="grid grid-cols-5 gap-2">
              <div className="w-16 h-8 rounded-sm border shadow-sm overflow-hidden transform transition-transform duration-200 hover:scale-105">
                <Image
                  src="/img/wallet/mpesa-logo.png"
                  width={1280}
                  height={640}
                  alt="mpesa"
                  className="hover:cursor-pointer"
                  onClick={() => handleMobileNetworkChange("mpesa")}
                />
              </div>
              <div className="w-16 h-8 rounded-sm border shadow-sm overflow-hidden transform transition-transform duration-200 hover:scale-105">
                <Image
                  src="/img/wallet/tigopesa-logo.png"
                  width={1280}
                  height={640}
                  className="hover:cursor-pointer"
                  onClick={() => handleMobileNetworkChange("tigopesa")}
                  alt="tigopesa"
                />
              </div>
              <div className="w-16 h-8 rounded-sm border shadow-sm overflow-hidden transform transition-transform duration-200 hover:scale-105">
                <Image
                  src="/img/wallet/airtel-logo.png"
                  width={1280}
                  height={640}
                  className="hover:cursor-pointer"
                  onClick={() => handleMobileNetworkChange("airtel")}
                  alt="airtel"
                />
              </div>
              <div className="w-16 h-8 rounded-sm border shadow-sm overflow-hidden transform transition-transform duration-200 hover:scale-105">
                <Image
                  src="/img/wallet/halopesa-logo.png"
                  width={1280}
                  height={640}
                  className="hover:cursor-pointer"
                  onClick={() => handleMobileNetworkChange("halopesa")}
                  alt="halopesa"
                />
              </div>
              <div className="w-16 h-8 rounded-sm border shadow-sm overflow-hidden transform transition-transform duration-200 hover:scale-105">
                <Image
                  src="/img/wallet/selcom-logo.png"
                  width={1280}
                  height={640}
                  className="hover:cursor-pointer"
                  onClick={() => handleMobileNetworkChange("selcom")}
                  alt="selcom"
                />
              </div>
            </div>
          </div>
        )}

        {selectedMobileNetwork === "mpesa" && (
          <div className="flex flex-col">
            <div className="flex justify-between items-center border-b pb-4">
              <ArrowLeft02Icon
                size={24}
                onClick={() => handleMobileNetworkChange("")}
                className="hover:cursor-pointer"
              />
              <div className="w-16 h-8 rounded-sm border shadow-sm overflow-hidden transform transition-transform duration-200 hover:scale-105">
                <Image
                  src="/img/wallet/mpesa-logo.png"
                  width={1280}
                  height={640}
                  alt="mpesa"
                />
              </div>
            </div>

            {/* MOBILE INPUTS */}
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1 mt-4 p-1 max-sm:mt-3">
                <Label className="text-gray-600">Phone number</Label>
                <Input
                  type="number"
                  min={0}
                  placeholder="123 456 789"
                  className="bg-white placeholder:text-xs"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <Label className="text-gray-600">Amount</Label>
                <Input
                  type="number"
                  min={0}
                  placeholder="Enter Amount"
                  className="bg-white placeholder:text-xs"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <div className="grid grid-cols-4 gap-4 pt-2">
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

              <Button className="w-full">Confirm Deposit</Button>
            </div>
          </div>
        )}

        {selectedMobileNetwork === "tigopesa" && (
          <div className="flex flex-col">
            <div className="flex justify-between items-center border-b pb-4">
              <ArrowLeft02Icon
                size={24}
                onClick={() => handleMobileNetworkChange("")}
                className="hover:cursor-pointer"
              />
              <div className="w-16 h-8 rounded-sm border shadow-sm overflow-hidden transform transition-transform duration-200 hover:scale-105">
                <Image
                  src="/img/wallet/tigopesa-logo.png"
                  width={1280}
                  height={640}
                  alt="tigopesa"
                />
              </div>
            </div>

            {/* MOBILE INPUTS */}
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1 mt-4 p-1 max-sm:mt-3">
                <Label className="text-gray-600">Phone number</Label>
                <Input
                  type="number"
                  min={0}
                  placeholder="123 456 789"
                  className="bg-white placeholder:text-xs"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <Label className="text-gray-600">Amount</Label>
                <Input
                  type="number"
                  min={0}
                  placeholder="Enter Amount"
                  className="bg-white placeholder:text-xs"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <div className="grid grid-cols-4 gap-4 pt-2">
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

              <Button className="w-full">Confirm Deposit</Button>
            </div>
          </div>
        )}
      </div>
      {selectedMobileNetwork === "mpesa" && (
        <div className="flex flex-col px-4 py-2">
          <div className="flex flex-col">
            <h1 className="font-semibold">M-pesa USSD Payment</h1>
            <p className="text-sm text-gray-400">Paybill Number: 111111</p>
          </div>

          <div className="mt-4">
            <ul className="list-disc px-6 text-sm text-gray-400">
              <li>On your phone, dial *150*00#</li>
              <li>Select option 4 (Pay by M-Pesa)</li>
              <li>Select option 4 (Enter Business Number)</li>
              <li>Enter business number 11111</li>
              <li>Enter the amount you want to deposit</li>
              <li>Enter PIN</li>
              <li>Press 1 to confirm</li>
              <li>
                Enter {'"'}ok{'"'}
              </li>
            </ul>

            <p className="mt-4 text-sm font-semibold">
              Your Winvo wallet will be credited automatically and you will
              receive a confirmation message.
            </p>
          </div>
        </div>
      )}

      {selectedMobileNetwork === "tigopesa" && (
        <div className="flex flex-col px-4 py-2">
          <div className="flex flex-col">
            <h1 className="font-semibold">M-pesa USSD Payment</h1>
            <p className="text-sm text-gray-400">Paybill Number: 111111</p>
          </div>

          <div className="mt-4">
            <ul className="list-disc px-6 text-sm text-gray-400">
              <li>On your phone, dial *150*01#</li>
              <li>Select option 4 (Pay by TigoPesa)</li>
              <li>Select option 4 (Enter Business Number)</li>
              <li>Enter business number 11111</li>
              <li>Enter the amount you want to deposit</li>
              <li>Enter PIN</li>
              <li>Press 1 to confirm</li>
              <li>
                Enter {'"'}ok{'"'}
              </li>
            </ul>

            <p className="mt-4 text-sm font-semibold">
              Your Winvo wallet will be credited automatically and you will
              receive a confirmation message.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMoneyDeposit;
