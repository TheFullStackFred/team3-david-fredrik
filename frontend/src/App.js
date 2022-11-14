import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import CookieAccContext from './CookieAccContext'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import HamburgerMenu from './components/HamburgerMenu'
import LogRocket from 'logrocket'

LogRocket.init('eifezl/team3-david-fredrik')
LogRocket.identify('eifezl/team3-david-fredrik', {
  name: 'Adam',
  email: 'adam@example.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
})

function App() {
  const [accCookies, setAccCookies] = useState(false)

  return (
    <CookieAccContext.Provider value={{ accCookies, setAccCookies }}>
      <div className="App">
        <BrowserRouter>
          <HamburgerMenu />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about"></Route>
            <Route path="/contact"></Route>
            <Route path="*" element={<h1>404 - Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </CookieAccContext.Provider>
  )
}
export default App
