import React, { useState } from 'react'
import { Testimony } from '../../Constants/testimonies'
import { Counts } from '../../Constants/testimonies'

const Testimonies = () => {
   const [counter,setCounter] = useState(1);
    const [testimony,setTestimony] = useState ();
    const testimonyP =  Testimony.filter((test) => test.id === counter) ;

  return (
    <div className='px-8 py-20 md:px-16 lg:px-24' id='testimonies'>
    <div className='container justify-center md:justify-between items-center'>
    <div className=''>
        <h1 className='text-4xl font-bold text-center mb-6'>Testimonies</h1>
      </div>
      <div>
        <p className='text-center mb-8'>Here are Testimonies comes from people who use to be my partener's and 
            employer's 
            , <br></br>Here is their feedback about the work we did together</p>
        {testimonyP.map((items) => (
      
      <div key={items.id} className='flex items-center justify-center bg-white dark:text-black px-8 py-4 rounded-lg w-[50rem] gap-8'>
        <div>
            <img src={items.image} width={700} height={700} className='rounded-full object-cover' />
        </div>
        <div>
        <span className="text-4xl font-bold text-orange-500">"</span><p>{items.description}</p><p className="text-orange-500 text-4xl font-bold">"</p>
        <p className='font-bold'>{items.name}</p>
        <p>{items.post}</p>
        </div>
      </div>
        ))
         
        }
       
            <div className='flex items-center justify-center gap-2'>
            {Testimony.map((item) => (
                
                <button key={item.id} onClick={() => setCounter(item.id)} className='w-10 bg-gray-400 cursor-pointer hover:bg-orange-500 rounded-full h-2'>

                </button>
                
            ))
            
            }
           <div>
            <button className=''>

            </button>
           </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Testimonies