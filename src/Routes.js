import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Screen1 from './Home'
import Screen2 from './Forum'
import Screen3 from './Services'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        {/* Navigation Links */}
        
        {/* Routes */}
        <Routes>
          <Route path='/' element={<Screen1 />} />
          <Route path='/Screen2' element={<Screen2 />} />
          <Route path='/screen3' element={<Screen3/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
