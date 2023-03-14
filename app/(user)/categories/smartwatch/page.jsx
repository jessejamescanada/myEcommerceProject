import groq from 'groq'
import { client } from '../../../../lib/sanity.client'
import SmartWatch from '../../../../components/categoriesPages/SmartWatch'
import Categories from '../../../../components/Categories'

const smartWatchQuery = groq`
   *[_type == "product" && categories.category == "SmartWatch" ]
`

const page = async () => {
  const smartWatchCategory = await client.fetch(smartWatchQuery)

  return (
    <div className='h-[100vh]'>
      <SmartWatch smartWatchCategory={smartWatchCategory} />
      <Categories />
    </div>
  )
}

export default page
