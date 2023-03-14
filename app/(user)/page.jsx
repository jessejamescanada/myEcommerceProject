import groq from 'groq'
import { client } from '../../lib/sanity.client'
import ProductList from '../../components/ProductList'
import Banner from '../../components/Banner'
import BelowBanner from '../../components/BelowBanner'
import Categories from '../../components/Categories'

export const revalidate = 900

const productQuery = groq`
  *[_type == "product"][0..4]{
    details,
    name,
    price,
    "image": image[0].asset->url,
    categories,
    slug
  }
`

const bannerQuery = groq`
  *[_type == "banner"]
`
const bottomBannerQuery = groq`
  *[_type == "bottomBanner"]
`

const page = async () => {
  const products = await client.fetch(productQuery)
  const bannerData = await client.fetch(bannerQuery)
  const bottomBannerData = await client.fetch(bottomBannerQuery)

  return (
    <>
      <Banner bannerData={bannerData} />
      <ProductList products={products} />
      <Categories />
      <BelowBanner bottomBannerData={bottomBannerData} />
    </>
  )
}

export default page
