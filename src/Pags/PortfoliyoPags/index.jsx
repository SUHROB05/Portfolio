import React from 'react'
import './partfoliopages.scss'
import { Link } from 'react-router-dom';
import { HiArrowCircleLeft } from "react-icons/hi";
import { CgArrowTopLeftO } from "react-icons/cg";

import cardPick1 from '../../assets/imgs/P-rasim1.png'
import cardPick2 from '../../assets/imgs/P-rasim2.png'
import cardPick3 from '../../assets/imgs/P-rasim3.png'
import cardPick4 from '../../assets/imgs/P-rasim4.png'
import cardPick5 from '../../assets/imgs/P-rasim5.png'
import cardPick6 from '../../assets/imgs/P-rasim6.png'
import cardPick7 from '../../assets/imgs/Furnero.png'
import cardPick8 from '../../assets/imgs/Arhitiktura.png'
import cardPick9 from '../../assets/imgs/P-rasim9.png'
import cardPick10 from '../../assets/imgs/P-rasim10.png'
import cardPick11 from '../../assets/imgs/P-rasim11.png'
import cardPick12 from '../../assets/imgs/P-rasim12.png'
import cardPick13 from '../../assets/imgs/P-rasim13.png'


function PartfoliyaPags() {
  return (
    <section className='partfolio__peges portfolio__section' >
      <div className="home__btn" id='id'>
        <Link to='/'>
          <HiArrowCircleLeft className='home-btn' />
          <p>Home</p>
        </Link>
      </div>
      <div className='sarlovha-p'>
        <h2>Portfolio</h2>
      </div>

      {/* katta bo'lim */}
      <div className='portfolio__contaynerr'>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick8} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>Architecture</h3>
            <a href='https://axiomnexus-no1.vercel.app'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick7} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>Furnero</h3>
            <a href='https://furnero-01-emj2.vercel.app/'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick3} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>Me Portfolio</h3>
            <a href='https://vercel.com/suhrob05s-projects/portfolio-eei1'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
      </div>

      <div className="kursor__button button__top">
        <a href="#id"><button><CgArrowTopLeftO className='button-icon' /></button></a>
      </div>
      
      <div className="kichik__desginlar">
        <h2>//////////////////////////////////////////////////////////////////////////////</h2>
      </div>
      {/* kichik pageslar */}
      <div className='portfolio__contaynerr'>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick1} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>Panto</h3>
            <a href='https://5-oy-imtihon-mauve.vercel.app/'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick2} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>Food</h3>
            <a href='https://frontent-2oy-72-s781.vercel.app/#'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick9} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>Dashbord</h3>
            <a href='https://5-oy-6-dars-figma.vercel.app/'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick4} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>Dashboard__1 </h3>
            <a href='https://5-oy-5-dars-figma.vercel.app/'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick5} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>Where in the world?</h3>
            <a href='https://6-oy-n85.vercel.app/7-dars/home2/index.html'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick6} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>Dashboard__2</h3>
            <a href='https://5-oy-4-dars-figma.vercel.app/'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick10} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>FREE</h3>
            <a href='https://4-oy-mustaqil-ish.vercel.app/'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick11} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>O'simliklar olami</h3>
            <a href='https://4-oy-shaxsiy-prekt-2.vercel.app/'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick12} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>Tudu List</h3>
            <a href='https://6-oy-n85-home.vercel.app/2-dars/index.html'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
        <div className='p__card'>
          <div className='p__card-img'>
            <img src={cardPick13} alt="" />
          </div>
          <div className='p__card-text'>
            <h3>Carusel </h3>
            <a href='https://6-oy-n85-home.vercel.app/4-dars/home/carusel/indeh.html'><button>&gt;&gt;&gt;</button></a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default PartfoliyaPags