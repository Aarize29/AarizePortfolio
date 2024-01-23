import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
const Experience = () => {
  return (
    <div className='overflow-y-scroll mt-2 text-white flex p-5 flex-col hide-scrollbar h-screen'>

    <div className=' rounded-2xl bg-backimage p-2 transform -scale-x-100 bg-repeat-space '>
         <div className='text-xl text-gray-300    mt-20 text-gray-300 text-center transform -scale-x-100'>
        <div className='flex ml-5 mr-5 justify-between items-center' ><span className='text-[fuchsia]'>Intern || Audio AI, LLC </span>
        <span className='text-[fuchsia]'>June 2023 - Present</span>
        </div>

        <p className='m-5'>As a full-stack intern at Audio AI, LLC, I played a pivotal role in crafting the company's website, excelling in both frontend and backend development to deliver a seamless and dynamic user experience.
        
        As a full-stack intern at Audio AI, LLC, I skillfully utilized Node.js, React-Flow, Tailwind CSS, Firebase, React.js and AWS services .
        </p>
        </div>
       <div className='text-xl text-gray-300    mt-20 text-gray-300 text-center transform -scale-x-100'>
        <div className='flex ml-5 mr-5 justify-between items-center' ><span className='text-[fuchsia]'>Open Source Contributor || GSSOC2023 </span>
        <span className='text-[fuchsia]'>May 2023 - August 2023</span>
        </div>

        <p className='m-5'>As an open-source contributor at GirlScript Summer of Code, I actively contributed to various projects, collaborating with a diverse team to create meaningful solutions and empower the community through code.
        </p>
        </div>
      


    <div className='flex items-center justify-between mt-[15%] transform -scale-x-100 '>
          <Link to='/contact'><button className='text-white text-lg font-bold hover:bg-gray-300 w-fit h-fit p-3 rounded-2xl hover:underline hover:text-[fuchsia] bg-[purple] '>Contact Me</button></Link>
          <Link to='/skills'><span className='text-[fuchsia] flex items-center justify-between text-2xl font-semibold cursor-pointer hover:underline decoration-white'> My Skills <BsArrowRight className='m-2'/></span></Link>
        </div>
    </div>
    </div>
  )
}

export default Experience
