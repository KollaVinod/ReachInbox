import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import OneBox from './pages/OneBox'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<OneBox/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
