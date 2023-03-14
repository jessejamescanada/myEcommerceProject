import Image from 'next/image'
import urlFor from '../lib/urlFor'
import ClientSideRoute from '../components/ClientSideRoute'

function ProductList({ products }) {
  return (
    <div className='max-w-7xl mx-auto mb-10 mt-5  '>
      <div className='gradient-03' />
      <h1 className='text-center font-bold text-3xl font-serif'>
        Featured Products
      </h1>
      <div className='flex flex-col sm:flex-row w-[80%] m-auto mt-5'>
        {products.map((item) => (
          <ClientSideRoute
            key={item._id}
            route={`/post/${item.slug.current}`}
          >
            <div className='transform transition duration-500 hover:scale-110'>
              <div className='flex flex-col items-center justify-center mx-2 my-5 sm:my-0'>
                <Image
                  src={urlFor(item.image).url()}
                  width={250}
                  height={250}
                  alt={item.name}
                />
                <p className='font-semibold tracking-wide text-center'>
                  {item.name}
                </p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  )
}

export default ProductList
