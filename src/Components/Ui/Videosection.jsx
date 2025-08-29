import React from 'react'
import video from "../../assets/video.png"
import play from "../../assets/play.png"

function Videosection() {
  return (
    <div className='relative'>
          <img src={video} alt="photo" className='h-11/12 w-fit' />
          <div className='absolute top-60 right-185 '>
          <img src={play} alt="" className='w-20'  />
          </div>
    </div>
  )
}

export default Videosection
