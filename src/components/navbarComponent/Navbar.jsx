import React, {useState} from 'react'
import './Navbar.css'
import {FiSun} from 'react-icons/fi'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isDark, setIsDark] = useState(false)
    const handleDarkmode = () => {
        setIsDark(!isDark)
    }
  return (
    <div className='flex justify-between m-5 items-center shadow-lg fix  p-3 shadow-purple-900 rounded-xl text-white'>
      
      <div className="">
        <Link to='/'><h1 className='text-4xl font-bold underline decoration-[purple]'>Aarize</h1></Link>
      </div>
      <div className="flex justify-between items-center text-2xl font-bold">
        {/* <div onClick={handleDarkmode} className='mr-3'>
        {isDark ?<BsFillMoonStarsFill className='cursor-pointer hover:text-[purple] hover:transition-transform transition-all'/>:<FiSun className='cursor-pointer hover:text-[purple] hover:transition-transform transition-all transform rotate-180'/> }
        </div> */}
        <a href="https://drive.google.com/file/d/1Z6_jhlVh7LBGYRGdIzFX8RY1CJ3M-OJ_/view?usp=sharing" target='_blank'><h1 className='m-2 hover:underline decoration-[purple] cursor-pointer hover:transition-transform transition-all '>Resume</h1></a>
      </div>

      
    </div>
  )
}

export default Navbar
