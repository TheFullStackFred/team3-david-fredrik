import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages & components import
import Welcome from './pages/Welcome'
import Home from './pages/Home'

function App() {
  return (
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
  )
}
export default App
