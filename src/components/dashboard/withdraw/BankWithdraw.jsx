"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Add01Icon, Delete02Icon } from "hugeicons-react";
import { fundAccounts as initialFundAccounts } from "@/lib/damp-data";
import Link from "next/link";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const BankWithdraw = () => {
  const [fundAccounts, setFundAccounts] = useState(initialFundAccounts);

  const formatAccountNumber = (accountNumber) => {
    if (!accountNumber) return "";
    return accountNumber.replace(
      /(\d{4})\s\d{4}\s\d{4}(\s\d{4})/,
      "$1 *** ***$2"
    );
  };

  const handleDelete = (accountNumber) => {
    setFundAccounts(
      fundAccounts.filter((account) => account.accountNumber !== accountNumber)
    );
  };
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 max-lg:grid-cols-1 mt-6">
      <form className="bg-white rounded-xl shadow-md p-6 max-sm:p-4">
        <div className="flex flex-col">
          <h1 className="font-medium">Choose Account</h1>

          {/* MOBILE INPUTS */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 mt-2 p-1 max-sm:mt-3">
              {fundAccounts.map((account, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-3 shadow-md shadow-gray-100"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <h1 className="font-medium text-sm">{account.name}</h1>
                      <p className="text-gray-400 text-xs">
                        {formatAccountNumber(account.accountNumber)}
                      </p>
                    </div>

                    <div className="text-gray-400 hover:cursor-pointer">
                      <Delete02Icon
                        size={20}
                        onClick={() => handleDelete(account.accountNumber)}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <Dialog>
                <DialogTrigger>
                  <div className="w-fit flex items-center space-x-1 text-main-yellow text-sm">
                    <Add01Icon size={16} />
                    <span>Add Account</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add new account</DialogTitle>
                    <DialogDescription>
                      <form className="flex flex-col space-y-4 mt-4">
                        <div className="flex flex-col space-y-1">
                          <Label className="text-gray-600">
                            Account Number
                          </Label>
                          <Input
                            type="text"
                            placeholder="Account Number"
                            className="bg-white placeholder:text-xs"
                          />
                        </div>
                        <div>
                          <Button className="w-full">Add Account</Button>
                        </div>
                      </form>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex flex-col space-y-1">
              <Label className="text-gray-600">Amount</Label>
              <Input
                type="number"
                min={0}
                placeholder="Amount to Withdraw"
                className="bg-white placeholder:text-xs"
              />
            </div>

            <Button className="w-full">Withdraw</Button>
          </div>
        </div>
      </form>

      <div className="flex flex-col px-4 py-2">
        <div className="flex flex-col">
          <h1 className="font-semibold">Bank withdraw</h1>
          <p className="text-sm text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur. Vivamus ultrices lectus nunc
            vulputate purus nec imperdiet eu massa. Amet dolor diam vestibulum
            imperdiet ornare. Mollis facilisi purus amet fermentum aliquam at.
            Diam malesuada vel facilisi ac. Pretium massa id at urna vulputate
            nulla congue orci mi. Ultrices sit sem vulputate et parturient.
            Tellus rutrum quis eros nisl viverra id aliquet gravida. Sem lorem
            sed auctor lobortis faucibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankWithdraw;
