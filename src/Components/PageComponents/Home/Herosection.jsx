import React from 'react'
import photo from "../../../assets/1.png"
import photo1 from "../../../assets/2.png"
import photo2 from "../../../assets/3.png"

function Herosection() {
  return (
    <div className='relative  '>
      <img src={photo1} alt="photo" className='brightness-50 h-full' />
      <div className='absolute top-0 flex mx-18 h-full  gap-24 items-center justify-center'>
        <div className=' text-white w-1/2'>
        <div className='' >
              <img src={photo} alt="photo" className=' w-fit object-cover h-19 ' />
            </div>
          <div className='text-6xl font-semibold'>
            We make cloths  that suit you
          </div>
          <div className='mt-5' >
            TLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis
            cursus, mi quis viverra ornare.
          </div>
          <div className='flex flex-col gap-9'>
            <div className='mt-10 w-fit px-8 rounded-2xl font-semibold py-5 bg-bg'>
              Our Services
            </div>
            
          </div>
        </div>
        <div className='' >
          <img src={photo2} alt="photo" className='w-4/5 rounded-2xl h-2/3 object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Herosection