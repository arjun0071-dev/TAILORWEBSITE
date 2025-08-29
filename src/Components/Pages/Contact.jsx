import React, { useState } from 'react'
import Touch from '../PageComponents/Contact/Touch'
import New from '../Ui/New'
import Map from '../PageComponents/Contact/Map'

function Contact() {


  return (
   

    <div className='flex gap-24 h-fit py-9 flex-col'>
       <New title="Contact"/>
       <Map/>
       <Touch/>
      </div>
  )
}

export default Contact