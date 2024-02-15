import React, { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Body from './components/Body/Body.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';
import profileImg from './components/File/Image/profile-img.JPG'
import lightMode from "./components/File/Image/light-mode-icon.png"
import darkMode from "./components/File/Image/dark-mode-icon.png"

const App = () => {
  const [lightScreenMode, setLightScreenMode] = useState(false)

  const toggleMode = () => {
    setLightScreenMode(!lightScreenMode)
  }

  // useEffect(() => {
  //   if(lightScreenMode) {
  //     document.body.classList.add("light")
  //   }else {
  //     document.body.classList.remove('light')
  //   }
  // }, [lightScreenMode])

  return (
    <div>
      <BrowserRouter>
      <Nav lightMode={lightMode} darkMode={darkMode} toggleMode={toggleMode} lightScreenMode={lightScreenMode}/>
        <Routes>
          <Route path='/' element={<Body profileImg={profileImg}/> } />
          <Route path='/About' element={<About profileImg={profileImg}/>} />
          <Route path='/Portfolio' element={<Portfolio/>} />
          <Route path='/Contact' element={<Contact/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App