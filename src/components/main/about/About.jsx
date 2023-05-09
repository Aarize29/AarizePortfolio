import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
const About = () => {
  return (
    <div className='rounded-2xl bg-backimage p-2 transform -scale-x-100 bg-repeat-space '>
       <div className='text-xl text-gray-300 flex items-center justify-center flex-col  mt-20 text-gray-300 text-center transform -scale-x-100'>
<h1>Hello, my name is <span className='text-[purple] text-2xl font-semibold'>Shams Aarize  Siddique</span> . I am a full stack web developer with expertise in ReactJS, Tailwind CSS, React-Redux, Firebase, Node-ExpressJS, and MongoDB. I am currently learning NextJS and exploring the exciting field of Artificial Intelligence and Machine Learning. <Link to='/skills'><span className='text-[purple] text-2xl font-semibold cursor-pointer hover:underline decoration-white'> My skills</span></Link> include machine learning concepts like Pandas, NumPy, Seaborn, Matplotlib, and various machine learning algorithms. Apart from web development, I am also proficient in Java and C. With a passion for coding and a constant thirst for knowledge, I strive to keep myself updated with the latest advancements in technology. I believe in delivering quality work and building lasting relationships with clients.</h1> <span className='font-bold text-[purple]'>Let's connect and discuss how we can bring your ideas to life!</span></div>

    <div className='flex items-center justify-between mt-[15%] transform -scale-x-100 '>
          <Link to='/contact'><button className='text-white text-lg font-bold hover:bg-gray-300 w-fit h-fit p-3 rounded-2xl hover:underline hover:text-[purple] bg-[purple] '>Contact Me</button></Link>
          <Link to='/skills'><span className='text-[purple] flex items-center justify-between text-2xl font-semibold cursor-pointer hover:underline decoration-white'> My Skills <BsArrowRight className='m-2'/></span></Link>
        </div>
    </div>

    
  )
}

export default About
