import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import ProductCard from './components/ProductCard'
import ProductDetails from './pages/ProductDetails'
import { Container } from '@mui/material'

function App() {
 return ( 
    <Container>
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Container>
      
    
  
  
  )
}

export default App
