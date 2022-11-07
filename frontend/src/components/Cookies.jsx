import { useCookies } from 'react-cookie'
import { useState, useContext } from 'react'
import CookieAccContext from '../CookieAccContext'

const Cookies = () => {
  const { accCookies, setAccCookies } = useContext(CookieAccContext)

  console.log(accCookies)

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
        Cookies
      </button>
    </>
  )
}

export default Cookies
