import React from 'react'
import frontImg from "../../public/images/icon1.jpg";
import backImg from "../../public/images/icon2.jpeg";
import apImg from "../../public/images/icon3.jpeg";
const serviceData = [
  {
    id:1,
    name:"Website Design",
    description:"As a Developer i Build front-end design elements, ensuring responsive and visually appealing interfaces",
    img:frontImg
  },
  {
    id:2,
    name:"Backend Development",
    description:"As a Developer  I combine front-end design, with back-end development to build robust, secure, and efficient systems that power the website's functionality and user interactions.",
    img:backImg
  },
  {
    id:3,
    name:"API Integration",
    description:"As a Developer  I ensure efficient communication between systems, integrating third-party APIs and building custom APIs to meet specific project requirements",
    img:apImg
  },
];
const Services = () => {
  return (
    <div className='px-8 py-20 md:px-16 lg:px-24' id='services'>
    <div className='container justify-center md:justify-between items-center'>
      <div className=''>
        <h1 className='text-4xl font-bold text-center mb-6'>Services</h1>
      </div>
      <div>
        <p className='text-center mb-8'>I thrive in solving complex problems 
            and continuously learning emerging 
            technologies to deliver scalable,
            high-quality solutions.<br></br>  Whether working independently or collaborating with teams, my focus remains on delivering impactful results<br></br> 
            that align with client and user needs.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {serviceData.map((items) => (
                <div key={items.id} className='bg-white p-4 rounded-lg transformation transition-transform duration-300 hover:scale-90'>
                     <img src={items.img} width={100} height={100} className='text-black  object-cover mb-4 rounded-lg' />
                     <h3 className='text-2xl font-bold dark:text-black'>{items.name}</h3>
                     <p className='dark:text-black'>{items.description}</p>
                </div>
              ))}
            </div>
      </div>
    </div>
    </div>
  )
}

export default Services