import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Reg from './Reg'
import Login from './Login'
import Home from './Home'
const Navigate = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Reg/>}></Route>
         <Route path='/Login' element={<Login/>}></Route>
         <Route path='/Home/:id' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigate