import React from 'react'
import home from "../../../assets/home.png"
import mail from "../../../assets/mail.png"
import phone from "../../../assets/phone.png"

function Touch() {
  return (
   <div className='flex flex-col gap-10  px-80'>
      <div className='font-extrabold text-4xl'>
                Get in Touch
            </div>
     <div className='flex  gap-4 justify-between '>
        <div className='flex flex-col gap-5'>
            <input type="text" className='h-26 w-123 border-1 border-gray-400 rounded-xl' placeholder='  Enter Message'/>
          
           
            <div className='flex  gap-3'>
                    <input type="text" className='h-16 w-60 border-1 border-gray-400 rounded-xl' placeholder='  Enter your name'/>
                        <input type="text" className='h-16 w-60 border-1 border-gray-400 rounded-xl' placeholder=' Email'/>
               
            </div>
             <input type="text" className='h-16 w-123 border-1 border-gray-400 rounded-xl' placeholder=' Enter Subject'/>
             <input type="text" className=' w-fit p-4 border-1 text-y border-bg rounded-xl' placeholder=' Send'/>
          
        </div>
          <div className='flex flex-col gap-7'>
                <div className='flex   '>
                  
                    <div>
                     <div className='font-bold'>
                        Buttonwood, California.
                    </div>
                    <div className='font-light'>
                       Rosemead, CA 91770
                    </div>
                    </div>
                </div>
                 <div className='flex  '>
                  
                  <div>
                       <div className='font-bold'>
                      +1 253 565 2365
                    </div>
                    <div className='font-light'>
                       Mon to Fri 9am to 6pm
                    </div>
                  </div>
                </div>
                 <div className='flex  '>
                

                    <div>
                     <div className='font-bold'>
                       support@colorlib.com
                    </div>
                    <div className='font-light'>
                       Send us your query anytime!
                    </div>
                    </div>
                </div>
            </div>

    </div>
   </div>
  )
}

export default Touch