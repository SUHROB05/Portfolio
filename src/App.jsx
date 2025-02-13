// import { useState } from 'react'
import './App.css';
import Header from './components/Header/header';
import HomeSection from './components/Home/home-sectin';
import Skills from './components/Skills-Carusel/skills';
import About from './components/About-my/about';

function App() {

  return (
    <>
      <div className='app'>
        <Header className='header-item'></Header>
        <HomeSection></HomeSection>
        <Skills></Skills>
        <About></About>
      </div>
    </>
  )
}

export default App
