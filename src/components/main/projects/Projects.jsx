import React from 'react'
import './Projects.css'
import thequran from '../../../assets/thequran.png'
import farmsense from '../../../assets/farmsense.png'
import netflix from '../../../assets/netflix.png'
import texttospeech from '../../../assets/texttospeech.png'
const Projects = () => {
  return (
    <div className='overflow-y-scroll mt-2 text-white flex p-5 flex-col hide-scrollbar h-screen'>
      <div className='text-4xl text-[purple] font-bold m-4 mb-4 underline decoration-white'>
        My Projects</div>
         <p className='text-center text-md m-2'>Scroll down to see more</p>
      <div className="flex w-full items-center border-solid border-4 border-gray-700 rounded-2xl p-5 shadow-lg shadow-gray-500 mb-5">
        <img src={thequran} className='w-1/2 h-1/2 m-5 rounded-2xl shadow-lg shadow-gray-500' alt="" />
        <div className='flex text-white jusitfy-center items-center flex-col m-5'>
          <h1 className='text-2xl font-bold text-center mb-4 '>The Quran</h1>
          <p className='text-lg font-semibold text-center text-gray-300'>One of my dream project, In this website you will get the complete english translation of the Holy Quran chapterwise along with arabic youtube videos, This website is responsive for all the screen views, It is open sourced as well, many people has contributed in it.</p>

          <div className='flex justify-between  mt-5 items-center '>
          < a  target="_blank"  href='https://github.com/Aarize29/The-Quran'><button className='text-white text-lg font-bold hover:bg-gray-900 w-fit h-fit p-1 m-3 rounded-2xl hover:underline bg-[purple]  '>Source Code</button></ a>
          < a  target="_blank"  href='https://the-quran-two.vercel.app/'><button className='text-white text-lg font-bold hover:bg-gray-900 w-fit h-fit p-1 m-3 rounded-2xl hover:underline bg-[purple]  '>View Live</button></ a>
          
          </div>
        </div>
      </div>
      <div className="flex w-full items-center border-solid border-4 border-gray-700 rounded-2xl p-5 shadow-lg shadow-gray-500 mb-5">
        <img src={farmsense} className='w-1/2 h-1/2 m-5 rounded-2xl shadow-lg shadow-gray-500' alt="" />
        <div className='flex text-white jusitfy-center items-center flex-col m-5'>
          <h1 className='text-2xl font-bold text-center mb-4'>farmSense.ai</h1>
          <p className='text-lg font-semibold text-center text-gray-300'>farmSense.ai is a one stop solution for farmers, It is an AI based website, which has five different models, here you can detect chicken and plant disease, also you can find invesis plant species and also you can classify wheather the egg is fertilized or not. It uses firebase as backend</p>

          <div className='flex justify-between  mt-5 items-center '>
          < a  target="_blank"  href='https://github.com/RahulRudra81/farmsense.ai'><button className='text-white text-lg font-bold hover:bg-gray-900 w-fit h-fit p-1 m-3 rounded-2xl hover:underline bg-[purple]  '>Source Code</button></ a>
          < a  target="_blank"  href='https://farmsense-ai.vercel.app/'><button className='text-white text-lg font-bold hover:bg-gray-900 w-fit h-fit p-1 m-3 rounded-2xl hover:underline bg-[purple]  '>View Live</button></ a>
          
          </div>
        </div>
      </div>
      <div className="flex w-full items-center border-solid border-4 border-gray-700 rounded-2xl p-5 shadow-lg shadow-gray-500 mb-5">
        <img src={texttospeech} className='w-1/2 h-1/2 m-5 rounded-2xl shadow-lg shadow-gray-500' alt="" />
        <div className='flex text-white jusitfy-center items-center flex-col m-5'>
          <h1 className='text-2xl font-bold text-center mb-4'>Text To Speech Converter</h1>
          <p className='text-lg font-semibold text-center text-gray-300'>In this webapp you can convert text messeage to speech in one click, This webapp is built using react-speech-kit, It has modern UI and is responsive for mobile and tablet view also</p>

          <div className='flex justify-between  mt-5 items-center '>
          < a  target="_blank"  href='https://github.com/Aarize29/TextToSpeech'><button className='text-white text-lg font-bold hover:bg-gray-900 w-fit h-fit p-1 m-3 rounded-2xl hover:underline bg-[purple]  '>Source Code</button></ a>
          < a  target="_blank"  href='https://text-to-speech-app-lyart.vercel.app/'><button className='text-white text-lg font-bold hover:bg-gray-900 w-fit h-fit p-1 m-3 rounded-2xl hover:underline bg-[purple]  '>View Live</button></ a>
          
          </div>
        </div>
      </div>
      <div className="flex w-full items-center border-solid border-4 border-gray-700 rounded-2xl p-5 shadow-lg shadow-gray-500 mb-5">
        <img src={netflix} className='w-1/2 h-1/2 m-5 rounded-2xl shadow-lg shadow-gray-500' alt="" />
        <div className='flex text-white jusitfy-center items-center flex-col m-5'>
          <h1 className='text-2xl font-bold text-center mb-4'>Netflix UI clone</h1>
          <p className='text-lg font-semibold text-center text-gray-300'>This website is a UI clone of netlfix.com, It uses  TMDB movie api to fetch the latest and trendings movies on netflix, This website is hosted using firebase</p>

          <div className='flex justify-between  mt-5 items-center '>
          < a  target="_blank"  href='https://github.com/Aarize29/Netflix-web-app-clone'><button className='text-white text-lg font-bold hover:bg-gray-900 w-fit h-fit p-1 m-3 rounded-2xl hover:underline bg-[purple]  '>Source Code</button></ a>
          < a  target="_blank"  href='https://netflix-clone-532de.web.app/'><button className='text-white text-lg font-bold hover:bg-gray-900 w-fit h-fit p-1 m-3 rounded-2xl hover:underline bg-[purple]  '>View Live</button></ a>
          
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Projects
