import React from 'react'
import Herosection from '../PageComponents/Home/Herosection'
import Card from '../Ui/Card'
import Abouthouse from '../Ui/Abouthouse'
import Servicesection from '../Ui/servicesection'
import Videosection from '../Ui/Videosection'
import Testimonial from '../Ui/Testimonial'
import Instagramsection from '../Ui/Instagramsection'
import Footer from '../Navigation/Footer'

function Home() {
  return (
    <div className='flex gap-24 h-fit py-9 flex-col'>
      <Herosection />
      <Card/>
      <Abouthouse />
      <Servicesection/>
      <Videosection/>
      <Testimonial/>
      <Instagramsection/>
      
    </div>
  )
}

export default Home