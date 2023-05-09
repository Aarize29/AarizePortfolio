import './App.css'
import Sidebar from './components/sideMenuBar/Sidebar'
import MainBody from './components/main/MainBody'
import Card from './components/card/Card'
import Hero from '../src/components/main/hero/Hero'
import About from '../src/components/main/about/About'
import Skills from '../src/components/main/skills/Skills'
import Projects from '../src/components/main/projects/Projects'
import Contact from '../src/components/main/contact/Contact'
import Navbar from '../src/components/navbarComponent/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <Router>
      <div className="flex justify-between bg-[#01020A] ">
        <Sidebar/>
        <div className='w-8/12 '>
        <Navbar/>
         <div className=''>
         <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>}/>
       </Routes>
         </div>
        </div>
        <div className='w-3/12 '>
        <Card/>
        </div>
      </div>
    </Router>
   
  )
}

export default App
