"use client"

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Button } from '../ui/button'
import { FaBars, FaChevronDown, FaGlobe } from "react-icons/fa6";
import Image from 'next/image';
import MobileNavbar from './MobileNavbar';
import { useRouter } from 'next/navigation';

function Navbar() {

    const router = useRouter();

    const [showResources, setShowResources] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("En");
    const timeoutRef = useRef(null);

    const handleMouseLeaveResources = () => {
        timeoutRef.current = setTimeout(() => {
            setShowResources(false);
        }, 300);
    }

    const handleMouseEnterResources = () => {
        clearTimeout(timeoutRef.current);
    }

    const handleMouseLeaveLanguages = () => {
        timeoutRef.current = setTimeout(() => {
            setShowLanguages(false);
        }, 300);
    }

    const handleMouseEnterLanguages = () => {
        clearTimeout(timeoutRef.current);
    }

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setShowLanguages(false);
    }

  return (
    <div className='container mx-auto fixed top-4 left-0 right-0 z-10 bg-main-navbar bg-opacity-85 backdrop-blur py-6 px-4 rounded-2xl border border-opacity-25 border-gray-100 max-sm:top-2'>
        <div className='flex justify-between items-center text-white mx-6 max-sm:mx-0'>
            <Link href="/">
                <Image src="/img/logo.png" width={100} height={100} alt="Logo"/>
            </Link>

            <div className='flex space-x-4 font-medium max-sm:hidden max-lg:hidden'>
                <Link href="#" className='hover:text-main-yellow duration-300'>Home</Link>
                <Link href="#" className='hover:text-main-yellow duration-300'>About</Link>
                <Link href="#" className='hover:text-main-yellow duration-300'>Service</Link>
                <Link href="#" className='hover:text-main-yellow duration-300'>Borrower</Link>
                <Link href="#" className='hover:text-main-yellow duration-300'>Investor</Link>
                <Link href="#" className='hover:text-main-yellow duration-300'>Contact Us</Link>

                <div className='relative inline-block text-left'>
                    <div 
                        className='flex space-x-1 items-center hover:text-main-yellow duration-300'
                        onMouseEnter={() => setShowResources(true)}
                        onMouseLeave={handleMouseLeaveResources}
                    >
                        <Link href="#" className=''>Resources</Link>
                        <FaChevronDown size={12}/>
                    </div>

                    {showResources && (
                        <div 
                            className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                            onMouseEnter={handleMouseEnterResources}
                            onMouseLeave={handleMouseLeaveResources}
                        >
                            <div className='py-1'>
                            <Link href="#" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>Resource 1</Link>
                            <Link href="#" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>Resource 2</Link>
                            <Link href="#" className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>Resource 3</Link>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            <div className='flex justify-around items-center space-x-4 max-sm:hidden max-lg:hidden'>
                <div 
                    className='relative inline-block text-left'
                    onMouseEnter={() => setShowLanguages(true)}
                    onMouseLeave={handleMouseLeaveLanguages}
                >
                    <div className='flex space-x-1 items-center hover:cursor-pointer hover:text-main-yellow duration-300'>
                        <FaGlobe />
                        <Link href="#">{selectedLanguage}</Link>
                        <FaChevronDown size={12}/>
                    </div>

                    {showLanguages && (
                        <div 
                            className='origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                            onMouseEnter={handleMouseEnterLanguages}
                            onMouseLeave={handleMouseEnterLanguages}
                        >
                            <div className='py-1'>
                                <Link 
                                    href="#" 
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                    onClick={() => handleLanguageChange("Sw")}
                                    >
                                    Sw
                                </Link>

                                <Link 
                                    href="#" 
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                    onClick={() => handleLanguageChange("En")}
                                    >
                                    En
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                <div className='flex space-x-4 items-center max-sm:hidden max-lg:hidden'>
                    <Button variant="ghost" className="font-medium" onClick={()=> router.push("/signin")}>Sign in</Button>
                    <Button className="font-medium"  onClick={() => router.push("/signup")}>Sign Up</Button>
                </div>
            </div>

            {/* MOBILE RESPONSIVENESS */}

            <div className="flex lg:hidden 2xl:hidden">
                <MobileNavbar />
            </div>
        </div>
    </div>
  )
}

export default Navbar