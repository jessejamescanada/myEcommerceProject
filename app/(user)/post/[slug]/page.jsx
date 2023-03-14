import groq from 'groq'
import { client } from '../../../../lib/sanity.client'
import Image from 'next/image'
import urlFor from '../../../../lib/urlFor'
import ClientImage from '../../../../components/ClientImage'
import ClientProductDetails from '../../../../components/ClientProductDetails'
import SlugProductList from '../../../../components/SlugProductList'

export const revalidate = 900

export async function generateStaticParams() {
  const query = groq`
        *[_type == "product"]
        {
            slug
        }
    `
  const slugs = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug: slug,
  }))
}

async function Product({ params: { slug } }) {
  const query = groq`
        *[_type == "product" && slug.current == $slug][0]
        {
            ...,
            details,
            name,
            price,
            "image": image[].asset->url,
            slug
        }
    `

  const allProductQuery = groq`
//   add [0..4] below to limit amount of results returned
*[_type == "product"][0..4]{
  details,
  name,
  price,
  "image": image[0].asset->url,
  slug,
  _id
}
`
  const products = await client.fetch(query, { slug })
  const allProducts = await client.fetch(allProductQuery)
  const { details, image, name, price } = products

  return (
    <div className='w-full mt-8 overflow-hidden'>
      <div className='w-[80%] flex flex-col sm:flex-row m-auto  justify-around'>
        <div>
          <div>
            <ClientImage image={image} />
          </div>
        </div>
        <div>
          <ClientProductDetails products={products} />
        </div>
      </div>
      <div className='w-full mt-10'>
        <h2 className='text-center font-semibold text-3xl mb-4 relative z-10'>
          You May Also Like
        </h2>
        <div className=''>
          <div className='gradient-03' />
          <SlugProductList allProducts={allProducts} />
        </div>
      </div>
    </div>
  )
}

export default Product
