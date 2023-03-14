import Image from 'next/image'
import urlFor from '../lib/urlFor'
import Link from 'next/link'

const SlugProductList = ({ allProducts }) => {
  return (
    <div className='w-full '>
      <div className=' flex flex-col lg:flex-row w-[80%] m-auto justify-center mb-8'>
        {allProducts.map((item) => (
          <Link
            key={item.name}
            href={`/post/${item.slug.current}`}
          >
            <div className='flex flex-col items-center justify-center  w-full  my-3 lg:mx-2 lg:h-[210px] lg:w-[200px] bg-gray-200 p-4 rounded transform transition duration-500 hover:scale-110'>
              <div className='w-full text-gray-800'>
                <h2 className='text-center'>{item.name}</h2>
                <p className='text-center mb-1'>${item.price}</p>
              </div>
              <div>
                <Image
                  src={urlFor(item.image).url()}
                  width={100}
                  height={100}
                  alt={item.name}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SlugProductList
