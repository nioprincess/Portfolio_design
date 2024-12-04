import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const HomeContent = () => {
  return (
    <div className='px-8 py-20 md:px-16 lg:px-24' id='home'>
    <div className='container flex justify-center md:justify-between items-center'>
     <div className='inline-block w-8/12'>
        <p className=''>Hi I am</p>
        <p className='text-orange-600 font-bold'>Princess Niyomugenga</p>
        <h1 className='text-6xl font-bold'>Frontend & Backend</h1>
        <h1 className='text-6xl font-bold pl-72 mb-2'>Developer</h1>
        <p className='w-3/4 mb-3'>a passionate and dedicated Full Stack Developer with expertise in crafting dynamic, responsive, and user-centric web applications. With a solid foundation in both front-end and back-end technologies, I excel at 
        turning ideas into seamless digital experiences.</p>
        <button className='bg-orange-600 px-5 py-2 hover:scale-105
         hover:text-black border-none rounded-sm text-white'>Hire Me</button>
     </div>
     <div>
       <img src='/images/human8.jpg'  alt='my profile' width={300} height={370} className='rounded-full object-cover border-spacing-3 transform transition-transform
        hover:scale-105' />
        <div className='flex text-center justify-center space-x-2
        mt-4'>
        <a href=''><FaLinkedin className='cursor-pointer hover:scale-105' /></a>
        <a href=''><FaTwitter className='cursor-pointer hover:scale-105' /></a>
        <a href=''><FaInstagram className='cursor-pointer hover:scale-105' /></a>
        <a href=''><FaFacebook className='cursor-pointer hover:scale-105' /></a>
        </div>
        
     </div>
    </div>
    </div>
  )
}

export default HomeContent