import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className='p-10  bg-backimage bg-repeat-space h-full '>
       <div className="">
       <h1 className="text-4xl font-bold m-3 text-[purple]">
       Peace Be Upon You,
       </h1>
       <h1 className='text-4xl ml-10 mb-5 text-white font-semibold'>Hello, I am Shams Aarize Siddique,</h1>
       <p className='text-center text-xl text-gray-300'>"A web developer with experience in designing and developing fully functional responsive websites and applications. I am passionate about creating user-friendly and visually appealing digital solutions using cutting-edge technologies."</p>
       <Link to='/about'><div className="flex justify-end items-end text-[purple] mr-5 text-xl underline cursor-pointer"><h1 className=' hover:text-white'>Know more about me...</h1></div></Link>
        
        <div className='flex items-center justify-center mt-[20%]'>
          <Link to='/projects'><button className='text-white text-lg font-bold hover:bg-gray-300 w-fit h-fit p-3 rounded-2xl hover:underline hover:text-[purple] bg-[purple] '>Have a look on my projects</button></Link>
        </div>
      
       </div>
    </div>
  )
}

export default Hero
