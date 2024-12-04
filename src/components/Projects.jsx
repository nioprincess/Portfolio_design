import React, { useEffect, useState } from 'react'
import { projects } from '../../Constants/Project';
import { types } from '../../Constants/Project';

const Projects = () => {
    const [filteredProjs,setFilteredProjs] = useState([]);
    const [filterType,setFilterType] = useState('All');
    const filteredProjects = filterType === 'All' ? projects : projects.filter((project) => project.type === filterType );
    const [isActive,SetIsActive] = useState(false);

   

    console.log("Filtered project: ",filteredProjs);
    console.log("projects: ",projects);
    console.log("type", filterType);
  return (
    
    <div className='px-8 py-20 md:px-16 lg:px-24' id='projects'>
    <div className='container justify-center md:justify-between items-center'>
    <div className=''>
        <h1 className='text-4xl font-bold text-center mb-6'>Projects</h1>
      </div>
      <div>
        <p className='text-center mb-8'>I thrive in solving complex problems 
            and continuously learning emerging 
            technologies to deliver scalable,
            high-quality solutions.<br></br>  Whether working independently or collaborating with teams, my focus remains on delivering impactful results<br></br> 
            that align with client and user needs.</p>
            <div className='flex gap-8 mb-6 items-center justify-center'>
                {types.map((type) => (
                    <button key={type.id} onClick={() => setFilterType(type.type)} className="bg-white dark:text-black px-8 py-2 border-[1px] border-gray-400 rounded-lg
                     hover:bg-orange-500 ">
                        {type.type}
                    </button>
                ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredProjects.map((item) => (
                    <div key={item.id} >
                    <div className="text-black bg-orange-200 w-full rounded-lg p-4 h-[20rem] 
                    hover:scale-105 hover:bg-orange-300 cursor-pointer">
                        <img src={item.image} className='h-[18rem] w-[15rem]' />
                    </div>
                    <br></br>
                    <p className="text-orange-500 font-bold">{item.type}</p>
                    <p className="font-bold">{item.name}</p>
                    </div>
                ))}
            </div>
    </div>
    </div>
    </div>
  )
}

export default Projects