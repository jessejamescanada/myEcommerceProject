'use client'
import { useStateContext } from '@/app/StateContext'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Toaster } from 'react-hot-toast'

function ClientProductDetails({ products }) {
  const { quantity, increaseQuantity, decreaseQuantity, onAdd } =
    useStateContext()
  const { name, details, price } = products
  return (
    <div>
      <div className='flex flex-col relative items-center sm:items-start z-10'>
        <div className='flex flex-col w-full items-center sm:items-start sm:w-[200px]'>
          <ul>
            <li className='text-2xl font-semibold my-2 text-center sm:text-left'>
              {name}
            </li>
            <li className='font-semibold my-2 text-center sm:text-left'>
              {details}
            </li>
            <li className='font-semibold my-2 text-center sm:text-left'>
              Price: ${price}
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-between border-2 w-[100px]'>
          <AiOutlineMinus
            onClick={() => decreaseQuantity()}
            className='cursor-pointer border-[1px] h-7 w-7'
          />
          <div className='font-semibold '>{quantity}</div>
          <AiOutlinePlus
            onClick={() => increaseQuantity()}
            className='cursor-pointer border-[1px] h-7 w-7'
          />
        </div>
        <Toaster />
        <div className='mt-4'>
          <button
            onClick={() => onAdd(products, quantity)}
            className='px-7 py-2 bg-red-600 outline-transparent rounded cursor-pointer text-white font-semibold active:scale-[.98]'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClientProductDetails
