"use client"

import React, { useEffect, useRef, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import {
    FaChevronDown,
    FaChevronUp,
    FaGlobe,
} from "react-icons/fa6";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const MobileNavbar = () => {

  const router = useRouter();

  const [showResources, setShowResources] = useState(false);
  const dropdownResourcesRef = useRef(null);

  useEffect(() => {
    function handleCloseResources(event) {
      if (dropdownResourcesRef.current && !dropdownResourcesRef.current.contains(event.target)) {
        setShowResources(false);
      }
    }

    document.addEventListener("mousedown", handleCloseResources);
    return () => {
      document.removeEventListener("mousedown", handleCloseResources);
    };
  }, [dropdownResourcesRef]);

  const toggleResources = () => {
    setShowResources((prevShowResources) => !prevShowResources);
  };

  


  const [showLanguages, setShowLanguages] = useState(false);
  const dropdownLanguagesRef = useRef(null);

  useEffect(() => {
    function handleCloseLanguages(event) {
      if (dropdownLanguagesRef.current && !dropdownLanguagesRef.current.contains(event.target)) {
        setShowLanguages(false);
      }
    }

    document.addEventListener("mousedown", handleCloseLanguages);
    return () => {
      document.removeEventListener("mousedown", handleCloseLanguages);
    };
  }, [dropdownLanguagesRef]);

  const toggleLanguages = () => {
    setShowLanguages((prevShowLanguages) => !prevShowLanguages);
  };

  

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <AlignJustify className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <div>
            <div className="flex flex-col gap-y-12">
              <Link href="/" className="w-full max-w-[100px]">
                <Image src="/img/logo_dark.png" width={100} height={100} alt="logo"
                    className="w-full h-full object-cover"/>
              </Link>

              <div className="flex flex-col items-center gap-y-4 font-bold text-textColor">
                <Link href="/" className='hover:text-main-yellow duration-300'>Home</Link>
                <Link href="#" className='hover:text-main-yellow duration-300'>About</Link>
                <Link href="#" className='hover:text-main-yellow duration-300'>Service</Link>
                <Link href="#" className='hover:text-main-yellow duration-300'>Borrower</Link>
                <Link href="#" className='hover:text-main-yellow duration-300'>Investor</Link>
                <Link href="#" className='hover:text-main-yellow duration-300'>Contact Us</Link>

                <div 
                  className='flex space-x-1 items-center hover:text-main-yellow duration-300' 
                  onClick={toggleResources} 
                >
                    <Link href="#" className=''>Resources</Link>
                    {showResources ? <FaChevronUp size={12} /> : <FaChevronDown size={12}/>}
                    
                </div>

            
                  <div 
                    ref={dropdownResourcesRef}
                    className={`flex flex-col items-center gap-y-2 ${
                    showResources
                      ? "animate-out duration-500"
                      : "hidden"
                  }`}>
                    <Link href="#" className="hover:text-main-yellow duration-300">
                      Resource 1
                    </Link>
                    <Link href="#" className="hover:text-main-yellow duration-300">
                      Resource 2
                    </Link>
                    <Link href="#" className="hover:text-main-yellow duration-300">
                      Resource 3
                    </Link>
                  </div>
              

                <div className='flex space-x-1 items-center hover:text-main-yellow duration-300' onClick={toggleLanguages} >
                    <FaGlobe />
                    <Link href="#">En</Link>
                    {showLanguages ? <FaChevronUp size={12} /> : <FaChevronDown size={12}/>}
                </div>

                <div 
                    ref={dropdownLanguagesRef}
                    className={`flex flex-col items-center gap-y-2 ${
                    showLanguages
                      ? "animate-out duration-500"
                      : "hidden"
                  }`}>
                    <Link href="#" className="hover:text-main-yellow duration-300">
                      En
                    </Link>
                    <Link href="#" className="hover:text-main-yellow duration-300">
                      Sw
                    </Link>
                  </div>

                <div className='flex space-x-4 items-center'>
                    <Button variant="ghost" className="font-medium" onClick={() => router.push("/signin")}>Sign in</Button>
                    <Button className="font-medium" onClick={() => router.push("/signup")}>Sign Up</Button>
                </div>

              </div>

              
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;