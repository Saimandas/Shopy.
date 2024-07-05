import React from 'react'

const ProductDisplay = () => {
  return (
    <div className=' h-full px-64'>
        <div className=' bg-blue-700 h-full flex'>
           <div className=' bg-red-100 w-[40%] h-full px-8 p-8'>
            <div className=' h-[60%] bg-cyan-800 '></div>
            <div className=' h-12 mt-4 flex gap-7  justify-end   '>
                <button className=' p-3 px-16 bg-red-500 rounded-sm whitespace-nowrap shadow-md text-white font-semibold '>Add to Cart</button>
                <button className=' p-3 px-16 bg-orange-500 rounded-sm whitespace-nowrap shadow-md text-white font-semibold'>Buy Now</button>
            </div>
           </div>
           <div className=' bg-green-500 w-[60%] h-full '></div>
        </div>
    </div>
  )
}

export default ProductDisplay