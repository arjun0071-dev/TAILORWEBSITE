import React from 'react'


import Abouthouse from '../Ui/Abouthouse'
import Servicesection from '../Ui/servicesection'
import Videosection from '../Ui/Videosection'
import Testimonial from '../Ui/Testimonial'
import Instagramsection from '../Ui/Instagramsection'
import Footer from '../Navigation/Footer'
import New from '../Ui/New'




function About() {
  return (

    <div className='flex gap-24 h-fit py-9 flex-col'>
    <New title="About"/>
      <Abouthouse />
      <Servicesection />
      <Videosection />
      <Testimonial />
      <Instagramsection />
    </div>

  )
}

export default About