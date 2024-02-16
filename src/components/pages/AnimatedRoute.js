import React from 'react'
import Body from '../Body/Body.jsx'
import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../About/About.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Contact from '../Contact/Contact.jsx';
import profileImg from '../File/Image/profile-img.JPG'

import {AnimatePresence} from "framer-motion"

const AnimatedRoute = () => {
    const location = useLocation() 
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Body profileImg={profileImg}/> } />
            <Route path='/About' element={<About profileImg={profileImg}/>} />
            <Route path='/Portfolio' element={<Portfolio/>} />
            <Route path='/Contact' element={<Contact/>} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoute