"use client"

import React from 'react'
import { DotLoader } from 'react-spinners'

function Spinner() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <DotLoader color="#21C55E" />
    </div>
  )
}

export default Spinner