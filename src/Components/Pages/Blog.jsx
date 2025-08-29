import React from 'react'
import New from '../Ui/New'
import Blogsection from '../PageComponents/Blog/Blogsection'
import blogsec1 from '../../assets/blog-section1.png'
import blogsec2 from '../../assets/blog-section2.png'
import blogsec3 from '../../assets/blog-section3.png'
import blogsec4 from '../../assets/blog-section4.png'
import blogsec5 from '../../assets/blog-section5.png'

import Instagramsection from '../Ui/Instagramsection'


function Blog() {
  return (
    <div className='flex  h-fit py-9 flex-col'>
      <New title="Blog" />
     <div className='grid grid-cols-2 py-[30px] space-y-[50px] '>
       <Blogsection img={blogsec1} />
      <Blogsection img={blogsec2} />
      <Blogsection img={blogsec3} />
      <Blogsection img={blogsec4} />
      <Blogsection img={blogsec5} />
      
      
     </div>
      <Instagramsection/>
    </div>
  )
}

export default Blog