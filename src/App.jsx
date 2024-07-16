// src/App.jsx
import React from 'react'
import { Button } from '@/components/ui/button'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  )
}
