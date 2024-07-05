import React from 'react'
import img from '../assets/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.webp'
import mobile from '../assets/22fddf3c7da4c4f4.webp'
const Home = () => {
  return (
    <div className='  flex-1  bg-[#F1F2F4]  flex items-center flex-col '>
      <div className=' border-2 bg-[#FFFFFF] w-[85%] max-w-[1200px] h-[20%] mt-2 py-4  px-6  flex flex-wrap flex-col   gap-4 none '  >      
        <div className=' w-32 h-full  p-3 text-center'>
          <div className=' h-3/4  flex justify-center items-center'>
            <img src={mobile} alt="" />
          </div>
          <h1 className=' font-sans font-medium'>Mobile</h1>
        </div>
       
       
      </div>
      <div className='border-2  bg-[#FFFFFF] w-[85%] h-[70%] mt-4 flex  p-4 pl-42 justify-start flex-wrap overflow-x-auto gap-3 '>
        <div className=' w-52 h-[43%] border-2  border-[#E0E0E0] shadow-lg flex flex-col text-center '>
          <div className=' h-[80%]  px-6 py-2 flex justify-center self-center'><img src={img} alt="" className=' relative w-44 h-48 ' /></div>
            <h1 className=' mt-1 h-5'>  Moto</h1>
            <h1 className=' font-semibold'> From $23000</h1>
        </div>
        <div className=' w-52 h-[43%] border-2  border-[#E0E0E0] shadow-lg flex flex-col text-center '>
          <div className=' h-[80%]  px-6 py-2 flex justify-center self-center'><img src={img} alt="" className=' relative w-44 h-48 ' /></div>
            <h1 className=' mt-1 h-5'>  Moto</h1>
            <h1 className=' font-semibold'> From $23000</h1>
        </div>
        <div className=' w-52 h-[43%] border-2  border-[#E0E0E0] shadow-lg flex flex-col text-center '>
          <div className=' h-[80%]  px-6 py-2 flex justify-center self-center'><img src={img} alt="" className=' relative w-44 h-48 ' /></div>
            <h1 className=' mt-1 h-5'>  Moto</h1>
            <h1 className=' font-semibold'> From $23000</h1>
        </div>

       
      </div>
      <button className=' p-2 bg-green-300 mt-2 rounded shadow-lg font-semibold text-white'>View All</button>
    </div>
  )
}

export default Home