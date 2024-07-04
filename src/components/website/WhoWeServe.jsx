"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import AOS from "aos";
import "aos/dist/aos.css";

function WhoWeServe() {
    useEffect(() => {
        AOS.init();
    }, []);

    const posts = [
        {
            id: 1,
            title: "For Borrowers",
            description: "WINVO connects businesses with the capital they need to grow by linking them with investors. Join our platform and access your business potential today.",
            icon: <Image src="/img/invoice.png" width={1000} height={1000} alt="invoice" className='w-full h-full object-contain'/>,
            button: <Button size="lg" className="font-medium">Join as a Borrower</Button>
        },
        {
            id: 2,
            title: "For Investors",
            description: "WINVO connects businesses with capital and investors with opportunities. Explore our platform to unlock your potential today.",
            icon: <Image src="/img/investigation.png" width={1000} height={1000} alt="investigation" className='w-full h-full object-contain'/>,
            button: <Button size="lg" className="font-medium">Join as Investor</Button>
        },
    ]
    
  return (
    <div className='py-24 max-sm:py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col'>
                <div className='grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2'>
                    <div className='flex flex-col'>
                        <h1 className='text-5xl font-bold max-sm:text-3xl'>Who We serve</h1>
                        <p className='text-gray-700 mt-8 max-sm:text-sm max-sm:mt-4'>WINVO connects businesses with capital and investors with opportunities. Explore our platform to unlock your potential today.</p>
                    </div>
                </div>

                <div className='mt-16 max-sm:mt-8'>
                    <div className='grid grid-cols-2 gap-8 max-sm:grid-cols-1' data-aos="fade-up" data-aos-duration="1500">
                        {posts.map((post) => (
                            <div key={post.id} className="p-8 flex flex-col justify-around bg-main-gray rounded-xl shadow-sm border border-opacity-25 border-gray-400 overflow-hidden max-sm:p-4">
                                <div className='bg-gray-200 rounded-full w-fit p-4 max-sm:p-3'>
                                    {post.icon}
                                </div>
                                <div className="py-4 px-2">
                                    <div className="font-semibold text-3xl my-4 max-sm:text-2xl">{post.title}</div>
                                    <p className="text-gray-700 text-lg max-sm:text-sm">{post.description}</p>
                                    <div className='my-8'>
                                        {post.button}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeServe