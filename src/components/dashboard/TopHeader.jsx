"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import MobileNavbar from "./MobileNavbar";
import { Notification01Icon, Search01Icon } from "hugeicons-react";
import Cookies from "js-cookie";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { persistor } from "@/lib/store";

function TopHeader() {
  const [session, setSession] = useState(null);
  const userSelector = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  console.log("User: ", userSelector);

  useEffect(() => {
    const sessionToken = Cookies.get("next-auth.session-token");
    setSession(sessionToken);
  }, []);

  useEffect(() => {
    console.log(session);
  }, [session]);

  const handleLogout = async () => {
    Cookies.remove("next-auth.session-token");
    dispatch(clearUser());
    persistor.purge();
    router.replace("/signin");
  };
  return (
    <div className="bg-white w-full sticky top-0 left-0 shadow z-30">
      <div className="flex justify-between items-center px-4 py-4">
        <div className="flex flex-col max-sm:hidden">
          <h1 className="font-semibold">Hi</h1>
          <p className="text-sm text-gray-500">
            {userSelector?.accountType ? userSelector?.accountType : "-"}
          </p>
        </div>

        <div className="flex space-x-4 items-center max-sm:hidden">
          {userSelector?.accountType === "Investor" && (
            <div>
              <div className="flex items-center space-x-2">
                {/* BALANCE */}
                <div className="flex items-center space-x-1">
                  <h1 className="text-sm text-gray-400">Bal: </h1>
                  <h1 className="text-sm font-semibold">TZS 10,000,000</h1>
                </div>

                {/* BUTTONS: DEPOSIT AND WITHDRAW */}
                <div className="flex items-center space-x-2">
                  <Button size="sm" className="font-semibold max-sm:w-full">
                    Deposit
                  </Button>
                  <Button
                    size="sm"
                    className="text-white bg-main-black hover:bg-white hover:text-main-black duration-300 max-sm:w-full"
                  >
                    Withdraw
                  </Button>
                </div>
              </div>
            </div>
          )}
          {userSelector?.accountType === "Borrower" && (
            <div className="relative">
              <Input
                type="search"
                placeholder="Search"
                className="pl-8 rounded-full"
              />
              <div className="absolute inset-y-0 left-0 flex items-center text-center py-3 px-3">
                <Search01Icon size={18} className="text-muted-foreground" />
              </div>
            </div>
          )}

          <div className="relative rounded-full border p-2 hover:cursor-pointer hover:bg-main-dashboard">
            <Notification01Icon size={20} className="text-gray-600" />
            <div className="w-[10px] h-[10px] bg-[#FF4423] rounded-full absolute right-0 top-0"></div>
          </div>

          <div className="flex space-x-2 items-center">
            <div>
              <Avatar>
                <AvatarImage
                  src={userSelector?.photoUrl ? userSelector?.photoUrl : ""}
                />
                <AvatarFallback>
                  {userSelector?.firstName ? userSelector?.firstName[0] : "-"}
                  {userSelector?.lastName ? userSelector?.lastName[0] : "-"}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="font-semibold text-sm">
              <h1>{userSelector?.lastName ? userSelector?.lastName : "-"}</h1>
            </div>
          </div>
        </div>

        <div className="hidden max-sm:flex">
          <MobileNavbar />
        </div>

        <div className="hidden max-sm:flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src={userSelector?.photoUrl ? userSelector?.photoUrl : ""}
                />
                <AvatarFallback>
                  {userSelector?.firstName ? userSelector?.firstName[0] : "-"}
                  {userSelector?.lastName ? userSelector?.lastName[0] : "-"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
              <DropdownMenuItem>
                <button onClick={handleLogout}>Log Out</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
