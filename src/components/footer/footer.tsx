'use client'
import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import { Architects_Daughter } from 'next/font/google'

const ArchitectsDaughter = Architects_Daughter({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
})

const Footer = () => {
  return (
    <footer className='relative py-12 mt-12 text-white overflow-hidden'>
      <div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md'></div>
      <div className='container mx-auto px-4 relative z-20'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center gap-3'>
            <Image
              src={'/logo.png'}
              alt='airline name'
              width={50}
              height={50}
            />
            <p className='text-3xl font-medium text-black'>
              <span className={ArchitectsDaughter.className}>dulich.AI</span>
            </p>
          </div>
          <div className='flex space-x-6'>
            <Link
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook className='text-white hover:text-blue-400 text-2xl' />
            </Link>
            <Link
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter className='text-white hover:text-blue-400 text-2xl' />
            </Link>
            <Link
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram className='text-white hover:text-pink-400 text-2xl' />
            </Link>
            <Link
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='text-white hover:text-blue-400 text-2xl' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
