"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowDown01Icon,
  DashboardSquare01Icon,
  RightToLeftListDashIcon,
} from "hugeicons-react";
import React, { useState } from "react";
import { markets } from "@/lib/damp-data";
import Image from "next/image";
import { MarketSheet } from "./MarketSheet";

const MarketListItem = () => {
  const [activeIcon, setActiveIcon] = useState("listView");

  const handleListViewIconClick = () => {
    setActiveIcon(activeIcon === "listView" ? null : "listView");
  };

  const handleDashboardSquareIconClick = () => {
    setActiveIcon(activeIcon === "dashboardSquare" ? null : "dashboardSquare");
  };

  return (
    <div>
      <div className="bg-white p-3 mt-4 rounded-md max-sm:p-2">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:space-y-2">
          {/* MINIMUM AND MAXIMUM FILTER */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-xs">Filter by: </h1>
              <div className="bg-main-gray p-2 rounded-md ring-1 ring-gray-200 hover:cursor-pointer">
                <div className="flex justify-between items-center text-gray-400">
                  <h1 className="text-xs">Amount</h1>
                  <ArrowDown01Icon size={16} />
                </div>
              </div>

              <div className="bg-main-gray p-2 rounded-md ring-1 ring-gray-200 hover:cursor-pointer">
                <div className="flex justify-between items-center text-gray-400">
                  <h1 className="text-xs">Due Date</h1>
                  <ArrowDown01Icon size={16} />
                </div>
              </div>

              <div className="bg-main-gray p-2 rounded-md ring-1 ring-gray-200 hover:cursor-pointer">
                <div className="flex justify-between items-center text-gray-400">
                  <h1 className="text-xs">Industry</h1>
                  <ArrowDown01Icon size={16} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div
                className={`p-1 rounded-md hover:cursor-pointer ${
                  activeIcon === "listView" ? "bg-main-yellow" : ""
                }`}
                onClick={handleListViewIconClick}
              >
                <RightToLeftListDashIcon size={16} />
              </div>

              <div
                className={`p-1 rounded-md hover:cursor-pointer ${
                  activeIcon === "dashboardSquare" ? "bg-main-yellow" : ""
                }`}
                onClick={handleDashboardSquareIconClick}
              >
                <DashboardSquare01Icon size={16} />
              </div>
            </div>

            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder="Sort by: Newest"
                    className="placeholder:text-xs"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Newest</SelectItem>
                  <SelectItem value="dark">Last Modified</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* GRID VIEW */}
      {activeIcon === "dashboardSquare" && (
        <div className="mt-4 rounded-md">
          <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2">
            {markets.map((market, index) => (
              <MarketSheet key={index} market={market}>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex flex-col space-y-4">
                    <div className="bg-yellow-100 px-1 rounded-sm w-fit">
                      <span className="text-xs text-yellow-500">
                        {market.category}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <h1 className="font-semibold">{market.title}</h1>
                      <p className="text-sm my-2 text-gray-400">
                        {market.description}
                      </p>
                    </div>

                    <div className="border-t border-gray-100">
                      <div className="mt-2">
                        <div className="grid grid-cols-4 gap-4">
                          {market.details.map((detail, index) => (
                            <div
                              key={index}
                              className="flex flex-col justify-center items-center border-r border-gray-100 last:border-r-0"
                            >
                              <h1 className="text-xs text-gray-400">
                                {detail.title}
                              </h1>
                              <h1 className="text-sm font-semibold">
                                {detail.metric}
                              </h1>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MarketSheet>
            ))}
          </div>
        </div>
      )}

      {/* LIST VIEW */}
      {activeIcon === "listView" && (
        <div className="mt-4 rounded-md">
          <div className="grid grid-cols-1 gap-4">
            {markets.map((market, index) => (
              <MarketSheet key={index} market={market}>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center">
                    <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2">
                      <div>
                        <h1 className="font-semibold">{market.title}</h1>
                        <p className="text-sm my-2 text-gray-400">
                          {market.description}
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-100 px-1 rounded-sm w-fit">
                      <span className="text-xs text-yellow-500">
                        {market.category}
                      </span>
                    </div>
                  </div>

                  <div className="border-t mt-4 border-gray-100">
                    <div className="mt-2 flex justify-between items-center">
                      <div className="grid grid-cols-4 gap-4">
                        {market.details.map((detail, index) => (
                          <div
                            key={index}
                            className="flex flex-col justify-center items-center border-r border-gray-100 pr-4 last:border-r-0"
                          >
                            <h1 className="text-xs text-gray-400">
                              {detail.title}
                            </h1>
                            <h1 className="text-sm font-semibold">
                              {detail.metric}
                            </h1>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col text-sm items-end max-sm:hidden">
                        <h1 className="text-xs my-2 text-gray-400">
                          23 More people have bid
                        </h1>
                        <div>
                          <div className="flex -space-x-2">
                            <Image
                              width={100}
                              height={100}
                              className="inline-block size-[32px] rounded-full ring-2 ring-white"
                              src="/img/dashboard/profile.png"
                              alt="Image Description"
                            />
                            <Image
                              width={100}
                              height={100}
                              className="inline-block size-[32px] rounded-full ring-2 ring-white"
                              src="/img/dashboard/profile.png"
                              alt="Image Description"
                            />
                            <Image
                              width={100}
                              height={100}
                              className="inline-block size-[32px] rounded-full ring-2 ring-white"
                              src="/img/dashboard/profile.png"
                              alt="Image Description"
                            />
                            <Image
                              width={100}
                              height={100}
                              className="inline-block size-[32px] rounded-full ring-2 ring-white"
                              src="/img/dashboard/profile.png"
                              alt="Image Description"
                            />
                            <div className="hs-dropdown [--placement:top-left] relative inline-flex">
                              <button
                                id="hs-avatar-group-dropdown"
                                className="hs-dropdown-toggle inline-flex items-center justify-center size-[32px] rounded-full bg-gray-300 border-2 border-white font-medium text-black shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-blue-100 focus:text-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                              >
                                <span className="text-xs font-medium leading-none">
                                  19+
                                </span>
                              </button>

                              <div
                                className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 bg-white shadow-md rounded-lg p-2"
                                aria-labelledby="hs-avatar-group-dropdown"
                              >
                                <a
                                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                                  href="#"
                                >
                                  Chris Lynch
                                </a>
                                <a
                                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                                  href="#"
                                >
                                  Maria Guan
                                </a>
                                <a
                                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                                  href="#"
                                >
                                  Amil Evara
                                </a>
                                <a
                                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                                  href="#"
                                >
                                  Ebele Egbuna
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MarketSheet>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketListItem;
