import React from 'react';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IoHome, IoPerson } from 'react-icons/io5';
import { TbIcons, TbWebhook } from 'react-icons/tb';
import { RiContactsBookFill } from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';
import './Sidebar.css';

const menuItems = [
  { name: 'Home', path: '/', icon: <IoHome /> },
  { name: 'About', path: '/about', icon: <IoPerson /> },
  { name: 'Skills', path: '/skills', icon: <TbIcons /> },
  { name: 'Projects', path: '/projects', icon: <TbWebhook /> },
  { name: 'Contact', path: '/contact', icon: <RiContactsBookFill /> },
 
];

const Sidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const { pathname } = useLocation();

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const isCurrentPath = (path) => {
    return pathname === path;
  };

  return (
    <div className="flex flex-col border-4 border-solid items-center justify-center mt-[10%] ml-2 rounded-[40px] p-2 h-fit hover:bg-gray-900 border-gray-700">
      {menuItems.map((item) => (
        <button
          key={item.name}
          className={`w-10 h-10 text-2xl text-white flex justify-center items-center rounded-full my-2 ${
            isCurrentPath(item.path) ? 'bg-[purple]' : 'hover:bg-purple-500'
          } relative`}
          onMouseEnter={() => handleIconHover(item.name)}
          onMouseLeave={handleIconLeave}
        >
          <Link to={item.path}>{item.icon}</Link>
          {hoveredIcon === item.name && (
            <p className="absolute text-sm bg-gray-300 rounded-2xl font-bold -right-16 top-1/2 transform -translate-y-1/2">
              {item.name}
            </p>
          )}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
