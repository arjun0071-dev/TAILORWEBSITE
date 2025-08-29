import React from 'react'
import about from "../../assets/visit_bg.png"

function Abouthouse() {
  return (
    <div className=' relative  h-screen mx-24  flex items-center justify-center  gap-12 '>
      <div>
        <img src={about} alt="photo " className='left-0 absolute top-22' />
      </div>
      <div className=' w-7/12 h-full flex items-center justify-center absolute -z-1 right-0 rounded-2xl bg-text'>
        <div className='ml-22 w-1/2'>
          <div className='flex flex-col gap-6'>
            <div className='text-5xl font-semibold'>
              About our
              tailor house
            </div>

            <div>
              <div className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </div>
              <div className='text-sx '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
              </div>
            </div>
          </div>
          <div className='mt-10 w-fit px-3 text-white rounded-2xl font-semibold py-4 bg-bg cursor-pointer '>
            More  About  Us

          </div>
        </div>
      </div>



    </div>
  )
}

export default Abouthouse