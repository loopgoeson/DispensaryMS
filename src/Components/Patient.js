import React from 'react'
import img from '../Asset/medicines.jpg'

const Patient = () => {
  return (
    <div className='main py-40 pl-9 flex justify-around'>
      <div>
      <div className='text-6xl text-red-400'>Dispensary For Medicine</div>
      <div><strong className='text-6xl text-red-500'>And Treatment</strong></div>
      <div className='text-3xl py-10'>A place where wellness and cannabis meet.</div>
      <div>
        <div className='my-4 item-center'>
          <button className='bg-red-400 px-3 py-2 text-white mx-2 '>Buy Now</button>
          <button className='bg-blue-400 px-3 py-2 text-white mx-2 '>Book an appointment </button>
        </div>
      </div>
      </div>
      <div className='flex item-center'>
        <img src={img} alt ="" className='h-80' />
      </div>
    </div>
  )
}

export default Patient
