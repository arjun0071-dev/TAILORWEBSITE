import React from 'react'

import Home from './Components/Pages/Home'


import About from './Components/Pages/About'
import { Route, Routes } from 'react-router-dom'
import Service from './Components/Pages/Service'
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/Contact'
import Layout from './Components/Hoc/Layout'


function App() {
  return (
    <div>
    

      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
         <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          </Route>
       

      </Routes>
      
    </div>
  )
}

export default App