import React from 'react'
import new1 from "../../assets/h1_hero.png"
import photo from "../../assets/1.png"
import photo3 from "../../assets/hero.png"

function New(props) {

  return (
   <div className='relative  '>
            <img src={new1} alt="" className='brightness-50 h-[450px] w-full'/>
          <div className='absolute top-0 flex mx-21 h-full  gap-100 items-center justify-center'>
            <div className=' text-white w-1/2'>
            <div className='' >
                          <img src={photo} alt="photo" className=' w-fit object-cover h-19 ' />
                        </div>
                      <div className='text-6xl font-semibold'>
                       {props.title}
                      </div>

            </div>
             <div className=' right-0 mt-20' >
                      <img src={photo3} alt="photo" className='w-11/12 h-65 rounded-2xl  object-cover' />
                    </div>
            </div>
        </div>
    
  )
}

export default New