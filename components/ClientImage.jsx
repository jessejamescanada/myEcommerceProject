'use client'
import { useState } from 'react'
import urlFor from '../lib/urlFor'
import Image from 'next/image'
import { motion } from 'framer-motion'

function ClientImage({ image }) {
  const [index, setIndex] = useState(0)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.9 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='flex flex-col items-center'
    >
      <Image
        src={urlFor(image[0] && image[index]).url()}
        width={300}
        height={300}
        alt=''
        className='bg-gray-200 p-8 rounded '
      />
      <div className='flex mt-2 justify-center sm:justify-start'>
        {image &&
          image.map((item, i) => (
            <Image
              key={i}
              src={urlFor(item).url()}
              width={300}
              height={300}
              alt=''
              className={
                i === index
                  ? 'w-[70px] h-[70px] cursor-pointer mx-1 bg-[#f02d34] rounded'
                  : 'w-[70px] h-[70px] mx-1 cursor-pointer rounded'
              }
              onMouseEnter={() => setIndex(i)}
            />
          ))}
      </div>
    </motion.div>
  )
}

export default ClientImage
