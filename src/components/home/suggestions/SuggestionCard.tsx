import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'

export type ServiceType =
  | 'Vé tham quan'
  | 'Tour'
  | 'Hoạt động trải nghiệm'
  | 'Di chuyển'
  | 'Tiện ích dịch vụ'
  | 'Sim card / wifi'

export type FilterType = ServiceType | 'Tất cả'

export interface Service {
  id: number
  name: string
  description: string
  price: number
  rating: number
  type: ServiceType
  imageUrl: string
}

const SuggestionCard = ({ service }: { service: Service }) => {
  return (
    <Card className='w-full hover:shadow-lg hover:scale-[1.02] cursor-pointer'>
      <CardBody className='p-0'>
        <Image
          src={service.imageUrl}
          alt={service.name}
          className='w-full h-64 object-cover rounded-none'
          width={'100%'}
        />
      </CardBody>
      <CardFooter className='flex-col items-start p-4'>
        <h3 className='text-lg font-semibold'>{service.name}</h3>
        <p className='text-sm text-gray-600 mt-1'>{service.description}</p>
        <div className='w-full'>
          <p className='text-sm text-yellow-500'>
            ★ {service.rating.toFixed(1)}
          </p>
          <p className='text-lg font-bold text-blue-600 mt-2'>
            ${service.price}
          </p>
        </div>
        <span className='mt-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full'>
          {service.type}
        </span>
      </CardFooter>
    </Card>
  )
}

export default SuggestionCard
