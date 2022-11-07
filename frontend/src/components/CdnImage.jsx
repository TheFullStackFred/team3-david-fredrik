import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

const CdnImage = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dn8hfzpm2'
    }
  })

  const myImage = cld.image('book_juxky0')

  return (
    <>
      <AdvancedImage className='image' cldImg={myImage} />
    </>
  )
}

export default CdnImage
