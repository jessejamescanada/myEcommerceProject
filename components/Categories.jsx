'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from 'react-icons/md'

const Categories = () => {
  const [isOn, setIsOn] = useState(false)
  const toggleSwitch = () => setIsOn((prev) => !prev)

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }
  return (
    <div className='w-full my-10'>
      <div className='w-[100%] md:w-[60%] m-auto flex items-center relative'>
        <div
          onClick={toggleSwitch}
          className={`w-[100%] h-[100px] m-auto flex justify-${
            isOn ? 'end z-0' : 'start z-10'
          } rounded p-2 cursor-pointer`}
        >
          <motion.div
            layout
            transition={spring}
            className={`${
              isOn
                ? 'w-[280px] h-[80px]  rounded z-10 hidden lg:flex'
                : 'w-[100%] h-[80px]  rounded z-10'
            }  flex items-center justify-start text-center text-gray-200 text-lg bg-gradient-to-r from-gray-500 to-black-500`}
          >
            <p className='flex items-center p-2 ml-6 font-semibold tracking-wide font-serif'>
              <span
                className={` mr-2 text-lg mt-1 ${isOn ? 'block' : 'hidden'}`}
              >
                <MdOutlineKeyboardDoubleArrowLeft />
              </span>
              Categories
              <span
                className={`ml-2 text-lg mt-1 ${isOn ? 'hidden' : 'block'}`}
              >
                <MdOutlineKeyboardDoubleArrowRight />
              </span>
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`flex justify-around lg:justify-start w-full lg:w-[50%] left-0 absolute lg:left-[5%]  `}
        >
          <Link
            href={'/categories/headphones'}
            className={`${
              !isOn ? 'opacity-0' : 'opacity-100 ease-in duration-500'
            } mr-4 z-0  `}
            // className='mr-2 z-0'
          >
            <h3 className='p-2 bg-gradient-to-r from-[#ADACAB] to-[#383838] rounded tracking-wide active:scale-[.98] text-gray-100'>
              Headphones
            </h3>
          </Link>
          <Link
            href={'/categories/stereo'}
            className={`${
              !isOn ? 'opacity-0' : 'opacity-100 ease-in duration-700'
            } mr-4 z-0  `}
          >
            <h3 className='p-2 px-3 bg-gradient-to-r from-[#383838] to-[#ADACAB] rounded tracking-wide active:scale-[.98] text-gray-100'>
              Stereos
            </h3>
          </Link>
          <Link
            href={'/categories/smartwatch'}
            className={`${
              !isOn ? 'opacity-0' : 'opacity-100 ease-in duration-1000'
            }  z-0  `}
          >
            <h3 className='p-2 bg-gradient-to-r from-[#8A8A8A] to-[#2E2D2B] rounded tracking-wide active:scale-[.98] text-gray-100'>
              Smart Watches
            </h3>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Categories
