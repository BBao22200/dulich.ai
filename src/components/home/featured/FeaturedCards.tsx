'use client'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
import Image from 'next/image'

interface CardData {
  imageUrl: string
  title: string
  description: string
}

const cardData: CardData[] = [
  {
    imageUrl: '/home/benefit.png',
    title: 'Lên lịch trình đúng ý',
    description: 'Theo sở thích riêng của bạn',
  },
  {
    imageUrl: '/home/benefit.png',
    title: 'Tích hợp bản đồ',
    description: 'Gợi ý đường đi ngắn nhất',
  },
  {
    imageUrl: '/home/benefit.png',
    title: 'Nhận ngay combo ưu đãi đến 40%',
    description: 'Khi mua hoạt động vui chơi trên lịch trình',
  },
]

const FeaturedCards = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {cardData.map((card, index) => (
          <Card key={index} className='max-w-[400px]'>
            <CardBody className='p-0'>
              <Image
                src={card.imageUrl}
                alt={`Image for ${card.title}`}
                height={300}
                width={400}
                objectFit='cover'
              />
            </CardBody>
            <CardFooter className='flex-col items-start'>
              <h2 className='text-xl font-semibold'>{card.title}</h2>
              <p className='text-gray-600'>{card.description}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCards
