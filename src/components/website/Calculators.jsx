"use client";

import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import BorrowerCalculator from "./BorrowerCalculator";
import InvestorCalculator from "./InvestorCalculator";
import AOS from "aos";
import "aos/dist/aos.css";

const Calculators = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col space-y-12">
    {/* Background Picture */}
      <div className="relative calculator-background h-screen">
        <div className="py-24 max-sm:py-12">
          <div className="container mx-auto">
            <div className="absolute bottom-1/4 flex flex-col">
              <div
                className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
              {/* Title and Description */}
                <div className="flex flex-col">
                  <h1 className="text-3xl text-white font-bold max-sm:text-xl">
                    Loan calculator
                  </h1>
                  <p className="text-gray-400 mt-4 max-sm:text-sm max-sm:mt-4">
                    Are you interested in Invoice Financing? Or are you looking
                    to better way to invest your Money? Use our calculator to
                    best decide the best option for you today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 mb-12">
        <div className="" data-aos="fade-up" data-aos-duration="1500">
          <Tabs defaultValue="borrower" className="w-full">
            <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-y-2">
              <h1 className="font-bold text-xl">
                Calculate your loan’s monthly repayment.
              </h1>
              <div>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="borrower">Borrower</TabsTrigger>
                  <TabsTrigger value="investor">Investor</TabsTrigger>
                </TabsList>
              </div>
            </div>

            <div className="bg-[#F6F7F9] rounded-3xl px-8 py-2 my-8 max-sm:my-4 max-sm:rounded-2xl max-sm:px-4">
              <TabsContent value="borrower" className="w-full">
                <BorrowerCalculator />
              </TabsContent>
              <TabsContent value="investor">
                <InvestorCalculator />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Calculators;
