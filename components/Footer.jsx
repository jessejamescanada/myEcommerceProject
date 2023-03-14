import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from 'react-icons/ai'
import Link from 'next/link'

const BelowFooter = () => {
  return (
    <div className='max-w-7xl mx-auto my-6 text-center  text-[#507ca5]'>
      <div className='gradient-05' />
      <p className='font-semibold mb-1'>2023 Chewy Enterprises</p>
      <div className='flex w-full items-center justify-center text-3xl text-[#507ca5]'>
        <Link href={'#'}>
          <AiOutlineTwitter />
        </Link>
        <Link href={'#'}>
          <AiOutlineInstagram />
        </Link>
        <Link href={'#'}>
          <AiOutlineFacebook />
        </Link>
      </div>
    </div>
  )
}

export default BelowFooter
