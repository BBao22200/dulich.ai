import { Container } from '@/components/common'
import { HorizontalBookingForm } from '@/components/form'
import { Image } from '@nextui-org/react'
import React from 'react'

const Search = () => {
  return (
    <Container isHover={false}>
      <div className='flex flex-col xl:flex-row mb-20 mt-10 justify-between gap-10'>
        <div className='relative'>
          <div className='absolute left-0 bottom-60 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-pink-200 to-pink-100 blur-3xl opacity-50 -z-10' />
          <div className='absolute bottom-20 right-0 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-pink-200 to-white blur-3xl opacity-50 -z-10' />
          <div className='text-black flex flex-col gap-5 mt-20'>
            <h2 className='text-4xl md:text-5xl font-medium'>
              Khám Phá Việt Nam Cùng AI
            </h2>
            <h3 className='text-lg md:text-xl text-gray-500'>
              Lên kế hoạch chuyến đi của bạn một cách thông minh và dễ dàng với
              AI của chúng tôi
            </h3>
          </div>
          <div className='mt-32'>
            <HorizontalBookingForm />
          </div>
        </div>
        <div className='xl:w-1/2 relative'>
          <Image
            src='/home/home-bg.png'
            alt='Background'
            className='object-cover h-[70vh] '
            width={'100%'}
          />
        </div>
      </div>
    </Container>
  )
}

export default Search
