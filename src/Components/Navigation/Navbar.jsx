import React from 'react'
import myImage from "../../assets/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {



  const navs = [

    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
     {
      name: "Service",
      path: "/Service",
    },
     {
      name: "Blog",
      path: "/Blog",
    },
     {
      name: "Contact",
      path: "/Contact",
    },



  ]





  return (
    <div className='  flex fixed z-10 w-full justify-between bg-white'>
      <div className=' flex justify-between w-full ml-10 mr-10 p-5'>
        <img src={myImage} alt="Photo "  className='object-cover' />


        <div className='flex gap-6   font-semibold text-sm'>
          {
            navs.map((val, i) => {
              return (
                <Link to={val.path}>
                  <div>
                    {val.name}
                  </div>
                </Link>
              )
            })
          }

        </div>

      </div>
      <div className=' bg-bg w-34  ml-2  p-5 '>
        VISIT US
      </div>
    </div>
  )
}

export default Navbar