import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testmonials from './Components/Testimonisal/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/VideoPlayer/Videoplayer'

const App = () => {
  const [playstate, setPlaystate] =useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle="Our Program" title="What We Offer"/>{/*Here we are passing props*/}
        <Programs/>
        <About setPlaystate={setPlaystate}/>
        <Title subTitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subTitle="TESTIMONIALS" title="What Student Says"/>
        <Testmonials/>
        <Title subTitle="Contact Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>

      <Videoplayer playstate={playstate} setPlaystate={setPlaystate}/>
      
    </div>
  )
}

export default App
