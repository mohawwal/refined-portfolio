import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
// import Body from './components/Body/Body.jsx'
import { BrowserRouter } from 'react-router-dom';
// import About from './components/About/About.jsx';
// import Portfolio from './components/Portfolio/Portfolio.jsx';
// import Contact from './components/Contact/Contact.jsx';
// import profileImg from './components/File/Image/profile-img.JPG'
import lightMode from "./components/File/Image/light-mode-icon.png"
import darkMode from "./components/File/Image/dark-mode-icon.png"
import AnimatedRoute from './components/pages/AnimatedRoute.js';

const App = () => {
  const [lightScreenMode, setLightScreenMode] = useState(false)

  const toggleMode = () => {
    setLightScreenMode(!lightScreenMode)
  }

  return (
    <div>
      <BrowserRouter>
        <Nav lightMode={lightMode} darkMode={darkMode} toggleMode={toggleMode} lightScreenMode={lightScreenMode}/>
        <AnimatedRoute />
      </BrowserRouter>
    </div>
  )
}

export default App