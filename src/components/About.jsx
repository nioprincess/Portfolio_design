import React from 'react'

const About = () => {
  return (
    <div className='px-8 py-20 md:px-16 lg:px-24' id='about'>
    <div className='container flex justify-center md:justify-between items-center '>
     <div className=' flex flex-col md:flex-row items-center md:space-x-12'>
       <img src='/images/human8.jpg' 
       className='w-72 h-96 rounded mr-24 object-cover mb-8 md:mb-0' />
     </div>
     <div className='flex-1'>
        <h1 className='text-4xl font-bold mb-6'>About Me</h1>
        <p className='text-lg mb-8'> i’m a dedicated Full stack
        Developer , I specialized in 
        building modern and responsive web applications
        I specialize in modern frameworks like React.js, Angular, Node.js, and Django, and have extensive experience with databases like MySQL, MongoDB, and PostgreSQL. My skill set includes designing RESTful APIs, implementing secure authentication 
        systems, and optimizing application performance.</p>
      <div className='space-y-5'>
        <div className='items-center'>
            <label htmlFor='Frontend' className='mb-6 font-bold'>Frontend</label>
            <div className='bg-gray-300 grow h-2.5 rounded-full'>
                  <div className='flex-1 grow bg-orange-500 hover:scale-105
                  w-11/12 h-2.5 rounded-full'>
                      <div className='flex rounded-full ml-[36.2rem] pb-1 
                      h-3 w-3 bg-gray-300 border-[1px] border-orange-500'>
                      </div>
                  </div>
            </div>
        </div>

        <div>
            <label htmlFor='Frontend' className='font-bold'>Backend</label>
            <div className='bg-gray-300 grow h-2.5 rounded-full'>
                  <div className='grow bg-orange-500 hover:scale-105
                  w-10/12 h-2.5 rounded-full'>
                      <div className='flex rounded-full ml-[32.8rem] pb-1 
                      h-3 w-3 bg-gray-300 border-[1px] border-orange-500'>
                      </div> 
                  </div>
            </div>
        </div>

        <div>
            <label  htmlFor='Frontend' className='font-bold'>Mysql & MongoDb</label>
            <div className='bg-gray-300 grow h-2.5 rounded-full'>
                  <div className='grow bg-orange-500 hover:scale-105
                  w-11/12 h-2.5 rounded-full'>
                      <div className='flex rounded-full ml-[36.2rem] pb-1 
                      h-3 w-3 bg-gray-300 border-[1px] border-orange-500'>
                      </div> 
                  </div>
            </div>
        </div>
      </div>
     </div>
    </div>
    </div>
  )
}

export default About