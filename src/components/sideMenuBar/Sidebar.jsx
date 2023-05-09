import React from 'react'
import { useState } from "react";
import './Sidebar.css'
import {IoHome, IoPerson} from 'react-icons/io5'
import {TbIcons, TbWebhook} from 'react-icons/tb'
import {RiContactsBookFill} from 'react-icons/ri'
import {AiFillSetting} from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };
  return (
   <>      
       <div className="flex flex-col border-4 border-solid items-center justify-center mt-[10%] ml-2 rounded-[40px] p-2 h-fit hover:bg-gray-900 border-gray-700">
      <button 
        className="w-10 h-10 text-2xl rounded-full my-2 hover:bg-[purple] relative"
        onMouseEnter={() => handleIconHover("Home")}
        onMouseLeave={handleIconLeave}
      >
       <Link to='/'> <IoHome className="m-auto text-white" /></Link>
        {hoveredIcon === "Home" && (
          <p className="absolute text-sm bg-gray-300 rounded-2xl font-bold -right-16 top-1/2 transform -translate-y-1/2">
            Home
          </p>
        )}
      </button>
      <button
        className="w-10 h-10 text-2xl rounded-full my-2 hover:bg-[purple] relative"
        onMouseEnter={() => handleIconHover("About")}
        onMouseLeave={handleIconLeave}
      >
       <Link to='/about'> <IoPerson className="m-auto text-white" /></Link>
        {hoveredIcon === "About" && (
          <p className="absolute text-sm bg-gray-300 rounded-2xl font-bold -right-16 top-1/2 transform -translate-y-1/2">
            About
          </p>
        )}
      </button>
      <button
        className="w-10 h-10 text-2xl rounded-full my-2 hover:bg-[purple] relative"
        onMouseEnter={() => handleIconHover("Skills")}
        onMouseLeave={handleIconLeave}
      >
        <Link to='/skills'><TbIcons className="m-auto text-white" /></Link>
        {hoveredIcon === "Skills" && (
          <p className="absolute text-sm bg-gray-300 rounded-2xl font-bold -right-16 top-1/2 transform -translate-y-1/2">
            Skills
          </p>
        )}
      </button>
      <button
        className="w-10 h-10 text-2xl rounded-full my-2 hover:bg-[purple] relative"
        onMouseEnter={() => handleIconHover("Projects")}
        onMouseLeave={handleIconLeave}
      >
        <Link to='/projects'><TbWebhook className="m-auto text-white" /></Link>
        {hoveredIcon === "Projects" && (
          <p className="absolute text-sm bg-gray-300 rounded-2xl font-bold -right-16 top-1/2 transform -translate-y-1/2">
            Projects
          </p>
        )}
      </button>
      <button
        className="w-10 h-10 text-2xl rounded-full my-2 hover:bg-[purple] relative"
        onMouseEnter={() => handleIconHover("Contact Me")}
        onMouseLeave={handleIconLeave}
      >
        <Link to='/contact'><RiContactsBookFill className="m-auto text-white" /></Link>
        {hoveredIcon === "Contact Me" && (
          <p className="absolute text-sm bg-gray-300 rounded-2xl font-bold -right-16 top-1/2 transform -translate-y-1/2">
            Contact
          </p>
        )}
      </button>
      <button
        className="w-10 h-10 text-2xl rounded-full my-2 hover:bg-[purple] relative"
        onMouseEnter={() => handleIconHover("Setting")}
        onMouseLeave={handleIconLeave}
      >
        <AiFillSetting className="m-auto text-white" />
        {hoveredIcon === "Setting" && (
          <p className="absolute text-sm bg-gray-300 rounded-2xl font-bold -right-16 top-1/2 transform -translate-y-1/2">
            Setting
          </p>
        )}
      </button>
    </div>
   </>
  )
}

export default Sidebar
