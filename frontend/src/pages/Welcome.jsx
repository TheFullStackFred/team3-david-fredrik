import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CookieAccContext from '../CookieAccContext'
import Cookies from '../components/Cookies'

const Welcome = () => {
  const cookieAcc = useContext(CookieAccContext)

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dn8hfzpm2'
    }
  })

  const myImage = cld.image('book_juxky0')

  return (
    <div className='welcome'>
      {!cookieAcc.accCookies && <Cookies />}
      {cookieAcc.accCookies && (
        <>
          <AdvancedImage className='image' cldImg={myImage} />
          <div className='link'>
            {
              <Link to={'/home'}>
                <button className='btn get-started-btn'>Get started</button>
              </Link>
            }
          </div>
        </>
      )}
    </div>
  )
}

export default Welcome
