import { useCookies } from 'react-cookie'
import { useContext } from 'react'
import CookieAccContext from '../CookieAccContext'

const Cookies = () => {
  const { accCookies, setAccCookies } = useContext(CookieAccContext)
  const [cookies, setCookie] = useCookies(['name'])

  const setCookies = () => {
    const expire = new Date()
    expire.setTime(expire.getTime() + 10000)

    setCookie('Storytime', 'Storytimecookie', {
      path: '/',
      expires: expire
    })
  }

  return (
    <>
      <button
        className='btn'
        id='cookies-btn'
        onClick={() => {
          setCookies()
          setAccCookies(true)
        }}
      >
        Accept Cookies
      </button>
    </>
  )
}

export default Cookies
