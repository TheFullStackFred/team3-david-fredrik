import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import CookieAccContext from './CookieAccContext'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import LogRocket from 'logrocket'

LogRocket.init('eifezl/team3-david-fredrik')
LogRocket.identify('eifezl/team3-david-fredrik', {
  name: 'Adam',
  email: 'adam@example.com',

  subscriptionType: 'pro'
})

function App() {
  const [accCookies, setAccCookies] = useState(false)

  return (
    <CookieAccContext.Provider value={{ accCookies, setAccCookies }}>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </CookieAccContext.Provider>
  )
}
export default App
