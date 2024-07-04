"use client"

import React, { useRef } from 'react'
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa6'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

function OurCustomerFeedback() {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    const posts = [
        {
            id: 1,
            title: "Cool Business Owner",
            description: "WINVO has been a game-changer for our business. By leveraging their invoice financing solutions, we've been able to improve our cash flow and accelerate our growth. The process is seamless, and the returns have exceeded our expectations. Highly recommended!",
            role: "Business Owner"
        },
        {
            id: 2,
            title: "Cool Investor",
            description: "I've been investing with WINVO for over a year now, and I'm impressed by the consistent returns and the level of transparency they provide. The platform is user-friendly, and the team is always available to answer any questions WINVO has become a crucial part of my investment portfolio",
            role: "Investor"
        },
        {
            id: 3,
            title: "Cool Supplier",
            description: "WINVO has been a game-changer for our business. By leveraging their invoice financing solutions, we've been able to improve our cash flow and accelerate our growth. The process is seamless, and the returns have exceeded our expectations. Highly recommended!",
            role: "Supplier"
        },
        {
          id: 4,
          title: "Cool CLient",
          description: "WINVO has been a game-changer for our business. By leveraging their invoice financing solutions, we've been able to improve our cash flow and accelerate our growth. The process is seamless, and the returns have exceeded our expectations. Highly recommended!",
          role: "Client"
        },
        {
            id: 5,
            title: "Cool CLient",
            description: "WINVO has been a game-changer for our business. By leveraging their invoice financing solutions, we've been able to improve our cash flow and accelerate our growth. The process is seamless, and the returns have exceeded our expectations. Highly recommended!",
            role: "Client"
        },
    ]

    const partiners = [
        {
            id: 1,
            name: "Cloudflare",
            img: "/img/partiners/cloudflare.png"
        },
        {
            id: 2,
            name: "Oracle",
            img: "/img/partiners/oracle.png"
        },
        {
            id: 3,
            name: "Apple",
            img: "/img/partiners/apple.png"
        },
        {
            id: 4,
            name: "Tesla",
            img: "/img/partiners/TESLA.png"
        },
        {
            id: 5,
            name: "Samsung",
            img: "/img/partiners/samsung.png"
        },
        {
            id: 6,
            name: "Microsoft Windows",
            img: "/img/partiners/microsoft.png"
        },
        {
            id: 7,
            name: "Pepsi",
            img: "/img/partiners/pepsi.png"
        },
    ]   
    
    var partinersSettings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 5000,
        slidesToShow: 7,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3
                }
              }
        ]
      };

  return (
    <div className='bg-main-black py-24 max-sm:py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col text-white'>
                <div className='flex justify-between items-center max-sm:flex-col'>
                    <div className='flex flex-col'>
                        <h1 className='text-5xl font-bold max-sm:text-3xl'>Our Customer Feedback</h1>
                        <p className='text-lg mt-4 max-sm:text-sm'>Don’t take our word for it. Trust the people who actually use WINVO</p>
                    </div>

                    <div className='flex space-x-4 items-center max-sm:mt-8'>
                        <div className='border p-4 rounded-full hover:bg-white hover:text-main-black duration-300 max-sm:p-2' onClick={previous}>
                            <FaArrowLeft size={24} />
                        </div>
                        <div className='border p-4 rounded-full hover:bg-white hover:text-main-black duration-300 max-sm:p-2' onClick={next}>
                            <FaArrowRight size={24}/>
                        </div>
                    </div>
                </div>

                <div className='mt-16'>
                    <div className='w-full mx-auto gap-4 max-sm:gap-2'>
                        <Slider
                        ref={slider => {
                            sliderRef = slider;
                          }}
                         {...settings}>
                            {posts.map((post) => (
                                <div key={post.id} 
                                    className="max-w-full p-4 flex flex-col justify-around bg-main-navbar bg-opacity-60 rounded-md shadow-lg border border-opacity-25 border-gray-100 overflow-hidden max-sm:justify-between"
                                    >
                                        <div className='w-fit'>
                                            <FaQuoteLeft size={64} className='text-main-yellow max-sm:text-sm'/>
                                        </div>
                                        <div className="py-4 px-2">
                                            <p className="text-sm">{post.description}</p>
                                        </div>
                                        <div className='py-4 px-2'>
                                            <h1 className="font-semibold text-lg">{post.title}</h1>
                                            <p className="text-sm mb-2 text-main-gray">{post.role}</p>
                                        </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className='mt-16 max-sm:mt-8'>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-bold max-sm:text-lg'>Partners we worked with</h1>
                        <div className='mt-8'>
                            <Slider {...partinersSettings}>
                                {partiners.map((partiner) => (
                                    <div key={partiner.id} className='w-[142px] h-[48px] max-w-[142px]'>
                                        <Image src={partiner.img} width={1000} height={1000} alt={partiner.name} className='w-full h-full object-contain'/>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurCustomerFeedback