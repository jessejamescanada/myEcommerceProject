'use client'
import Image from 'next/image'
import urlFor from '../lib/urlFor'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

const Banner = ({ bannerData }) => {
  const { product, buttonText, details, largeText, smallText, image } =
    bannerData[0]

  // get product text and split each character
  const framerProduct = product
  const framerArray = framerProduct.split('')

  // framer motion function for Banner Product Text
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.7,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='max-w-7xl mx-auto p-2 sm:p-10 '
    >
      <div className='m-auto h-[50vh] sm:h-[50vh] w-full bg-zinc-200 rounded-xl '>
        <div className=' p-5 pt-[40px] m-auto'>
          <div className=' relative'>
            <motion.div
              variants={container}
              initial='hidden'
              animate='show'
              className='text-5xl flex font-semibold mt-4  sm:text-7xl lg:text-9xl pl-0 sm:pl-[50px] absolute top-2/3 text-white tracking-wide'
            >
              {framerArray.map((letter) => (
                <motion.p
                  variants={item}
                  key={uuidv4()}
                >
                  {letter}
                </motion.p>
              ))}
            </motion.div>

            <p className='text-3xl text-gray-700 sm:text-4xl p-0 sm:px-10 tracking-wide font-serif'>
              {largeText}
            </p>
            <motion.div
              initial={{ x: '100vw' }}
              transition={{ delay: 0.4, duration: 0.8 }}
              animate={{ x: 0 }}
              className='absolute w-[150px] sm:w-[200px] left-[50%] sm:left-[71%] top-[200%] sm:top-[80%] -rotate-12'
            >
              <Image
                src={urlFor(image).url()}
                width={200}
                height={200}
                alt='stuff'
                className='w-[150px] sm:w-full'
                priority
              />
            </motion.div>
          </div>
          <div className=' flex h-[35vh] w-full'>
            <div className='flex flex-col w-full px-0 sm:px-10 pb-2 justify-end'>
              <p className='font-semibold text-gray-700'>{smallText}</p>
              <div className='flex w-full items-end justify-between'>
                <h3 className='font-semibold w-[60%] lg:w-full text-xl italic text-gray-700'>
                  {details}
                </h3>
                <Link
                  href={'http://localhost:3000/post/nikki-smart-watch'}
                  className=' z-20'
                >
                  <motion.button
                    initial={{ opacity: 0 }}
                    transition={{ delay: 1.6, duration: 0.2 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='bg-orange-400 w-[120px] font-bold py-2 px-4 rounded text-white pointer transition duration-150 ease-in-out hover:bg-blue-400 active:scale-[.98]'
                  >
                    {buttonText}
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Banner
