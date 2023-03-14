import groq from 'groq'
import { client } from '../../../../lib/sanity.client'
import Headphones from '../../../../components/categoriesPages/Headphones'
import Categories from '../../../../components/Categories'

const headphoneQuery = groq`
   *[_type == "product" && categories.category == "Headphones" ]
`

const page = async () => {
  const headPhoneCategory = await client.fetch(headphoneQuery)

  return (
    <div>
      <Headphones headPhoneCategory={headPhoneCategory} />
      <Categories />
    </div>
  )
}

export default page
