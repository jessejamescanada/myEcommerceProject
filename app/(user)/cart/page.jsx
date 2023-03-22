import { client } from '../../../lib/sanity.client'
import groq from 'groq'
import ShopCart from '../../../components/ShopCart'

const productQuery = groq`
  *[_type == "product"][0..4]{
    details,
    name,
    price,
    "image": image[0].asset->url,
    slug
  }
`

const cart = async () => {
  const products = await client.fetch(productQuery)

  return (
    <div className='w-full '>
      <ShopCart products={products} />
    </div>
  )
}
export default cart
