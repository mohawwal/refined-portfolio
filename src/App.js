import React from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Body from './components/Body/Body.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/About.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';
import profileImg from './components/File/Image/profile-img.JPG'

const App = () => {
  

  return (
    <div>
      <BrowserRouter>
        <Nav/>
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