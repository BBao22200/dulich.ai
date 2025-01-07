import { Container } from '@/components/common'
import { Button, Chip } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const Benefits = () => {
  const data = [
    {
      title: 'Lên lịch trình đúng ý',
      description: 'Theo sở thích riêng của bạn',
      badge: 'Lịch trình',
      badgeType: 'primary',
    },
    {
      title: 'Tích hợp bản đồ',
      description: 'Gợi ý đường đi ngắn nhất',
      badge: 'Bản đồ',
      badgeType: 'secondary',
    },
    {
      title: 'Nhận ngay combo ưu đãi đến 40%',
      description: 'Khi mua hoạt động vui chơi trên lịch trình',
      badge: 'Ưu đãi',
      badgeType: 'danger',
    },
  ]

  return (
    <Container>
      <div className='flex flex-col xl:flex-row xl:gap-36 items-center bg-gradient-to-r from-pink-100 via-white to-pink-100 rounded-xl p-4 md:p-8'>
        <Image src='/home/benefit.png' alt='benefit' height={600} width={600} />
        <div className='flex flex-col gap-5'>
          <div>
            <p className='uppercase text-neutral-600 font-bold'>Lợi ích</p>
            <h2 className='font-semibold text-4xl mt-5'>Những tính năng</h2>
          </div>
          <div className='flex flex-col gap-10'>
            {data.map((feature) => (
              <div key={feature.title} className='flex flex-col gap-3'>
                <Chip
                  color={
                    feature.badgeType as
                      | 'danger'
                      | 'default'
                      | 'primary'
                      | 'secondary'
                      | 'success'
                      | 'warning'
                  }
                >
                  {feature.badge}
                </Chip>
                <h4 className='block text-xl font-semibold'>{feature.title}</h4>
                <p className='block  text-neutral-500'>{feature.description}</p>
              </div>
            ))}
          </div>
          <Button color='danger' variant='ghost' size='lg' className='my-10'>
            Khám phá ngay
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Benefits
