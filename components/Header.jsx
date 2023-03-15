'use client'
import Link from 'next/link'
import { useStateContext } from '@/app/StateContext'
import { AiOutlineShopping } from 'react-icons/ai'
import { BsFillMoonStarsFill } from 'react-icons/bs'

function Header({ lightMode, switchDisplayMode }) {
  const { totalQuantities } = useStateContext()
  return (
    <header className='max-w-7xl mx-auto flex items-center justify-between space-x-2 font-bold px-2 sm:px-10 py-5 relative'>
      <div className='gradient-04' />
      <Link href={'/'}>
        <div>Electronics Depot</div>
      </Link>

      <div className=' flex w-[100px] justify-between'>
        <div className='flex items-center relative w-max cursor-pointer select-none'>
          <span>
            <BsFillMoonStarsFill
              onClick={() => switchDisplayMode()}
              className='cursor-pointer text-xl'
            />
          </span>
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
