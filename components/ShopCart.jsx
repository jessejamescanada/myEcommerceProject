'use client'
import { useStateContext } from '@/app/StateContext'
import urlFor from '../lib/urlFor'
import Link from 'next/link'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Image from 'next/image'
import getStripe from '../lib/getStripe'

function ShopCart({ products }) {
  const { cartItems, totalPrice, deleteProduct } = useStateContext()

  const handleCheckout = async () => {
    const stripe = await getStripe()

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    })
    if (response.statusCode === 500) return

    const data = await response.json()

    stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <div className='max-w-7xl mx-auto h-auto'>
      <div className='w-[90%]  m-auto flex flex-col items-center justify-center'>
        <h1 className='font-bold text-center text-4xl mb-8 '>
          Your Shopping Cart
        </h1>
        {cartItems.length <= 0 ? <p>Your cart is empty</p> : ''}
        <div className='flex flex-col items-center lg:items-end justify-end w-full'>
          <p className='font-semibold'>Total Price: ${totalPrice}</p>
          <button
            onClick={handleCheckout}
            className='px-7 py-2 mt-1 bg-red-600  rounded cursor-pointer text-white font-semibold active:scale-[.98]'
          >
            Checkout
          </button>
        </div>
        <div className='flex w-full h-full  lg:justify-start items-start mb-9  '>
          <div className='mt-8 md:flex md:flex-col md:w-auto md:h-[500px] md:flex-wrap'>
            {cartItems &&
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className='my-5 sm:w-[70%] md:mx-2'
                >
                  <div className='flex w-full border-b-2'>
                    <ul className='flex flex-col justify-between mx-4 w-full lg:w-[300px]'>
                      <li className='font-semibold text-lg'>{item.name}</li>
                      <li className='font-semibold text-md'>${item.price}</li>
                      <li className='font-semibold text-sm'>
                        Quantity: {item.qty}
                      </li>
                      <Link href={`/post/${item.slug.current}`}>
                        <button className='cursor-pointer py-1 px-3 bg-amber-500 rounded mb-1 text-gray-100'>
                          View Item
                        </button>
                      </Link>
                    </ul>
                    <div className='flex items-center'>
                      <Link href={`/post/${item.slug.current}`}>
                        <Image
                          src={urlFor(item.image[0]).url()}
                          width={75}
                          height={75}
                          alt={item.name}
                          className='cursor-pointer'
                        />
                      </Link>
                    </div>
                    <div className='w-[70px] flex justify-end items-start cursor-pointer'>
                      <AiOutlineCloseCircle
                        onClick={() => deleteProduct(item)}
                        className='text-red-500 text-2xl'
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className='w-full mb-6 '>
          <div className='gradient-02' />
          <h2 className='text-center font-semibold text-3xl  '>
            You May Also Like
          </h2>
          <div>
            <div className='flex w-full  justify-center mt-5   '>
              <div className='flex flex-col w-full justify-center lg:flex-row mt-5  '>
                {products.map((item) => (
                  <div
                    key={item.slug.current}
                    className='my-2 transform transition duration-500 hover:scale-110'
                  >
                    <Link href={`/post/${item.slug.current}`}>
                      <div className='flex flex-col items-center justify-center lg:mx-2 w-full lg:w-[175px] h-[150px] bg-gray-200 py-4 px-2 rounded'>
                        <div className='w-full text-gray-800 whitespace-normal'>
                          <h2 className='text-center'>{item.name}</h2>
                          <p className='text-center mb-1'>${item.price}</p>
                        </div>
                        <div>
                          <Image
                            src={urlFor(item.image).url()}
                            width={50}
                            height={50}
                            alt={item.name}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCart
