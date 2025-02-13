// import { useState } from 'react'
import './App.css';
import Header from './components/Header/header';
import HomeSection from './components/Home/home-sectin';
import Skills from './components/Skills-Carusel/skills';
import About from './components/About-my/about';
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <div className='app'>
        <Header className='header-item'/>
        <HomeSection className='header-item'/>
        <Skills className='header-item'/>
        <About className='header-item'/>
        <Portfolio className='header-item'/>
      </div>
    </>
  )
}

export default App
