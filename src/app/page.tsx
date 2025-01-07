'use client'

import { Benefits } from '@/components/home/benefits'
import { Search } from '@/components/home/search'
import { SimCard } from '@/components/home/sim-card'
import { Suggestions } from '@/components/home/suggestions'

import React from 'react'

const Home = () => {
  return (
    <div className='max-w-[100vw] overflow-x-hidden'>
      <Search />
      <Benefits />
      <SimCard />
      <Suggestions />
    </div>
  )
}

export default Home
