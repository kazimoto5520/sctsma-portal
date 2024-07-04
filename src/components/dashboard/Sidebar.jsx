"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  AlertCircleIcon,
  AnalyticsUpIcon,
  CalculateIcon,
  File02Icon,
  Home01Icon,
  Logout03Icon,
  Message02Icon,
  PackageIcon,
  PurseIcon,
  Settings01Icon,
  UserGroupIcon,
} from "hugeicons-react";
import Cookies from "js-cookie";
import { persistor } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { clearUser } from "@/lib/redux/userSlice";

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const session = useAppSelector((state) => state.user.user);
  console.log("Account Type: " + session?.accountType);

  const isSettings = pathname.includes("settings");
  const isHelp = pathname.includes("help");

  const navItems = [
    {
      id: 1,
      name: "Orders",
      href: "/",
      icon: <Home01Icon size={20} variant="solid" />,
    },
    {
      id: 2,
      name: "Dispute",
      href: "/dispute",
      icon: <File02Icon size={20} />,
    },
    {
      id: 3,
      name: "Users",
      href: "/users",
      icon: <PurseIcon size={20} />,
    },
  ];

  const navItemsInvestor = [
    {
      id: 1,
      name: "Dashboard",
      href: "/dashboard",
      icon: <Home01Icon size={20} variant="solid" />,
    },
    {
      id: 8,
      name: "Wallet",
      href: "/wallet",
      icon: <PurseIcon size={20} />,
    },
    {
      id: 2,
      name: "Market",
      href: "/market",
      icon: <AnalyticsUpIcon size={20} />,
    },
    {
      id: 4,
      name: "My Bid",
      href: "/bid",
      icon: <File02Icon size={20} />,
    },

    {
      id: 5,
      name: "Summary Sheet",
      href: "/clients",
      icon: <PackageIcon size={20} />,
    },
    {
      id: 7,
      name: "Payments",
      href: "/payments",
      icon: <PurseIcon size={20} />,
    },
    {
      id: 9,
      name: "Inbox",
      href: "/inbox",
      icon: <Message02Icon size={20} />,
    },
  ];

  const handleLogout = async () => {
    Cookies.remove("next-auth.session-token");
    dispatch(clearUser());
    persistor.purge();
    router.replace("/signin");
  };

  return (
    <div className="w-1/6 flex flex-col justify-between items-center text-black bg-white h-full px-0 py-4 hide-element border-r-2 max-sm:hidden max-lg:w-2/6">
      <div className="flex flex-col justify-center items-center gap-y-6">
        <div>
          <Link href="/" className="text-xl font-bold">
            <h1 className="font-bold">SCTSMA</h1>
          </Link>
        </div>

        <div>
          <ul className="flex flex-col gap-y-2">
            {navItems.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname.startsWith(link.href + "/") ||
                pathname.includes(link.name.toLowerCase()) ||
                (pathname === "/" && link.href === "/");

              // pathname.startsWith(link.href) && link.href;
              return (
                <li
                  key={link.id}
                  className={`flex items-center gap-x-2 px-4 text-gray-700 py-1 text-[15px] rounded-md duration-300 ${
                    isActive ? "font-bold bg-main-yellow text-white" : ""
                  }`}
                >
                  {link.icon}
                  <Link href={link.href}>{link.name}</Link>
                </li>
              );
            })}
          </ul>

          {session?.accountType === "Investor" && (
            <ul className="flex flex-col gap-y-2">
              {navItemsInvestor.map((investorLink) => {
                const isActive =
                  pathname === investorLink.href ||
                  pathname.includes(investorLink.href) ||
                  (pathname === "/" && investorLink.href === "/") ||
                  pathname.includes(investorLink.name.toLowerCase());
                // pathname.startsWith(investorLink.href) && investorLink.href;
                return (
                  <li
                    key={investorLink.id}
                    className={`flex items-center gap-x-2 px-4 text-gray-700 py-1 text-[15px] rounded-md duration-300 ${
                      isActive ? "font-bold bg-main-yellow text-white" : ""
                    }`}
                  >
                    {investorLink.icon}
                    <Link href={investorLink.href}>{investorLink.name}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="">
        <div className="w-full h-[1px] bg-gray-200 my-4"></div>
        <ul className="flex flex-col gap-y-2">
          <li
            className={`flex items-center gap-x-3 px-4 text-gray-700 py-1 text-[15px] rounded-md duration-300 ${
              isSettings ? "font-bold bg-main-yellow text-white" : ""
            }`}
          >
            <Settings01Icon size={20} />
            <Link href="/settings">Settings</Link>
          </li>

          {session?.accountType === "Investor" && (
            <li
              className={`flex items-center gap-x-3 px-4 text-gray-700 py-1 text-[15px] rounded-md duration-300 ${
                isHelp ? "font-bold bg-main-yellow text-white" : ""
              }`}
            >
              <AlertCircleIcon size={20} />
              <Link href="/help">Help & Center</Link>
            </li>
          )}

          <li
            className={`flex items-center gap-x-3 px-4 text-gray-700 py-1 text-[15px] rounded-md duration-300`}
          >
            <Logout03Icon size={20} />
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
