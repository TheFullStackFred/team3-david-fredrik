import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

import { fill } from '@cloudinary/url-gen/actions/resize'

const Welcome = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dn8hfzpm2'
    }
  })

  const myImage = cld.image('book_juxky0')

  return (
    <div className='welcome'>
      <div>
        <AdvancedImage className='image' cldImg={myImage} />
      </div>
    </div>
  )
}

export default Welcome
