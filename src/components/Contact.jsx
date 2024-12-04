import React from 'react'

const Contact = () => {
  return (
    <div className='px-8 py-20 md:px-16 lg:px-24' id='contact'>
    <div className='container justify-center md:justify-between items-center'>
     
     <div className='text-center mb-4'>
        <h1 className='text-4xl font-bold'>Let's Work Together</h1>
     </div>
     <div className=''>
       <p className='text-center mb-5'>i'm open to Discuss anything about Web Development Projects or Partnership opportunities  ,<br></br> feel free to contact me</p>
       <div className='flex items-center justify-center gap-4 p-4'>
        <input type='text' placeholder='Enter Your Email' className='dark:text-black border-[1px] border-gray-400 rounded-lg p-2 outline-none
        w-80'/>
        <button className='bg-orange-500 px-4 py-2 rounded-lg'>Contact Me</button>
       </div>

     </div>
    </div>
    </div>
  )
}

export default Contact