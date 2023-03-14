import Image from 'next/image'
import urlFor from '../lib/urlFor'
import Link from 'next/link'

const Footer = ({ bottomBannerData }) => {
  const { buttonText, details, discount, image, productName, saleTime } =
    bottomBannerData[0]
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='w-full h-[400px] bg-[#FF9C33] mt-[80px] rounded-2xl'>
        <div className='flex justify-center sm:hidden'>
          <Image
            src={urlFor(image).url()}
            width={175}
            height={175}
            alt='stuff'
            className=''
          />
        </div>
        <div className='w-[90%] sm:w-[80%] m-auto flex  justify-between'>
          <div className='pt-5 sm:pt-[150px] w-1/2 sm:w-auto text-center sm:text-left'>
            <h2 className='text-4xl text-white tracking-wide'>{productName}</h2>
            <h2 className='text-2xl text-white mt-4 sm:ml-4'>{details}</h2>
          </div>
          <div className='hidden sm:inline-block'>
            <Image
              src={urlFor(image).url()}
              width={400}
              height={400}
              alt='stuff'
              className=''
            />
          </div>
          <div className='pt-5 sm:pt-[100px] w-1/2 sm:w-auto text-center sm:text-left'>
            <h2 className='text-4xl text-white tracking-wide'>{discount}</h2>
            <h2 className='text-2xl text-white mt-4 sm:ml-[20px]'>
              {saleTime}
            </h2>
            <Link href={'/categories/headphones'}>
              <button className='px-6 py-2 bg-[#4385F1] text-white rounded cursor-pointer uppercase mt-4 sm:ml-[40px] active:scale-[.98]'>
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
