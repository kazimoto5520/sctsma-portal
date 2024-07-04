"use client"

import Navbar from "./Navbar";
import { Button } from "../ui/button";
import CountUp, { useCountUp } from "react-countup";

const HeroSection = () => {
    useCountUp({
        ref: "counter",
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });

    return (
        <div className="relative hero-background h-[100vh] py-4 px-4 max-sm:px-0 max-sm:py-0">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <Navbar />

                    <div className="container my-64 max-sm:my-32">
                        <div className="w-full max-w-[700px] max-sm:max-w-full max-sm:-ml-12">
                            <h1 className="text-5xl font-bold text-white max-sm:text-3xl">Your Gateway to Invoice Financing Solutions!</h1>
                            <p className="text-gray-300 mt-8 max-sm:text-sm">WINVO connects businesses with capital and investors with opportunities. Explore our platform to unlock your potential today.</p>
                        </div>

                        <div className="flex space-x-4 mt-8 items-center max-sm:-ml-12">
                            <Button className="font-medium">Join as Borrower</Button>
                            <Button variant="ghost" className="border font-medium text-white">Join as Investor</Button>
                        </div>

                        <div className="flex space-x-8 mt-12 max-sm:-ml-12">
                            <div className="flex flex-col items-center">
                                <h1 className="text-5xl text-white font-bold max-sm:text-3xl"><CountUp start={0} end={50} duration={10} enableScrollSpy={false} />K</h1>
                                <h1 className="text-gray-300 drop-shadow-md mt-2 max-sm:text-sm text-center">Active Borrower</h1>
                            </div>

                            <div className="flex flex-col items-center">
                                <h1 className="text-5xl text-white font-bold max-sm:text-3xl"><CountUp start={0} end={30} duration={10} enableScrollSpy={false} />K</h1>
                                <h1 className="text-gray-300 drop-shadow-md mt-2 max-sm:text-sm text-center">Total Investors</h1>
                            </div>

                            <div className="flex flex-col items-center">
                                <h1 className="text-5xl text-white font-bold max-sm:text-3xl"><CountUp start={0} end={25} duration={10} enableScrollSpy={false} />K</h1>
                                <h1 className="text-gray-300 drop-shadow-md mt-2 max-sm:text-sm text-center">Total Suppliers</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
