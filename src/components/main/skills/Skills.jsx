import React from 'react'
import './Skills.css'
import {GrReactjs} from 'react-icons/gr'
import {SiExpress,SiFirebase, SiPython,SiPandas, SiNumpy, SiMongodb} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Skills = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-center text-4xl text-[fuchsia] font-bold mt-10 underline decoration-gray-700'>My Skills</div>

      <div className='flex flex-wrap m-5  items-center justify-center  '>
        <a href="https://react.dev/learn" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-8xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><GrReactjs/></div></a>
        <a href="https://expressjs.com/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-8xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiExpress/></div></a>
        <a href="https://nodejs.org/en/docs" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-8xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><FaNodeJs/></div>
        </a>
        <a href="https://www.mongodb.com/docs/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-8xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiMongodb/></div>
        </a>
        <a href="https://firebase.google.com/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-8xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiFirebase/></div></a>
        <a href="https://docs.python.org/3/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-8xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiPython/></div></a>
        <a href="https://pandas.pydata.org/docs/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-8xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiPandas/></div></a>
        <a href="https://numpy.org/doc/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-8xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiNumpy/></div></a>
        <a href="https://nextjs.org/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-8xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><TbBrandNextjs/></div></a>
      </div>


     <div className="flex justify-between">
     <p className='text-sm text-white text-center font-semibold'>**Click on icons to go to official documentations**</p>
      <Link to='/projects'><span className='text-[fuchsia] flex items-center justify-between text-2xl font-semibold cursor-pointer hover:underline decoration-white'> My Projects <BsArrowRight className='m-2'/></span></Link>
     </div>
    </div>
  )
}

export default Skills
