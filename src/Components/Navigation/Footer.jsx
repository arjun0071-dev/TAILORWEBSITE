import React from 'react'
import logo from "../../assets/logo.png"
import map from "../../assets/map.png"
import footer from "../../assets/footer-bg.png"

function Footer() {
  return (
    <div className='relative '>
      <img src={footer} alt="footer" />
      <div className='absolute  top-0 items-center  text-white flex justify-between w-full px-22 '>
        <img src={map} alt="map" className='h-[400px] mt-9 w-1/2 rounded-2xl object-cover ' />
        <div className='flex gap-22'>
          <div className=' '>
            <img src={logo} alt="" className='w-25' />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </div>
            <div className='flex flex-col mt-5 gap-6'>
              <div>
                (80) 783 367-3904
              </div>
              <div>
                (80) 783 367-3904
              </div>
            </div>
          </div>
          <div className=' '>

            <div className=' text-2xl font-bold text-bg'>
              Our solutions

            </div>
            <div>Home</div>
            <div>Services</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer