import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuienesSomos from '../components/QuienesSomos'

const rutas = () => {
  return (
    <> 
    <BrowserRouter>
        <Routes>
          <Route index element={<Layout/>}> 
            <Route index element={home}/>
            <Route path="/QuienesSomos" element={QuienesSomos}/>
            </Route>
        </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default rutas