"use client";

import React, { useState } from "react";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const BorrowerCalculator = () => {
  const [sliderValue, setSliderValue] = useState(5);

  const handleSliderChange = (value) => {
    setSliderValue(value[0]);
  };
  
  const handleFormSubmission = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-2 gap-8 mt-8 max-sm:grid-cols-1 max-lg:grid-cols-1">
      <div className="bg-white rounded-xl p-6 max-sm:p-3 max-sm:rounded-lg">
        <form
          onSubmit={handleFormSubmission}
          className="grid grid-cols-1 gap-4 space-y-4 my-4"
        >
          <div className="flex flex-col space-y-2 p-1">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Invoice Amount
            </label>
            <Input
              type="number"
              min={0}
              placeholder="Invoice Amount"
              className="p-6 bg-white"
            />
            <div className="text-sm mt-2">
              <div className="flex items-center space-x-1 text-sm mt-2">
                <div className="flex items-center space-x-1 text-gray-500">
                  <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 duration-300">
                    VAT Inclusive
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6 justify-between p-1 max-sm:space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Investor Interest Rate
            </label>
            <p className="text-xs text-gray-500">{sliderValue}%</p>
            <Slider
              defaultValue={[5]}
              max={100}
              min={5}
              step={1}
              onValueChange={handleSliderChange}
            />

            <div className="text-sm mt-2">
              <div className="flex items-center space-x-1 text-gray-500">
                <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 duration-300">
                  Not less than 5%
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-8 max-sm:justify-center max-sm:flex-col max-sm:space-x-0 max-sm:gap-y-3">
            <Button className="font-semibold text-black bg-white hover:bg-main-black hover:text-white duration-300 max-sm:w-full">
              Reset
            </Button>
            <Button className="font-semibold max-sm:w-full">Calculate</Button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-xl p-8 max-sm:p-3 max-sm:rounded-lg">
        <div className="flex flex-col space-y-4 my-4">
          <div className="border-b-2 border-gray-200">
            <h1 className="font-bold text-xl">Result</h1>
          </div>

          <div>
            <h1 className="font-semibold text-lg">Calculation Details</h1>
          </div>

          <div className="flex flex-col text-sm space-y-2">
            <div className="flex justify-between items-center">
              <h1 className="text-gray-700">- Discounting rate: 85%</h1>
              <h1 className="font-medium">TZS 34,000,000</h1>
            </div>

            <div className="flex justify-between items-center">
              <h1 className="text-gray-700">- Processing fee: 0.5%</h1>
              <h1 className="font-medium">TZS 200,000</h1>
            </div>

            <div className="flex justify-between items-center">
              <h1 className="text-gray-700">- Service fee: 0.5%</h1>
              <h1 className="font-medium">TZS 200,000</h1>
            </div>

            <div className="flex justify-between items-center">
              <h1 className="text-gray-700">- Insurance: 1%</h1>
              <h1 className="font-medium">TZS 400,000</h1>
            </div>
          </div>

          <div className="w-full bg-main-black rounded-lg p-4 text-white mt-4">
            <div className="flex justify-between items-center">
              <h1 className="text-sm">Amount requested:</h1>
              <h1 className="text-lg font-semibold max-sm:text-sm">
                TZS 40,000,000
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowerCalculator;
