import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div className='px-8 mb-4 md:px-16 lg:px-24' id='footer'>
    <div className='container justify-center md:justify-between space-y-10 items-center'>
    <div className='ml-[200px] '>
     <img src='/images/logo3.png' width={100} height={100} className='object-cover rounded-full'/>
     </div>
    <div className='flex space-x-6 mb-4'>
         <a href='#home' className='hover:text-gray-400'>Home</a>
         <a href='#about' className='hover:text-gray-400'>About Me</a>
         <a href='#services' className='hover:text-gray-400'>Services</a>
         <a href='#projects' className='hover:text-gray-400'>Project</a>
         <a href='#testimonies' className='hover:text-gray-400'>Testimonies</a>
         <a href='#contact' className='hover:text-gray-400'>Contact</a>
    </div>

    <div className='flex text-center justify-center space-x-6
        mt-4'>
        <a href=''><FaLinkedin className='cursor-pointer hover:scale-105' /></a>
        <a href=''><FaTwitter className='cursor-pointer hover:scale-105' /></a>
        <a href=''><FaInstagram className='cursor-pointer hover:scale-105' /></a>
        <a href=''><FaFacebook className='cursor-pointer hover:scale-105' /></a>
    </div>
    
    </div>
    </div>
    <div className='w-full py-4 bg-gray-700'>
   <p className='flex text-center ml-[27rem] text-white font-bold gap-2'>&copy; 2024 <p className='text-orange-500'>N Princess</p> All Rights Reserved, Inc. </p> 
   </div>
   </>
  )
}

export default Footer