import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className='bg-main-black py-24 max-sm:py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col text-white'>
                <div className='flex justify-between items-center mb-12 max-sm:flex-col max-sm:mb-6'>
                    <div className='text-5xl font-bold max-sm:text-3xl'>
                        <h1>Keep up with <br className='max-sm:hidden'/>the latest</h1>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl'>Stay up to date</h1>
                            <p className='my-4 text-sm text-gray-400'>Join our newsletter to stay up to date on features and realeases.</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Input type="email" placeholder="Enter your email" className="p-6 bg-white bg-opacity-10 border-none placeholder:text-white"/>
                            <Button type="submit" size="lg" className="font-medium">Subscribe</Button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='bg-white bg-opacity-10 w-full h-[0.128rem] my-12'></div>

                <div className='flex justify-between items-start text-gray-400 mt-12 max-sm:flex-col max-sm:mt-6'>
                    <div className='flex flex-col'>
                        <Link href="/">
                            <Image src="/img/logo.png" width={128} height={128} alt="Logo"/>
                        </Link>
                        <p className='my-4'>Your winning partner in invoice <br /> financing</p>
                    </div>

                    <div className='grid grid-cols-5 max-sm:grid-cols-3 max-sm:gap-4 max-sm:mt-6'>
                        <div className='flex flex-col space-y-2'>
                            <Link href="#" className='text-white font-semibold'>Products</Link>
                            <Link href="#" className=''>Personal</Link>
                            <Link href="#" className=''>Business</Link>
                            <Link href="#" className=''>Invoices</Link>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <Link href="#" className='text-white font-semibold'>Company</Link>
                            <Link href="#" className=''>About</Link>
                            <Link href="#" className=''>Careers</Link>
                            <Link href="#" className=''>Press Kit</Link>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <Link href="#" className='text-white font-semibold'>Community</Link>
                            <Link href="#" className=''>Refer a Friend</Link>
                            <Link href="#" className=''>Gift</Link>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <Link href="#" className='text-white font-semibold'>Suport</Link>
                            <Link href="#" className=''>Help</Link>
                            <Link href="#" className=''>FAQ</Link>
                            <Link href="#" className=''>Contact</Link>
                        </div>

                        <div className='flex flex-col space-y-2'>
                            <Link href="#" className='text-white font-semibold'>Legal</Link>
                            <Link href="#" className=''>Privacy Policy</Link>
                            <Link href="#" className=''>Terms of Services</Link>
                            <Link href="#" className=''>Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer