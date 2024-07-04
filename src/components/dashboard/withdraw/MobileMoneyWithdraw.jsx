import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";

const MobileMoneyWithdraw = () => {
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 max-lg:grid-cols-1 mt-6">
      <div className="bg-white rounded-xl shadow-md p-6 max-sm:p-4">
        <div className="flex flex-col">
          <h1 className="font-medium">Mobile money withdraw</h1>

          {/* MOBILE INPUTS */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1 mt-2 p-1 max-sm:mt-3">
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
              />
            </div>

            <Button className="w-full">Withdraw</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMoneyWithdraw;
