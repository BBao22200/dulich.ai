'use client'
import React from 'react'
import { Architects_Daughter } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'

const ArchitectsDaughter = Architects_Daughter({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
})
const Footer = () => {
  const router = useRouter()
  return (
    <footer
      className='min-h-[20vh] px-48 py-10 relative bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: 'url("/home/home-bg.jpg")',
      }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl'></div>
      <div className='relative z-10 p-4 grid grid-cols-4 gap-20 text-white'>
        <div>
          <div className='cursor-pointer' onClick={() => router.push('/')}>
            <Image src='/logo.png' alt='logo' height={80} width={80} />
            <span className='text-xl uppercase font-medium italic'>
              <span className={ArchitectsDaughter.className}>DULICH.AI</span>
            </span>
          </div>
          <p>
            Khám phá các chuyến du lịch được sắp xếp hoàn hảo với ứng dụng du
            lịch tất cả trong một của chúng tôi. Dễ dàng tìm kiếm, so sánh và
            đặt vé máy bay, khách sạn và tour du lịch cho chuyến phiêu lưu tiếp
            theo của bạn, được hỗ trợ bởi Next.js
          </p>
        </div>
        <div className='flex flex-col gap-3 pt-10'>
          <h3 className='text-3xl font-medium'>Destinations</h3>
          <ul className='flex flex-col gap-1'>
            <li className='cursor-pointer '>USA</li>
            <li className='cursor-pointer '>India</li>
            <li className='cursor-pointer '>France</li>
            <li className='cursor-pointer '>United Kingdom</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3 pt-10'>
          <h3 className='text-3xl font-medium'>Adventures</h3>
          <ul className='flex flex-col gap-1'>
            <li className='cursor-pointer '>Extreme</li>
            <li className='cursor-pointer '>In the air</li>
            <li className='cursor-pointer '>Nature and Wildlife</li>
            <li className='cursor-pointer '>Winter Sports</li>
            <li className='cursor-pointer '>Outdoor Parks</li>
            <li className='cursor-pointer '>Water Sports</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3 pt-10'>
          <h3 className='text-3xl font-medium'>Get in Touch</h3>

          <ul className='flex gap-5 mt-5'>
            <li className='bg-opacity-30 rounded-lg text-3xl p-3 cursor-pointer hover:bg-opacity-50 transition-all duration-300 bg-gray-500'>
              <FaFacebookF />
            </li>
            <li className='bg-opacity-30 rounded-lg text-3xl p-3 cursor-pointer hover:bg-opacity-50 transition-all duration-300 bg-gray-500'>
              <FaInstagram />
            </li>
            <li className='bg-opacity-30 rounded-lg text-3xl p-3 cursor-pointer hover:bg-opacity-50 transition-all duration-300 bg-gray-500'>
              <FaLinkedinIn />
            </li>
            <li className='bg-opacity-30 rounded-lg text-3xl p-3 cursor-pointer hover:bg-opacity-50 transition-all duration-300 bg-gray-500'>
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
