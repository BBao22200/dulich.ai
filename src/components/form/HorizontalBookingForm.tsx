import { useEffect, useRef, useState } from 'react'
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
  FaClock,
} from 'react-icons/fa'

const HorizontalBookingForm = () => {
  const [location, setLocation] = useState('Humboldt Park, Chicago, IL')
  const [dates, setDates] = useState('')
  const [guests, setGuests] = useState('')
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const locations = [
    { id: 1, name: 'Ha Noi, Viet Nam' },
    { id: 2, name: 'San Diego, CA' },
    { id: 3, name: 'Humboldt Park' },
    { id: 4, name: 'Bangor' },
  ]

  const handleLocationSelect = (locationName: string) => {
    setLocation(locationName)
    setShowLocationDropdown(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowLocationDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='bg-white rounded-full shadow-common p-2 w-[60vw] absolute z-20'>
      <div className='flex items-center md:divide-x divide-gray-200 justify-end'>
        <div className='hidden md:block flex-1 px-6 py-2 relative'>
          <div
            ref={buttonRef}
            className='flex items-center gap-3 cursor-pointer group'
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
          >
            <div className='text-gray-400 group-hover:text-gray-600 transition-colors'>
              <FaMapMarkerAlt className='w-5 h-5' />
            </div>
            <div>
              <p className=' font-medium text-gray-900 group-hover:text-black transition-colors whitespace-nowrap text-clip overflow-hidden'>
                {location}
              </p>
              <p className='text-base text-gray-500 whitespace-nowrap text-clip overflow-hidden'>
                Điểm đến
              </p>
            </div>
          </div>

          {showLocationDropdown && (
            <div
              ref={dropdownRef}
              className='absolute top-full left-0 w-full max-w-md bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] z-20 mt-5 overflow-hidden transition-all duration-200 ease-in-out'
            >
              <div className='py-3'>
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className='w-full px-6 py-3.5 flex items-center gap-4 hover:bg-gray-50 cursor-pointer'
                    onClick={() => handleLocationSelect(loc.name)}
                  >
                    <FaClock className='w-4 h-4 text-gray-400' />
                    <p className='text-[15px] text-gray-600 hover:text-gray-900'>
                      {loc.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className='hidden md:block flex-1 px-6 py-2'>
          <div className='flex items-center gap-3 cursor-pointer group'>
            <div className='text-gray-400 group-hover:text-gray-600 transition-colors'>
              <FaCalendarAlt className='w-5 h-5' />
            </div>
            <div>
              <p className=' font-medium text-gray-900 group-hover:text-black transition-colors truncate whitespace-nowrap'>
                {dates || 'Chọn ngày'}
              </p>
              <p className='text-base text-gray-500 whitespace-nowrap text-clip overflow-hidden'>
                Check In - Check Out
              </p>
            </div>
          </div>
        </div>

        <div className='hidden md:block flex-1 px-6 py-2'>
          <div className='flex items-center gap-3 cursor-pointer group'>
            <div className='text-gray-400 group-hover:text-gray-600 transition-colors'>
              <FaUsers className='w-5 h-5' />
            </div>
            <div>
              <p className=' font-medium text-gray-900 group-hover:text-black transition-colors whitespace-nowrap text-clip overflow-hidden'>
                {guests || 'Số lượng người'}
              </p>
              <p className='text-base text-gray-500 whitespace-nowrap text-clip overflow-hidden'>
                Thêm người
              </p>
            </div>
          </div>
        </div>

        <div className='px-2'>
          <button className='ml-3 rounded-full bg-pink-500 text-white w-14 h-14 flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-colors'>
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HorizontalBookingForm
