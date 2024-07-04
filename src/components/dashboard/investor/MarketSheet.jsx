"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { bidders } from "@/lib/damp-data";
import {
  ArrowLeft02Icon,
  Building03Icon,
  Calendar03Icon,
  File01Icon,
  FileValidationIcon,
  HelpCircleIcon,
  Invoice01Icon,
  Share08Icon,
} from "hugeicons-react";
import { useState } from "react";

export function MarketSheet({ market, children }) {
  const [selected, setSelected] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleToggleTab = () => {
    setSelected(!selected);
  };

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    setInputValue(value);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="hover:cursor-pointer">{children}</div>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        {/* FIRST TABS */}
        {!selected && (
          <div>
            <div className="flex flex-col border-b border-gray-200 pb-2">
              <p className="text-xs font-normal text-gray-500">Invoice from:</p>
              <h1 className="font-semibold">Smartcodes</h1>
            </div>

            <div className="flex flex-col my-4">
              <div className="bg-yellow-100 px-1 rounded-sm w-fit">
                <span className="text-xs text-yellow-500">
                  {market.category}
                </span>
              </div>

              {/* Heading && Descriuption */}
              <div className="flex flex-col mt-2">
                <h1 className="font-semibold">{market.title}</h1>
                <p className="text-xs my-2 text-gray-500">
                  Office ipsum you must be muted. Now search follow masking
                  client teams left prioritize skulls explore. Light staircase
                  dont keep feelers baked running call. Seat search new alpha
                  scope the. Air underlying strategies revision fured. Ballpark
                  search shark stakeholders flesh eat relaxation native attached
                  know. Player-coach unpack on low both 2 give explore.
                </p>
              </div>

              {/* Grid items */}
              <div className="grid grid-cols-2 gap-4 my-2 max-sm:grid-cols-1">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <Building03Icon size={20} />
                  </div>

                  <div className="flex flex-col text-xs">
                    <h1 className="font-medium">Client</h1>
                    <p className="text-gray-500">Vodacom PLC</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <Calendar03Icon size={20} />
                  </div>

                  <div className="flex flex-col text-xs">
                    <h1 className="font-medium">Return date</h1>
                    <p className="text-gray-500">
                      {market?.details[3]?.metric
                        ? market?.details[3]?.metric
                        : "-"}{" "}
                      days after investment
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <File01Icon size={20} />
                  </div>

                  <div className="flex flex-col text-xs">
                    <h1 className="font-medium">Invoice Amount</h1>
                    <p className="text-gray-500">20,000,000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <Invoice01Icon size={20} />
                  </div>

                  <div className="flex flex-col text-xs">
                    <h1 className="font-medium">Amount Requested</h1>
                    <p className="text-gray-500">10,000,000</p>
                  </div>
                </div>
              </div>

              {/* TZS && Review Button && Share Button */}
              <div className="flex flex-col space-y-2 mt-6">
                <div className="flex items-center space-x-2">
                  <h1 className="text-sm font-semibold">TSZ 8,000,000</h1>
                  <p className="text-xs text-gray-500">
                    Raised of TZS 10,000,000
                  </p>
                </div>

                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: `${(8000000 / 10000000) * 100}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-main-yellow"
                    />
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  <p>
                    {market?.details[3]?.metric
                      ? market?.details[3]?.metric
                      : "-"}{" "}
                    days left
                  </p>
                </div>
              </div>

              {/* CONTINUE BUTTON AND ICON */}
              <div className="flex justify-between items-center space-x-2 mt-4">
                <Button
                  onClick={handleToggleTab}
                  size="sm"
                  className="w-full text-xs max-sm:w-full"
                >
                  Continue to Bid
                </Button>

                <div className="bg-main-yellow rounded-full p-2 hover:cursor-pointer">
                  <Share08Icon size={16} />
                </div>
              </div>

              {/* TABS FOR BIDS --- */}
              <div className="my-4 mt-6 text-xs">
                <Tabs defaultValue="bidders" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 text-xs">
                    <TabsTrigger value="bidders">
                      <span className="text-xs">Top Bidders</span>
                    </TabsTrigger>
                    <TabsTrigger value="documents">
                      <span className="text-xs">Documents</span>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="bidders">
                    <div className="grid grid-cols-1 gap-2">
                      {bidders.map((bidder, index) => (
                        <div key={index} className="">
                          <div className="flex items-center space-x-2">
                            <Avatar>
                              <AvatarImage
                                src="/img/dashboard/profile.png"
                                alt={bidder.img}
                              />
                              <AvatarFallback>
                                {bidder?.name ? bidder?.name[0] : "-"}
                                {bidder?.img ? bidder?.name[0] : "-"}
                              </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col">
                              <h1 className="font-medium">{bidder.name}</h1>
                              <p className="text-gray-400">
                                {bidder.amount}{" "}
                                <span className="text-main-yellow">•</span>{" "}
                                {bidder.days}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <Button
                        size="sm"
                        className="w-1/3 bg-main-black text-white text-xs max-sm:w-full hover:text-black hover:bg-white duration-300"
                      >
                        See All
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="documents">
                    <div className="grid grid-cols-1 gap-2">
                      <div className="bg-gray-100 border rounded-md flex items-center space-x-2 p-2">
                        <FileValidationIcon size={24} />
                        <div className="flex flex-col pl-2">
                          <h1 className="font-medium">Invoice</h1>
                          <p className="text-gray-400">Tender_Invoice.pdf</p>
                          <span className="text-main-yellow underline hover:cursor-pointer">Click to view</span>
                        </div>
                      </div>
                      <div className="bg-gray-100 border rounded-md flex items-center space-x-2 p-2">
                        <FileValidationIcon size={24} />
                        <div className="flex flex-col pl-2">
                          <h1 className="font-medium">Contract/LPO</h1>
                          <p className="text-gray-400">Tender_Contract.pdf</p>
                          <span className="text-main-yellow underline hover:cursor-pointer">Click to view</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        )}

        {/* SECOND TABS */}
        {selected && (
          <div className="flex flex-col">
            <div onClick={handleToggleTab} className="hover:cursor-pointer">
              <ArrowLeft02Icon size={20} />
            </div>

            {/* MAIN CONTENT */}
            <div className="flex flex-col">
              <div className="flex flex-col mt-2">
                <h1 className="font-semibold">{market.title}</h1>
                <p className="text-xs my-2 text-gray-500">
                  You are about to bid on “Dashboard prototype recording
                  invoice”, enter the amount you want to Invest below.
                </p>
              </div>

              {/* INPUT TO AMOUNT */}
              <div className="flex flex-col space-y-3 my-2 text-xs">
                <label className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Place your Bid
                </label>
                <Input
                  type="number"
                  min={0}
                  placeholder="Enter your Investment amount"
                  className="bg-white placeholder:text-xs"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <div className="grid grid-cols-4 gap-4 pb-2 max-sm:gap-2">
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

                <div className="flex space-x-2 items-center border-b pb-4 pt-2">
                  <Checkbox id="terms" className="border border-gray-200" />
                  <label
                    htmlFor="terms"
                    className="text-gray-400 text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Don’t display my name publicly on the bidder’s board
                  </label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircleIcon className="text-gray-400" size={16} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">This is a tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-semibold text-sm">
                    Bidding Informations
                  </h1>

                  <div className="text-xs flex flex-col space-y-2 pt-2 border-b pb-4">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-400">Processing fee: 0.5%</p>
                      <p className="font-medium">TZS 34,000,000</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-gray-400">Government charges: 10%</p>
                      <p className="font-medium">TZS 34,000,000</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center py-4 border-b">
                    <p className="font-medium">Total</p>
                    <p className="text-gray-400">TZS 68,000,000</p>
                  </div>
                </div>
              </div>

              {/* BUTTON TO PLACE BID */}
              <div className="flex flex-col space-y-4 py-4">
                <Button
                  size="sm"
                  className="w-full text-xs"
                  onClick={handleToggleTab}
                >
                  Place a Bid
                </Button>

                <p className="text-xs text-gray-400">
                  By choosing placing a bid above, you agree to the{" "}
                  <span className="text-gray-700 font-semibold">WINVO </span>
                  <span className="text-main-black underline hover:cursor-pointer">
                    Terms of Service
                  </span>
                   and acknowledge the 
                  <span className="text-main-black underline hover:cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
