"use client"

import React, { useEffect } from 'react'
import { FaRocket } from 'react-icons/fa6'
import AOS from "aos";
import "aos/dist/aos.css";

function WhyInvestWithWinvo() {
  useEffect(() => {
    AOS.init();
  }, []);

  const posts = [
    {
        id: 1,
        title: "Investment opportunities",
        description: "Wide selection of opportunities to invest in invoice financing, allowing you to diversify your portfolio and maximise returns.",
    },
    {
        id: 2,
        title: "Risk Management",
        description: "Navigate risk effectively by understanding the distinction between recourse and non-recourse financing, then make informed decisions to protect your investments",
    },
    {
        id: 3,
        title: "Investor Dashboard",
        description: "Gain valuable insights into your investments with our comprehensive investor dashboard. Track performance, monitor returns, and analyze portfolio diversification effortlessly.",
    },
    {
      id: 4,
      title: "Support and Assistance",
      description: "Our team of dedicated account managers, will provide tailored support, answer your questions, and guide you through every step of the process.",
  },
]

  return (
    <div className='bg-main-gray py-24 max-sm:py-12'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center max-sm:flex-col'>
                <div className='flex flex-col' data-aos="fade-right" data-aos-duration="1500">
                    <h1 className='text-main-yellow font-medium text-2xl mb-4 max-sm:text-xl'>WHY INVEST WITH WINVO?</h1>
                    <h1 className='font-bold text-5xl max-sm:text-3xl'>Discover Investment <br className='max-sm:hidden'/> opportunities</h1>
                    <h1 className='mt-8 text-lg text-gray-700 max-sm:text-sm max-sm:mt-4 max-sm:mb-8'>Here is step by step guide on how the platform operates and <br className='max-sm:hidden'/> explanations of the Invoice financing process</h1>
                </div>

                <div className='grid grid-cols-2 gap-8 max-sm:grid-cols-1 max-lg:gap-4' data-aos="fade-left">
                  {posts.map((post) => (
                    <div key={post.id} className="max-w-[256px] p-4 flex flex-col justify-around bg-white rounded-md shadow-lg overflow-hidden max-sm:max-w-full">
                      <div className='bg-main-gray rounded-full w-fit p-3 max-sm:p-2'>
                        <FaRocket size={24} className='text-gray-500'/>
                      </div>
                      <div className="py-4 px-2">
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

export default WhyInvestWithWinvo