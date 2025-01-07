import React from 'react'

import FeaturedCards from './FeaturedCards'
import { Button } from '@nextui-org/react'

const Featured = () => {
  return (
    <div className='my-[20vh] h-full mx-20 pt-10 text-center'>
      <h1 className='text-4xl font-bold mb-2'>
        Dulich.ai lên kế hoạch cùng bạn
      </h1>
      <div>
        <FeaturedCards />
        <Button color='danger' variant='shadow' size='lg'>
          Tạo lịch trình ngay
        </Button>
      </div>
    </div>
  )
}

export default Featured
