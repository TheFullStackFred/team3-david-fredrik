import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CookieAccContext from '../CookieAccContext'
import Cookies from '../components/Cookies'
import CdnImage from '../components/CdnImage'

const Welcome = () => {
  const cookieAcc = useContext(CookieAccContext)

  return (
    <div className='welcome'>
      {!cookieAcc.accCookies && <Cookies />}
      {cookieAcc.accCookies && (
        <>
          <CdnImage />
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
