import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

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
