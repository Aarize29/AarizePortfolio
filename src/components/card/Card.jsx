import React from 'react'
import './Card.css'
import {AiFillLinkedin, AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import myphoto from '/assets/myphoto.jpeg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Card = () => {
  const navigate = useNavigate()
  return (
    <div className='h-screen'>
      <div className="flex flex-col  h-fit w-fit shadow-xl shadow-gray-700 border-solid border-gray-500 border-4 rounded-2xl bg-[#01020A] text-gray-300">
        <div className="flex items-center justify-between m-3 mt-1 ">
          <h1 className='text-4xl font-bold underline decoration-[purple]'>Aarize</h1>
          <h1 className='text-lg font-bold hover:underline decoration-[purple]'>Web Developer</h1>
        </div>
         <div className="flex justify-center items-center p-3  ">
         <img src={myphoto} alt="" className='rounded-[25%] p-3 shadow-xl shadow-gray-700 border-solid border-4 m-3 border-[purple]'/>
         </div>
         <div className="m-3 mb-2 text-center flex flex-col ">
             <h1 className="text-2xl  font-bold"><span className='text-[fuchsia]'>Hello</span>, I am a</h1>
             <p className='text-lg font-bold'>Full stack web developer with diverse skill</p>
         </div>
        <div className="flex items-center justify-center">
         <a href="https://www.linkedin.com/in/shams-aarize-6b18a1202/" target="_blank"> <h1 className='text-4xl hover:text-[purple] hover:rounded-[25%] font-bold m-3 cursor-pointer p-2 border-solid border-2 border-[purple] rounded-[50%]'><AiFillLinkedin/></h1></a>
          <a href="https://github.com/Aarize29" target="_blank"><h1 className='text-4xl hover:text-[purple] hover:rounded-[25%] font-bold m-3 cursor-pointer p-2 border-solid border-2 border-[purple] rounded-[50%]'><AiFillGithub/></h1></a>
          <a href="https://twitter.com/ShamsAarize" target="_blank"><h1 className='text-4xl hover:text-[purple] hover:rounded-[25%] font-bold m-3 cursor-pointer p-2 border-solid border-2 border-[purple] rounded-[50%]'><AiOutlineTwitter/></h1></a>
          <Link to="/contact"><h1 className='text-4xl hover:text-[purple] hover:rounded-[25%] font-bold m-3 cursor-pointer p-2 border-solid border-2 border-[purple] rounded-[50%]'><MdEmail/></h1></Link>
          </div>
          <div className="flex justify-center items-center">
              <button className='text-2xl font-bold bg-[purple] text-white  p-3 rounded-2xl w-full ml-5 mr-5 hover:bg-gray-900 hover:border-2  border-solid border-[purple]' onClick={()=>{navigate('/contact')}}>Hire Me</button>
          </div>
      </div>
    </div>
  )
}

export default Card
