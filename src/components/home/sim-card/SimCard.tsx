import { Button, Card, CardBody, Image } from '@nextui-org/react'
import { FaRocket, FaBoxes, FaHeadset, FaBolt, FaGift } from 'react-icons/fa'

import { Container } from '@/components/common'

const SimCard = () => {
  const benefits = [
    {
      icon: <FaRocket className='text-blue-500' />,
      text: 'Kích hoạt nhanh chóng, sử dụng ngay lập tức',
    },
    {
      icon: <FaBoxes className='text-green-500' />,
      text: 'Gói cước đa dạng, phù hợp mọi nhu cầu',
    },
    {
      icon: <FaHeadset className='text-purple-500' />,
      text: 'Hỗ trợ kỹ thuật 24/7',
    },
    {
      icon: <FaBolt className='text-yellow-500' />,
      text: 'Tốc độ 4G/5G siêu nhanh trên toàn quốc',
    },
    {
      icon: <FaGift className='text-red-500' />,
      text: 'Ưu đãi đặc biệt cho khách hàng thường xuyên',
    },
  ]

  return (
    <Container>
      <Card className='w-full shadow-none'>
        <CardBody className='bg-gradient-to-r from-blue-50 via-white to-blue-50'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 p-6'>
              <h2 className='text-2xl font-bold mb-4'>
                SIM / e-SIM 4G
                <span className='text-red-500'> chỉ từ 59.000đ</span> Nhanh
                Chóng, Tiết Kiệm, Kết Nối Mọi Nơi
              </h2>
              <ul className='list-disc list-inside space-y-2'>
                {benefits.map((benefit, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='mr-3 mt-1'>{benefit.icon}</span>
                    <span className='text-gray-700'>{benefit.text}</span>
                  </li>
                ))}
              </ul>
              <Button
                className='mt-10'
                color='danger'
                variant='ghost'
                size='lg'
              >
                Khám phá ngay
              </Button>
            </div>
            <div className='w-full md:w-1/2'>
              <Image
                src='/home/sim-card.webp'
                alt='SIM Card Benefits'
                width={'100%'}
                height={400}
                className='object-cover w-full h-full'
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Container>
  )
}

export default SimCard
