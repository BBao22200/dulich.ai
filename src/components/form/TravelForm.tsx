import React, { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'

interface TravelFormProps {
  onSubmit: (formData: {
    origin: string
    destination: string
    departureDate: string
    returnDate: string
  }) => void
}

const TravelForm: React.FC<TravelFormProps> = ({ onSubmit }) => {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      origin,
      destination,
      departureDate,
      returnDate,
    })
  }

  return (
    <div className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-2 gap-4 w-full max-w-4xl'
      >
        <Input
          type='text'
          label='Điểm đi'
          placeholder='Nhập điểm xuất phát'
          variant='bordered'
          color='secondary'
          startContent={<FaMapMarkerAlt />}
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />

        <Input
          type='text'
          label='Điểm đến'
          placeholder='Bạn muốn đi đâu?'
          variant='bordered'
          color='danger'
          startContent={<FaMapMarkerAlt />}
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <Input
          type='date'
          label='Ngày đi'
          variant='bordered'
          color='danger'
          startContent={<FaCalendarAlt />}
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />

        <Input
          type='date'
          label='Ngày đến'
          variant='bordered'
          color='danger'
          startContent={<FaCalendarAlt />}
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />

        <div className='col-span-2 mt-4'>
          <Button
            type='submit'
            color='danger'
            variant='shadow'
            size='lg'
            className='w-full'
          >
            Search Flights
          </Button>
        </div>
      </form>
    </div>
  )
}

export default TravelForm
