
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductDisplay from './components/ProductDisplay'

function App() {
  

  return (
    <>
    <div className=' h-screen  flex flex-col gap-y-10 '>
      <Navbar />

     <ProductDisplay/>
     </div>
    </>
  )
}

export default App
