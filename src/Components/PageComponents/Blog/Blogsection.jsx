import React from 'react'


function Blogsection(props) {
  return (
    <div className='flex justify-center'>
      <div className= ' bg-white  shadow-black shadow-2xl w-fit rounded-xl '>
        <div className=' flex flex-col w-180 '> 
             <img src={props.img} alt="" className='w-180 h-80 ' />
            <div className=' flex flex-col w-150 gap-5 p-5'>
                 <div className='font-bold text-2xl'>
                Google inks pact for new 35-storey office
             </div>
             <div className=''>
                That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.
             </div>
             <div>
                <div>
                    
                </div>
             </div>
            </div>
             
        </div>
    </div>

    
    </div>
  )
}

export default Blogsection