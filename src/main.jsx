import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'

const router= createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<HomePage/>}/>
    </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
