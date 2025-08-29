import React from 'react'
import photo from "../../assets/testimonial.png"
import photo1 from "../../assets/quotes.png"

function Testimonial() {
  return (
    <div className='flex flex-col ml-80 gap-10 '>
        <img src={photo1} alt="photo" className='w-30' />
        <div className='w-180 text-xl ml-22 -mt-18'>
           Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.

        </div>
        <div className='flex flex-row mt-10 ml-18'>
            <img src={photo} alt="photo" className='-mt-8' />
            <div >
                <div className='font-bold text-3xl'>
                    Robart Brown
                </div>
                <div>
                    Creative designer at Colorlib
                </div>

            </div>
        </div>
    </div>
  )
}

export default Testimonial