import React from 'react'
import card1 from "../../assets/4.png"
import card2 from "../../assets/5.png"
import card3 from "../../assets/6.png"

function Card() {
  return (
    <div className='flex ml-70 my-20 gap-16   w-fit'>
       <div className=' '>
        <img src={card1} alt="card" className=' w-70 h-85' />
        <div className='mt-10 mb-2 text-2xl font-medium'>
          Tailor Sweing
        </div>
        <div className='w-60 '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </div>

       </div>
        <div className=' '>
        <img src={card2} alt="card" className=' w-70 h-85 ' />
         <div className='mt-10 mb-2 text-2xl font-medium'>
          Mesurement
        </div>
        <div className='w-65'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </div>


       </div>
        <div className=' '>
        <img src={card3} alt="card" className=' w-70 h-85'/>
         <div className='mt-10 mb-2 text-2xl font-medium'>
          Ready-made
        </div>
        <div className='w-60'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </div>


       </div>
    </div>
  )
}

export default Card