import React from 'react'
import './MainBody.css'
import {AiFillLinkedin, AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {BsArrowRight} from 'react-icons/bs'
import {GrReactjs} from 'react-icons/gr'
import {SiExpress,SiFirebase, SiPython,SiPandas, SiNumpy, SiMongodb} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {IoHome, IoPerson} from 'react-icons/io5'
import {TbIcons, TbWebhook} from 'react-icons/tb'
import {RiContactsBookFill} from 'react-icons/ri'
import {AiFillSetting} from 'react-icons/ai'
import myphoto from '/assets/myphoto.jpeg'
import thequran from '/assets/thequran.png'
import farmsense from '/assets/farmsense.png'
import netflix from '/assets/netflix.png'
import texttospeech from '/assets/texttospeech.png'

import { useState } from 'react'
import { addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { collection } from 'firebase/firestore';



const MainBody = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName('');
    setEmail('');
    setMessage('');

    addDoc(collection(db, 'contacts'), {
      name: name,
      email: email,
      message: message,
      time: new Date(),
    })
      .then(() => {
        alert('Message has been submitted');
      }
      )
  };
  return (
    <div className='flex flex-col bg-[#01020A] '>
        {/* <h1 className='text-white'>Hello World</h1> */}
       <div className='overflow-y-scroll    flex  flex-col hide-scrollbar'>
       
       {/* Navbar */}
       <div className="flex fixed w-full items-center justify-between bg-[#01020A]  p-2 h-fit  text-2xl ">
      
       <a href='#' >
  <IoHome className="mr-1  text-white" />
</a>
        
      
       <a href='#about' >
  <IoPerson className="mr-1 text-white" />
</a>
       <a href='#experience' >
  <AiFillSetting className="mr-1 text-white" />
</a>
        
      
       <a href='#skills' >
  <TbIcons className="mr-1 text-white" />
</a>
        
      
        <a href='#projects' >
  <TbWebhook className="mr-1 text-white" />
</a>
        
     
        <a href='#contact'>
  <RiContactsBookFill className="mr-1 text-white" />
</a>
       
      
    </div>
      {/* Card */}
      <div className="flex flex-col mt-10  w-screen shadow-xl shadow-gray-700 border-solid border-gray-500 border-4 rounded-2xl bg-[#01020A] text-gray-300">
        <div className="flex items-center justify-between m-3 mt-1 ">
          <h1 className='text-4xl font-bold underline decoration-[purple]'>Aarize</h1>
          <a href="https://drive.google.com/file/d/1Kgljrw9kRaHKsT2_3dNJ9AZ8Y_3V2g8O/view?usp=sharing" target='_blank'><h1 className='m-2 text-2xl font-bold underline decoration-[purple] cursor-pointer hover:transition-transform transition-all '>Resume</h1></a>
        </div>
         <div className="flex justify-center items-center p-3  ">
         <img src={myphoto} alt="" className='rounded-[25%] p-3 shadow-xl shadow-gray-700 border-solid border-4 m-3 w-fit h-fit border-[purple]'/>
         </div>
         <div className="m-3 mb-2 text-center flex flex-col ">
             <h1 className="text-2xl  font-bold"><span className='text-[fuchsia]'>Hello</span>, I am a</h1>
             <p className='text-lg font-bold'>Full stack web developer with diverse skill</p>
         </div>
        <div className="flex items-center justify-center">
         <a href="https://www.linkedin.com/in/shams-aarize-6b18a1202/" target="_blank"> <h1 className='text-4xl hover:text-[purple] hover:rounded-[25%] font-bold m-3 cursor-pointer p-2 border-solid border-2 border-[purple] rounded-[50%]'><AiFillLinkedin/></h1></a>
          <a href="https://github.com/Aarize29" target="_blank"><h1 className='text-4xl hover:text-[purple] hover:rounded-[25%] font-bold m-3 cursor-pointer p-2 border-solid border-2 border-[purple] rounded-[50%]'><AiFillGithub/></h1></a>
          <a href="https://twitter.com/ShamsAarize" target="_blank"><h1 className='text-4xl hover:text-[purple] hover:rounded-[25%] font-bold m-3 cursor-pointer p-2 border-solid border-2 border-[purple] rounded-[50%]'><AiOutlineTwitter/></h1></a>
          <a href="#contact"><h1 className='text-4xl hover:text-[purple] hover:rounded-[25%] font-bold m-3 cursor-pointer p-2 border-solid border-2 border-[purple] rounded-[50%]'><MdEmail/></h1></a>
          </div>
          <div className="flex justify-center items-center">
              <a href='#contact' className='text-2xl text-center font-bold bg-[purple] text-white  p-3 rounded-2xl w-full ml-5 mr-5 hover:bg-gray-900 hover:border-2  border-solid border-[purple]'>Hire Me</a>
          </div>

    
    </div>

      {/* Hero */}
      <div id='home' className= ' mt-10  flex flex-col flex-wrap bg-backimage bg-repeat-space  '>
       <div className="">
       <h1 className="text-4xl font-bold m-3 text-fuchsia-500">
       Peace Be Upon You,
       </h1>
       <h1 className='text-4xl ml-10 mb-5 text-white font-semibold'>Hello, I am Shams Aarize Siddique,</h1>
       <p className=' p-5 text-xl text-gray-300'>"A web developer with experience in designing and developing fully functional responsive websites and applications. I am passionate about creating user-friendly and visually appealing digital solutions using cutting-edge technologies."</p>
       <a href='#about'><div className="flex justify-end items-end text-fuchsia-500 mr-5 text-xl underline cursor-pointer"><h1 className=' hover:text-white'>Know more about me...</h1></div></a>
        
        <div className='flex items-center justify-center mt-[20%]'>
          <a href='#projects'><button className='text-white text-lg font-bold hover:bg-gray-300 w-fit h-fit p-3 rounded-2xl hover:underline hover:text-[purple] bg-[purple] '>Have a look on my projects</button></a>
        </div>
      
       </div>
    </div>
    {/* About */}
    <div id='about' className='w-screen flex flex-col items-center justify-center'> 
       <h1 className='text-center mt-20 text-[fuchsia] underline decoration-white text-4xl font-bold'>About</h1>
       <div className='text-xl  text-gray-300 flex items-center justify-center flex-col m-5 text-gray-300  '>
<h1>I am a full stack web developer with expertise in ReactJS, Tailwind CSS, React-Redux, Firebase, Node-ExpressJS, and MongoDB. I am currently learning NextJS and exploring the exciting field of Artificial Intelligence and Machine Learning. <a href='#skills'><span className='text-[fuchsia] text-2xl font-semibold cursor-pointer hover:underline decoration-white'> My skills</span></a> include machine learning concepts like Pandas, NumPy, Seaborn, Matplotlib, and various machine learning algorithms. Apart from web development, I am also proficient in Java and C. With a passion for coding and a constant thirst for knowledge, I strive to keep myself updated with the latest advancements in technology. I believe in delivering quality work and building lasting relationships with clients.</h1> <span className='font-bold text-fuchsia-500'>Let's connect and discuss how we can bring your ideas to life!</span></div>

    <div className='flex items-center justify-center mt-5 '>
          <a href='#contact'><button className='text-white text-lg font-bold hover:bg-gray-300 w-fit h-fit p-3 rounded-2xl hover:underline hover:text-[purple] bg-[purple] '>Contact Me</button></a>
          {/* <a href='skills'><span className='text-fuchsia-500 flex items-center justify-between text-2xl font-semibold cursor-pointer hover:underline decoration-white'> My Skills <BsArrowRight className='m-2'/></span></a> */}
        </div>
    </div>
 
    {/* Experience */}
    <div id='experience'>
    <h1  className='text-center mt-20 text-[fuchsia] underline decoration-white text-4xl font-bold'>Experience</h1>
    <div  className=' mt-2 w-screen text-white flex p-5 flex-col'>
    <div className=' rounded-2xl  p-2 transform -scale-x-100 bg-repeat-space '>
          <div className='text-xl text-gray-300    mt-20 text-gray-300 text-center transform -scale-x-100'>
        <div className='flex flex-col ml-5 mr-5  items-center' ><span className='text-fuchsia-500 mb-5 '>Intern At AvidSynth </span>
        <span className='text-fuchsia-500'>June 2023 - Present</span>
        </div>

        <p className='m-5'>As a full-stack intern at AvidSynth, I played a pivotal role in crafting the company's website, excelling in both frontend and backend development to deliver a seamless and dynamic user experience.

        As a full-stack intern at AvidSynth, I skillfully utilized Node.js, React-Flow, Tailwind CSS, Firebase, and React.js .
        </p>
        </div>
        <div className='text-xl text-gray-300    mt-20 text-gray-300 text-center transform -scale-x-100'>
        <div className='flex ml-5 mr-5 flex-col items-center' ><span className='text-fuchsia-500 mb-5'>Open Source Contributor At GSSOC2023 </span>
        <span className='text-fuchsia-500'>May 2023 - Present</span>
        </div>

        <p className='m-5'>As an open-source contributor at GirlScript Summer of Code, I actively contributed to various projects, collaborating with a diverse team to create meaningful solutions and empower the community through code.
        </p>
        </div>

        
    </div>
    </div>
    </div>
    


             
    {/* Skills */}
      
    <div id='skills' className='flex w-screen flex-col'>
      <div className='flex items-center justify-center text-4xl text-[fuchsia] font-bold mt-10 underline decoration-white'>My Skills</div>

      <div className='flex flex-wrap justify-center items-center  '>
        <a href="https://react.dev/learn" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-4xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><GrReactjs/></div></a>
        <a href="https://expressjs.com/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-4xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiExpress/></div></a>
        <a href="https://nodejs.org/en/docs" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-4xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><FaNodeJs/></div>
        </a>
        <a href="https://www.mongodb.com/docs/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-4xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiMongodb/></div>
        </a>
        <a href="https://firebase.google.com/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-4xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiFirebase/></div></a>
        <a href="https://docs.python.org/3/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-4xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiPython/></div></a>
        <a href="https://pandas.pydata.org/docs/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-4xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiPandas/></div></a>
        <a href="https://numpy.org/doc/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-4xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><SiNumpy/></div></a>
        <a href="https://nextjs.org/" target="_blank"><div className='flex rounded-[50%] p-3 hover:text-purple-700 hover:border-[purple] hover:rotate-90 text-4xl text-[fuchsia] border-4 border-solid border-gray-700 font-bold mt-10 underline decoration-gray-700 m-5'><TbBrandNextjs/></div></a>
      </div>


     <div className="flex flex-col justify-between">
     <p className='text-sm text-white text-center font-semibold'>**Click on icons to go to official documentations**</p>
      {/* <a href='projects'><span className='text-[fuchsia] flex items-center justify-center text-xl font-semibold cursor-pointer hover:underline decoration-white'> My Projects <BsArrowRight className='m-2'/></span></a> */}
     </div>
    </div>

    {/* Projects */}

    <div id='projects' className='text-4xl w-screen  text-center text-[fuchsia] font-bold m-4 mt-5 mb-4 underline decoration-white'>
        My Projects</div>
    <div className='overflow-y-scroll mt-2 w-screen text-white flex p-5 flex-col hide-scrollbar h-screen'>
      
         {/* <p className='text-center text-md m-2'>Scroll down to see more</p> */}
      <div className="flex flex-col items-center border-solid border-4 border-gray-700 rounded-2xl p-5 shadow-lg shadow-gray-500 mb-5">
        <img src={thequran} className='w-fit h-fit m-5 rounded-2xl shadow-lg shadow-gray-500' alt="" />
        <div className='flex text-white jusitfy-center items-center flex-col m-5'>
          <h1 className='text-2xl font-bold text-center mb-4 '>The Quran</h1>
          <p className='text-lg font-semibold text-center text-gray-300'>One of my dream project, In this website you will get the complete english translation of the Holy Quran chapterwise along with arabic youtube videos, This website is responsive for all the screen views, It is open sourced as well, many people has contributed in it.</p>

          <div className='flex justify-between  mt-5 items-center '>
          < a  target="_blank"  href='https://github.com/Aarize29/The-Quran'><button className='text-white text-md font-bold hover:bg-gray-900 w-fit h-fit p-2 m-3 rounded-2xl hover:underline bg-[purple]  '>Source Code</button></ a>
          < a  target="_blank"  href='https://the-quran-two.vercel.app/'><button className='text-white text-md font-bold hover:bg-gray-900 w-fit h-fit p-2 m-3 rounded-2xl hover:underline bg-[purple]  '>View Live</button></ a>
          
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-center border-solid border-4 border-gray-700 rounded-2xl p-5 shadow-lg shadow-gray-500 mb-5">
        <img src={farmsense} className='w-fit h-fit m-5 rounded-2xl shadow-lg shadow-gray-500' alt="" />
        <div className='flex text-white jusitfy-center items-center flex-col m-5'>
          <h1 className='text-2xl font-bold text-center mb-4'>farmSense.ai</h1>
          <p className='text-lg font-semibold text-center text-gray-300'>farmSense.ai is a one stop solution for farmers, It is an AI based website, which has five different models, here you can detect chicken and plant disease, also you can find invesis plant species and also you can classify wheather the egg is fertilized or not. It uses firebase as backend</p>

          <div className='flex justify-between  mt-5 items-center '>
          < a  target="_blank"  href='https://github.com/RahulRudra81/farmsense.ai'><button className='text-white text-md font-bold hover:bg-gray-900 w-fit h-fit p-2 m-3 rounded-2xl hover:underline bg-[purple]  '>Source Code</button></ a>
          < a  target="_blank"  href='https://farmsense-ai.vercel.app/'><button className='text-white text-md font-bold hover:bg-gray-900 w-fit h-fit p-2 m-3 rounded-2xl hover:underline bg-[purple]  '>View Live</button></ a>
          
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center border-solid border-4 border-gray-700 rounded-2xl p-5 shadow-lg shadow-gray-500 mb-5">
        <img src={texttospeech} className='w-fit h-fit m-5 rounded-2xl shadow-lg shadow-gray-500' alt="" />
        <div className='flex text-white jusitfy-center items-center flex-col m-5'>
          <h1 className='text-2xl font-bold text-center mb-4'>Text To Speech Converter</h1>
          <p className='text-lg font-semibold text-center text-gray-300'>In this webapp you can convert text messeage to speech in one click, This webapp is built using react-speech-kit, It has modern UI and is responsive for mobile and tablet view also</p>

          <div className='flex justify-between  mt-5 items-center '>
          < a  target="_blank"  href='https://github.com/Aarize29/TextToSpeech'><button className='text-white text-md font-bold hover:bg-gray-900 w-fit h-fit p-2 m-3 rounded-2xl hover:underline bg-[purple]  '>Source Code</button></ a>
          < a  target="_blank"  href='https://text-to-speech-app-lyart.vercel.app/'><button className='text-white text-md font-bold hover:bg-gray-900 w-fit h-fit p-2 m-3 rounded-2xl hover:underline bg-[purple]  '>View Live</button></ a>
          
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center border-solid border-4 border-gray-700 rounded-2xl p-5 shadow-lg shadow-gray-500 mb-5">
        <img src={netflix} className='w-fit fit m-5 rounded-2xl shadow-lg shadow-gray-500' alt="" />
        <div className='flex text-white jusitfy-center items-center flex-col m-5'>
          <h1 className='text-2xl font-bold text-center mb-4'>Netflix UI clone</h1>
          <p className='text-lg font-semibold text-center text-gray-300'>This website is a UI clone of netlfix.com, It uses  TMDB movie api to fetch the latest and trendings movies on netflix, This website is hosted using firebase</p>

          <div className='flex justify-between  mt-5 items-center '>
          < a  target="_blank"  href='https://github.com/Aarize29/Netflix-web-app-clone'><button className='text-white text-md font-bold hover:bg-gray-900 w-fit h-fit p-2 m-3 rounded-2xl hover:underline bg-[purple]  '>Source Code</button></ a>
          < a  target="_blank"  href='https://netflix-clone-532de.web.app/'><button className='text-white text-md font-bold hover:bg-gray-900 w-fit h-fit p-2 m-3 rounded-2xl hover:underline bg-[purple]  '>View Live</button></ a>
          
          </div>
        </div>
      </div>

      
    </div>
    
    {/* Contact */}

     
      <h1 id='contact' className="text-center w-screen text-3xl text-[fuchsia] underline decoration-white font-bold mt-8 mb-8">Contact Me</h1>
    <div className="text-gray-200 w-screen border-solid border-4 border-gray-700 p-5 mt-2 mb-16  h-[83%]" >
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[purple]  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Submit
        </button>
      </form>

       <div className="flex flex-col justify-between items-center text-xl font-bold underline decoration-white text-[fuchsia] m-4">
         <div>+91 6203995489</div>
         <div>shamsaarize@gmail.com</div>
         <div>heymann955@gmail.com</div>
       </div>
    </div>



    </div>
      
    </div>
  )
}

export default MainBody
