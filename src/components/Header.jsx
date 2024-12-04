import React, { useContext, useEffect, useState } from 'react'

import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext';
const Header = () => {
    const [toggle,setToggle] = useState(false);
    const {theme,setTheme} = useContext(ThemeContext)
    useEffect(() => {
        console.log("Theme:",theme);
    },[]);
  return (
    <div className='px-8 max-w-[1440px] w-full py-2 md:px-16 lg:px-24'>
    <div className='container flex justify-center md:justify-between items-center'>
        <div>
     <img src='/images/logo3.png' width={100} height={100} className='rounded-full'/>
        </div>
        <div className='flex space-x-6 md'>
         <a href='#home' className='hover:text-gray-400'>Home</a>
         <a href='#about' className='hover:text-gray-400'>About Me</a>
         <a href='#services' className='hover:text-gray-400'>Services</a>
         <a href='#projects' className='hover:text-gray-400'>Project</a>
         <a href='#testimonies' className='hover:text-gray-400'>Testimonies</a>
         <a href='#contact' className='hover:text-gray-400'>Contact</a>
        </div>
        <div className='flex space-x-10'>
         <button className='bg-orange-500 px-5 py-2 hover:scale-105 hover:text-black border-none rounded-sm text-white'>Download CV</button>
         {theme == 'dark' ? <HiMoon onClick={() => setTheme('light')} className='text-[25px] text-black bg-white p-1 mt-2 rounded-full cursor-pointer'/> :
          <HiSun onClick={()=> setTheme('dark')} className='text-[25px] text-black  bg-white p-1 rounded-full cursor-pointer mt-2' />}
         
        </div>
    </div>

    </div>
  )
}

export default Header