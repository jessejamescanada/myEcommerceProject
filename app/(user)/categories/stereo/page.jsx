import groq from 'groq'
import { client } from '../../../../lib/sanity.client'
import Stereo from '../../../../components/categoriesPages/Stereo'
import Categories from '../../../../components/Categories'

const stereoQuery = groq`
   *[_type == "product" && categories.category == "Stereo" ]
`

const page = async () => {
  const stereoCategory = await client.fetch(stereoQuery)

  return (
    <div className='h-[100vh]'>
      <Stereo stereoCategory={stereoCategory} />
      <Categories />
    </div>
  )
}

export default page
