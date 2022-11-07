import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import CookieAccContext from './CookieAccContext'
import Welcome from './pages/Welcome'
import Home from './pages/Home'

function App() {
  const [accCookies, setAccCookies] = useState(false)

  return (
    <CookieAccContext.Provider value={{ accCookies, setAccCookies }}>
      <div className='App'>
        <BrowserRouter>
          <div className='pages'>
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </CookieAccContext.Provider>
  )
}
export default App
