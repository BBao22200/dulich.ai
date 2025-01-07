'use client'
import React from 'react'
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react'
import { usePathname, useRouter } from 'next/navigation'
import { Architects_Daughter } from 'next/font/google'

import Image from 'next/image'

const ArchitectsDaughter = Architects_Daughter({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
})

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <NextNavbar
      isBordered
      className='min-h-[10vh] relative bg-white px-10 md:px-56'
    >
      <NavbarBrand className='flex items-center gap-3'>
        <Image src={'/logo.png'} alt='airline name' width={50} height={50} />
        <p onClick={() => router.push('/')} className='text-3xl font-medium'>
          <span className={ArchitectsDaughter.className}>dulich.AI</span>
        </p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-11 font-bold' justify='end'>
        <NavbarItem isActive>
          <Link
            href='/'
            aria-current='page'
            className={`${pathname === '/' ? 'text-danger-500' : 'text-black'}`}
          >
            Trang chủ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href='/search-flights'
            className={`${
              pathname.includes('flights') ? 'text-danger-500' : 'text-black'
            }`}
          >
            Tạo lịch trình
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href='/search-hotels'
            className={`${
              pathname.includes('hotels') ? 'text-danger-500' : 'text-black'
            }`}
          >
            Hoạt động & Vui chơi
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify='end'>
          {!userInfo && (
            <>
              <NavbarItem className='hidden lg:flex'>
                <Button
                  onPress={onOpen}
                  color='secondary'
                  variant='flat'
                  className='text-purple-500'
                >
                  Login
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Button}
                  color='danger'
                  onPress={onOpen}
                  variant='flat'
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
          {userInfo && (
            <>
              <Dropdown placement='bottom-end'>
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as='button'
                    className='transition-transform'
                    icon={<AvatarIcon />}
                    classNames={{
                      base: 'bg-gradient-to-br from-[#ff578f] to-[#945bff]',
                      icon: 'text-black/80',
                    }}
                    // name={userInfo.firstName}
                    size='md'
                  />
                </DropdownTrigger>
                <DropdownMenu
                  aria-label='Profile Actions'
                  variant='flat'
                  onAction={(key) => router.push(key as string)}
                >
                  <DropdownItem key='profile' className='h-14 gap-2'>
                    <p className='font-semibold'>Signed in as</p>
                    <p className='font-semibold'>{userInfo.email}</p>
                  </DropdownItem>
                  <DropdownItem key='/my-account'>My Account</DropdownItem>
                  <DropdownItem key='/my-bookings'>My Bookings</DropdownItem>
                  <DropdownItem key='/my-wishlists'>Wishlist</DropdownItem>
                  <DropdownItem key='/logout' color='danger'>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          )}
        </NavbarContent> */}
    </NextNavbar>
  )
}

export default Navbar
