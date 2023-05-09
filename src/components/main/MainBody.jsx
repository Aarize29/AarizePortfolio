import React from 'react'
import './MainBody.css'
import Navbar from '../navbarComponent/Navbar'


const MainBody = () => {
  return (
    <div className='flex flex-col h-screen'>
      
      <Navbar/>
      <div className='overflow-y-scroll mt-2  flex p-10 flex-col hide-scrollbar'>
      
      </div>
      
    </div>
  )
}

export default MainBody
