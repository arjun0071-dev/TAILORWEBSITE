import React from 'react'
import insta1 from "../../assets/instra1.png"
import insta2 from "../../assets/instra2.png"

function Instagramsection() {
  return (
    <div className='flex flex-col  items-center gap-17'>
      <div className='text-center w-100 '>
        <div className='text-4xl font-bold mb-3'>
          Follow us on Instagram
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </div>
      </div>
      <div className='flex gap-7 '>
        <img src={insta1} alt="photo" className='rounded-2xl' />
        <img src={insta2} alt="photo" className='rounded-2xl' />


      </div>
    </div>
  )
}

export default Instagramsection