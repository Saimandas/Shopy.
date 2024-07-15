
import { Outlet } from 'react-router-dom'
import './App.css'
import Checkout from './components/Checkout'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import ProductDisplay from './components/ProductDisplay'
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  


  
  return (
    <>
    <div className=' h-screen  flex flex-col gap-y-10 '>
      <Navbar />
      <Outlet/>
     </div>
    </>
  )
}

export default App
