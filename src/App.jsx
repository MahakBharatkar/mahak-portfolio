import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import About from './components/About'
import Footer from './components/Footer'
import Experience from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main_container'>
      <Heading/>
      <About/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default App
