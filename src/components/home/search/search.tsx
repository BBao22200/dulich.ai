/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Image from 'next/image'
import { TravelForm } from '@/components/form'

const Search = () => {
  return (
    <div className='h-[80vh] flex items-center justify-center'>
      <div className='absolute left-0 top-0 h-[100vh] w-[100vw] max-w-[100vw] overflow-hidden overflow-x-hidden opacity-95'>
        <div className='absolute inset-0 bg-black/50 z-10'></div>
        <Image
          src='/home/home-bg.jpg'
          fill
          alt='Search'
          className='object-cover'
        />
      </div>
      <div className='absolute h-[50vh] flex flex-col gap-5'>
        <div className='text-white text-center flex flex-col gap-5'>
          <h2 className='text-6xl font-extrabold'>Khám Phá Việt Nam Cùng AI</h2>
          <h3 className='text-xl font-bold'>
            Lên kế hoạch chuyến đi của bạn một cách thông minh và dễ dàng
          </h3>
        </div>
        <div className='flex justify-center'>
          <TravelForm
            onSubmit={(formData) => {
              console.log(formData)
              // Handle form submission
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Search
