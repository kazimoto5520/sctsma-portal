import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

function NotFoundInvoice() {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center my-4'>
        <Image src="/img/not-found.png" width={140} height={140} alt='Page not found'/>
        <div className='flex flex-col mt-2'>
            <h1 className='font-semibold text-lg'>You don{"'"}t have any invoice </h1>
            <p className='text-sm text-gray-700'>Please try again with another keywords or maybe use generic term</p>
        </div>

        <div className='mt-4'>
            <Button size="lg" className="font-semibold" onClick={()=> router.push("/invoices/submit-invoice")}>Submit Invoice</Button>
        </div>
    </div>
  )
}

export default NotFoundInvoice