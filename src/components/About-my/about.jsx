import React from 'react';
import './about.scss';
import myRasim from '../../assets/imgs/myRasim.png';

function about() {
    return (
        <section className='aboutmy' id='aboutme'>
            <div className='abuot__informeshn'>
                <h2 >About me</h2>
                <p></p>
            </div>
            <div className='about__body'>
                <div className='about__img'>
                    <img src={myRasim} alt="" />
                </div>
                <div className='about__text'>
                    <p>
                        <span> A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures
                            that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier. </span>
                    </p>
                </div>
            </div>
        </section >
    )
}

export default about