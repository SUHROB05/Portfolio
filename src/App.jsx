// import { useState } from 'react'
import './App.css';


import Header from './components/Header/header';
import HomeSection from './components/Home/home-sectin';
import Skills from './components/Skills-Carusel';
import About from './components/About-my/about';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact-me'
import Footer from './components/Footer/footer'
import Button from './components/Button__cursor'


function App() {

  return (
    <>
      <div className='app'>
        <Header className='header-item' />
        <HomeSection className='header-item' />
        <Button />
        <Skills className='header-item' />
        <About className='header-item' />
        <Portfolio className='header-item' />
        <Contact />
        <Footer className='footer' />
      </div>
    </>
  )
}

export default App
