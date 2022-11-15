import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import CookieAccContext from './CookieAccContext'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Sidebar from './components/Sidebar'
import NotFound from './pages/NotFound'
import LogRocket from 'logrocket'

LogRocket.init('eifezl/team3-david-fredrik')
LogRocket.identify('eifezl/team3-david-fredrik', {
  name: 'Adam',
  email: 'adam@example.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
})

/*const AppSidebar = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
)
*/

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
        </div>
    </CookieAccContext.Provider>
  )
}
export default App
