import React from 'react'
import service1 from "../../assets/services1.svg"
import service2 from "../../assets/services2.svg"
import service3 from "../../assets/services3.svg"
import service4 from "../../assets/services4.svg"

function Servicess() {
  return (
    <div className='flex flex-col items-center mx-5 gap-20'>
        <div className='flex flex-col items-center w-100 gap-6'>
            <div className='text-4xl font-semibold'>
            Why use our service?
        </div>
        <div className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </div>
        </div>
        <div className='flex gap-10 px-60 '>
            <div className='flex flex-col gap-5'>
               <img src={service1} alt="photo" className='w-12 h-16' />
               <div className='flex flex-col gap-3'>
                <div className='text-xl'>
                    Tailor Sweing
                </div>
                <div className='text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </div>
               </div>
            </div>
             <div className='flex flex-col gap-5'>
               <img src={service2} alt="photo" className='w-12 h-16 ' />
                <div className='flex flex-col gap-3'>
                <div className='text-xl'>
                    Tailor Sweing
                </div>
                <div className='text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </div>
               </div>
            </div>
             <div className='flex flex-col gap-5'>
               <img src={service3} alt="photo" className='w-12 h-16'/>
                <div className='flex flex-col gap-3'>
                <div className='text-xl'>
                    Tailor Sweing
                </div>
                <div className='text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </div>
               </div>
            </div>
             <div className='flex flex-col gap-5'>
               <img src={service4} alt="photo" className='w-12 h-16' />
                <div className='flex flex-col gap-3'>
                <div className='text-xl'>
                    Tailor Sweing
                </div>
                <div className='text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Servicess