import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import AboutMe from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AboutMe/>
      <Services/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home