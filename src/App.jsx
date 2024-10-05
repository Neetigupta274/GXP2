import React from 'react'
import Navbar from "./component/Navbar.jsx"
import Home from "./component/Home.jsx"
import { Route, Routes } from 'react-router-dom'
import Product from './component/Product.jsx'
import About from "./component/About.jsx"
import Contact from "./component/Contact.jsx"
import Register from "./component/Register.jsx";

import Login from "./component/Login.jsx"
import Footer from './component/Footer.jsx'
import Card from "./component/Card.jsx"
export default function App() {
  return (
    <>
    <div>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path ="/Login" element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path="/Card" element={<Card/>}/>

        </Routes>
        <Footer/>

      
   
      

    </div>
    </>
  )
}
