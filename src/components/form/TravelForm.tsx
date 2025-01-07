import React, { useState } from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { Select, SelectItem } from '@nextui-org/react'

interface TravelFormProps {
  onSubmit: (formData: {
    origin: string
    destination: string
    departureDate: string
    returnDate: string
    people: string
  }) => void
}

const peopleOptions = [
  { key: '1', label: '1 người' },
  { key: '2', label: '2 người' },
  { key: '3', label: '3 người' },
  { key: '4', label: '4 người' },
  { key: '5', label: 'Trên 5 người' },
]

const TravelForm: React.FC<TravelFormProps> = ({ onSubmit }) => {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [people, setPeople] = useState('1')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      origin,
      destination,
      departureDate,
      returnDate,
      people,
    })
  }

  return (
    <div className='bg-gradient-to-r from-pink-50 via-white to-pink-50 border border-gray-200 rounded-xl p-6 lg:w-[100vh]'>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 gap-10'
      >
        <Input
          type='text'
          label='Điểm đi'
          placeholder='Nhập điểm xuất phát'
          variant='bordered'
          color='danger'
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

        <Select
          label='Số người'
          placeholder='Chọn số người'
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          variant='bordered'
          color='danger'
          startContent={<FaUsers />}
          className='w-full md:col-span-2'
        >
          {peopleOptions.map((option) => (
            <SelectItem key={option.key} value={option.key}>
              {option.label}
            </SelectItem>
          ))}
        </Select>

        <div className='w-full md:col-span-2 flex justify-center mt-4'>
          <Button type='submit' color='danger' size='lg' className='w-[200px]'>
            Lập kế hoạch với AI
          </Button>
        </div>
      </form>
      <div className='col-span-2 mt-4'></div>
    </div>
  )
}

export default TravelForm
