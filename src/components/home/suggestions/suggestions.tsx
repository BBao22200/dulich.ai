'use client'
import { useState } from 'react'
import { Button } from '@nextui-org/react'

import { Container } from '@/components/common'

import SuggestionCard, { Service, ServiceType } from './SuggestionCard'

const services: Service[] = [
  {
    id: 1,
    name: 'City Tour Hà Nội',
    description: 'Khám phá thủ đô trong 1 ngày',
    price: 50,
    rating: 4.5,
    type: 'Tour',
    imageUrl: '/home/hanoi-city-tour.jpeg',
  },
  {
    id: 2,
    name: 'Vé Vịnh Hạ Long',
    description: 'Tham quan kỳ quan thiên nhiên thế giới',
    price: 30,
    rating: 4.8,
    type: 'Vé tham quan',
    imageUrl: '/home/home-bg.jpg',
  },
  {
    id: 3,
    name: 'Trải nghiệm làm gốm Bát Tràng',
    description: 'Học cách làm gốm truyền thống',
    price: 25,
    rating: 4.2,
    type: 'Hoạt động trải nghiệm',
    imageUrl: '/home/battrang.jpg',
  },
  {
    id: 4,
    name: 'Thuê xe máy Đà Nẵng',
    description: 'Tự do khám phá thành phố',
    price: 10,
    rating: 4.0,
    type: 'Di chuyển',
    imageUrl: '/home/moto-bike.jpg',
  },
  {
    id: 5,
    name: 'Dịch vụ đón sân bay Phú Quốc',
    description: 'Đưa đón tận nơi, an toàn, tiện lợi',
    price: 15,
    rating: 4.6,
    type: 'Tiện ích dịch vụ',
    imageUrl: '/home/phu-quoc-airport.jpg',
  },
  {
    id: 6,
    name: 'Sim 4G Du lịch Việt Nam',
    description: 'Kết nối mạng toàn quốc 7 ngày',
    price: 8,
    rating: 4.3,
    type: 'Sim card / wifi',
    imageUrl: '/home/sim-4g.webp',
  },
]

const ALL_OPTION = 'Tất cả'

const serviceTypes: (ServiceType | typeof ALL_OPTION)[] = [
  ALL_OPTION,
  'Vé tham quan',
  'Tour',
  'Hoạt động trải nghiệm',
  'Di chuyển',
  'Tiện ích dịch vụ',
  'Sim card / wifi',
]

const Suggestions = () => {
  const [selectedType, setSelectedType] = useState<
    ServiceType | typeof ALL_OPTION
  >(ALL_OPTION)

  const filteredServices =
    selectedType === ALL_OPTION
      ? services
      : services.filter((service) => service.type === selectedType)

  return (
    <Container isHover={false}>
      <h1 className='text-3xl font-bold my-8'>
        🏖 Khám phá nhiều hoạt động và dịch vụ du lịch
      </h1>
      <div className='mb-8 overflow-x-auto'>
        <ul className='flex gap-2 mb-5 flex-nowrap min-w-max'>
          {serviceTypes.map((type) => (
            <li key={type}>
              <Button
                color='primary'
                variant={selectedType === type ? 'solid' : 'ghost'}
                className='capitalize whitespace-nowrap'
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
        {filteredServices.map((service) => (
          <SuggestionCard key={service.id} service={service} />
        ))}
      </div>
      <div className='flex justify-center'>
        <Button className='mt-10' color='danger' variant='ghost' size='lg'>
          Xem tất cả hoạt động
        </Button>
      </div>
    </Container>
  )
}

export default Suggestions
