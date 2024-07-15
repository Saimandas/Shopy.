import React from 'react'

const Checkout = () => {
  return (
    <div className=' bg-[#FAE3EA] flex-1 flex justify-center items-center  p-5 '>
      <div className=' bg-[#FDF9FA] h-[95%] rounded-3xl  w-1/2 p-16 text-xl font-bold text-center'>CheckOut
      <h1 className=' text-left text-lg '>Address</h1> <div className=' bg-red-300 h-40  rounded-xl mt-2 text-base font-semibold text-white'>abc</div>
      <h1 className=' mt-6 text-lg text-left  '>Payment Methood</h1>
      <div className=' h-52 rounded-2xl '>
        <div className=' shadow-2xl bg-[#FEFDFE] rounded-lg mt-8 h-12 flex items-center justify-around '>
            <h1 className=' font-medium text-base px-6  '>Cash On Delivery</h1>
            <div  className=' h-4 w-4 bg-black rounded-lg'></div>
        </div>
        <h1 className=' text-lg mt-8 text-left'>Shipping Bill</h1>
        <h1 className=' mt-4 text-base text-[#C5DAFD]  text-left'>Total Price</h1>
        <h1 className=' text-base  text-left text text-[#C5DAFD]' > Discount 10%</h1>
      </div>
      </div>
   
    </div>
  )
}

export default Checkout