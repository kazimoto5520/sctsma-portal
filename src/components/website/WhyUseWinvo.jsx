"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function WhyUseWinvo() {
    useEffect(() => {
        AOS.init();
    }, []);

    const posts = [
        {
            id: 1,
            title: "Fund your Invoice Easily",
            image: "/img/post.png",
            description: "Quickly convert outstanding invoices into cash with Winvo. Upload your invoices and receive funds without the traditional lending hassle.",
        },
        {
            id: 2,
            title: "Choose your Investor",
            image: "/img/post2.png",
            description: "Select from a network of investors offering the best terms. Compare offers and pick the right deal to support your business growth.",
        },
        {
            id: 3,
            title: "Boost Your Cash Flow",
            image: "/img/post3.png",
            description: "Unlock funds tied up in unpaid invoices to maintain a healthy cash flow. Use the money to pay suppliers, meet payroll, or invest in new opportunities.",
        },
    ]

  return (
    <div className='container mx-auto'>
        <div className='flex flex-col py-24 max-sm:py-12'>
            <div className='flex justify-between items-center max-sm:flex-col'>
                <div className='flex flex-col'>
                    <h1 className='text-main-yellow font-medium text-2xl mb-4 max-sm:text-xl'>Why use WINVO?</h1>
                    <h1 className='font-bold text-5xl max-sm:text-3xl'>Easy, Simple,<br className='max-sm:hidden' /> Affordable</h1>
                </div>

                <div className='p-8 max-sm:py-4 max-sm:px-0'>
                    <h1 className='text-gray-700 max-sm:text-sm'>Here is step by step guide on how the <br className='max-sm:hidden'/> platform operates and explanations of <br className='max-sm:hidden'/> the Invoice financing process</h1>
                </div>
            </div>

            <div className='mt-24 w-full container mx-auto max-sm:mt-12'>
                <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-sm:gap-4 max-lg:grid-cols-2" data-aos="fade-up" data-aos-duration="1500">
                    {posts.map((post) => (
                        <div key={post.id} className="flex flex-col justify-around max-w-full bg-white rounded overflow-hidden">
                            <div className='w-200 h-200'>
                                <Image className="w-full h-full object-cover h-max-[300px]" width={1000} height={1000} src={post.image} alt="Card image"/>
                            </div>
                            <div className="py-4">
                                <div className="font-semibold text-lg mb-2">{post.title}</div>
                                <p className="text-gray-700 text-sm">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUseWinvo