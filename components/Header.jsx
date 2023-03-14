'use client'
import Link from 'next/link'
import { useStateContext } from '@/app/StateContext'
import { AiOutlineShopping } from 'react-icons/ai'

function Header({ lightMode, switchDisplayMode }) {
  const { totalQuantities } = useStateContext()
  return (
    <header className='max-w-7xl mx-auto flex items-center justify-between space-x-2 font-bold px-2 sm:px-10 py-5 relative'>
      <div className='gradient-04' />
      <Link href={'/'}>
        <div>Electronics Depot</div>
      </Link>

      <div className=' flex w-[150px] justify-between'>
        <div className='flex items-center relative w-max cursor-pointer select-none'>
          <span className='text-sm font-bold mr-3'>
            {lightMode ? 'Dark' : 'Light'}
          </span>
          <input
            onClick={() => switchDisplayMode()}
            type='checkbox'
            className='appearance-none transition-colors cursor-pointer w-10 h-5 rounded-full focus:outline-none  bg-gray-100'
          />
        </div>

        <div className='relative'>
          <Link href={'/cart'}>
            <button>
              <AiOutlineShopping className='relative text-[60px] lg:text-[35px] ' />
              <span className='absolute text-[22px] right-[23px] top-[18px] lg:text-[12px]  lg:w-[18px] text-center  lg:h-[18px]  lg:right-[8px]  lg:top-[12px] text-red-500'>
                {totalQuantities}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
