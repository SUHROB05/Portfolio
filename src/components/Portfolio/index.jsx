import React from 'react'
import './portfolio.scss'
import cardPick1 from '../../assets/imgs/P-rasim1.png'
import cardPick2 from '../../assets/imgs/P-rasim2.png'
import cardPick3 from '../../assets/imgs/P-rasim3.png'
import cardPick4 from '../../assets/imgs/P-rasim4.png'
import cardPick5 from '../../assets/imgs/P-rasim5.png'
import cardPick6 from '../../assets/imgs/P-rasim6.png'
import cardPick7 from '../../assets/imgs/Furnero.png'
import cardPick8 from '../../assets/imgs/Arhitiktura.png'
import cardPick9 from '../../assets/imgs/Enternet__do-kon.png'
import { useNavigate } from "react-router-dom";


function portfolio() {
    const navigate = useNavigate();

    return (
        <section className='portfolio__section' id='Portfolio'>
            <div className='portfolio__text'>
                <h2>Portfolio</h2>
            </div>
            <div className='portfolio__contayner'>
                <div className='p__card'>
                    <div className='p__card-img'>
                        <img src={cardPick8} alt="" />
                    </div>
                    <div className='p__card-text'>
                        <h3>Architecture</h3>
                        <a href='https://axiomnexus-no1.vercel.app/'><button>&gt;&gt;&gt;</button></a>
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
                <div className='p__card'>
                    <div className='p__card-img'>
                        <img src={cardPick9} alt="" />
                    </div>
                    <div className='p__card-text'>
                        <h3>Enternet Do'kon</h3>
                        <a href='https://enternet-do-kon-2.vercel.app/'><button>&gt;&gt;&gt;</button></a>
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
            </div>
            <div className='portfolio__more'>
                {/* <Link to="/"><button className='portfolio__btn'>View Project</button></Link> */}
                <button className="portfolio__btn" onClick={() => navigate("/partfolio")}>
                    View Project
                </button>
            </div>
        </section>
    )
}

export default portfolio