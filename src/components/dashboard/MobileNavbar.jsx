"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAppSelector } from "@/lib/hooks";

const MobileNavbar = () => {
  const router = useRouter();
  const userSelector = useAppSelector((state) => state.user.user);

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <AlignJustify className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left">
          <div>
            <div className="flex flex-col gap-y-12">
              <Link href="/" className="w-full max-w-[100px]">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage
                      src={userSelector?.photoUrl ? userSelector?.photoUrl : ""}
                    />
                    <AvatarFallback>
                      {userSelector?.firstName
                        ? userSelector?.firstName[0]
                        : "-"}
                      {userSelector?.lastName ? userSelector?.lastName[0] : "-"}
                    </AvatarFallback>
                  </Avatar>

                  <div className="font-semibold text-sm">
                    <h1>
                      {userSelector?.lastName ? userSelector?.lastName : "-"}
                    </h1>
                  </div>
                </div>
              </Link>

              {userSelector?.accountType === "Borrower" && (
                <div className="flex flex-col items-start gap-y-4 font-bold text-textColor">
                  <Link
                    href="/dashboard"
                    className="hover:text-main-yellow duration-300"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/invoices"
                    className="hover:text-main-yellow duration-300"
                  >
                    My Invoices
                  </Link>
                  <Link
                    href="/payments"
                    className="hover:text-main-yellow duration-300"
                  >
                    Payments
                  </Link>
                  <Link
                    href="/help"
                    className="hover:text-main-yellow duration-300"
                  >
                    Help & Center
                  </Link>
                  <Link
                    href="/clients"
                    className="hover:text-main-yellow duration-300"
                  >
                    Clients
                  </Link>
                  <Link
                    href="/calculator"
                    className="hover:text-main-yellow duration-300"
                  >
                    Calculator
                  </Link>
                </div>
              )}

              {userSelector?.accountType === "Investor" && (
                <div className="flex flex-col items-start gap-y-4 font-bold text-textColor">
                  <Link
                    href="/dashboard"
                    className="hover:text-main-yellow duration-300"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/wallet"
                    className="hover:text-main-yellow duration-300"
                  >
                    Wallet
                  </Link>
                  <Link
                    href="/market"
                    className="hover:text-main-yellow duration-300"
                  >
                    Market
                  </Link>
                  <Link
                    href="/bid"
                    className="hover:text-main-yellow duration-300"
                  >
                    My Bid
                  </Link>
                  <Link
                    href="/clients"
                    className="hover:text-main-yellow duration-300"
                  >
                    Summary Sheet
                  </Link>
                  <Link
                    href="/payments"
                    className="hover:text-main-yellow duration-300"
                  >
                    Payments
                  </Link>

                  <Link
                    href="/payments"
                    className="hover:text-main-yellow duration-300"
                  >
                    Inbox
                  </Link>
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
