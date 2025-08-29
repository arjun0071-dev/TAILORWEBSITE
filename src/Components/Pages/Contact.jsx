import React, { useState } from 'react'
import Touch from '../PageComponents/Contact/Touch'
import New from '../Ui/New'
import Map from '../PageComponents/Contact/Map'

function Contact() {

  const [isopen, setisopen] = useState(false)
  return (
    < >
      <div className='h-lvh bg-red-900 flex items-center  justify-center'>
        <div>
          <button className='border-amber-600 bg-amber-900 p-[20px] rounded-4xl' onClick={() => setisopen(!isopen)}>
          {isopen?"close":"open"}
          </button>
        </div>
        <div>
          {isopen && <div>
            here
          </div>
          }
        </div>
      </div>
    </>

    // <div className='flex gap-24 h-fit py-9 flex-col'>
    //    <New title="Contact"/>
    //    <Map/>
    //    <Touch/>
    //   </div>
  )
}

export default Contact