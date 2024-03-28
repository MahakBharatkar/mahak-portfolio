import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import About from './components/About'
import Footer from './components/Footer'
import Experience from './components/Experience'
import TechStack from './components/Techstack'

function App() {

  return (
    <div className='main_container'>
      <Heading/>
      <About/>
      <TechStack/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default App
