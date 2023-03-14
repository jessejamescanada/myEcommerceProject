import Image from 'next/image'
import urlFor from '../../lib/urlFor'
import Link from 'next/link'

const SmartWatch = ({ smartWatchCategory }) => {
  return (
    <div className='flex flex-col items-center justify-start mx-auto  md:h-[80vh]'>
      <h1 className='text-3xl tracking-wide'>Smart Watches</h1>
      <div className='flex flex-col md:flex-row m-auto'>
        {smartWatchCategory.map((item) => (
          <Link
            key={item.name}
            href={`/post/${item.slug.current}`}
          >
            <div className='mx-10 my-5 flex flex-col items-center justify-center'>
              <div>
                <Image
                  src={urlFor(item.image[0]).url()}
                  width={150}
                  height={150}
                  alt=''
                />
              </div>
              <h2>{item.name}</h2>
              <h2>${item.price}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SmartWatch
