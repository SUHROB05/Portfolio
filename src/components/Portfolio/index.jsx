import React from 'react'
import './portfolio.scss'
import cardPick1 from '../../assets/imgs/peakpx.jpg'
import cardPick2 from '../../assets/imgs/cardrasm1.webp'
import cardPick3 from '../../assets/imgs/cardrasm2.jpg'

function portfolio() {
    return (
        <section className='portfolio__section' id='Portfolio'>
            <div className='portfolio__text'>
                <h2>Portfolio</h2>
            </div>
            <div className='portfolio__contayner'>
                <div className='p__card'>
                    <div className='p__card-img'>
                        <img src={cardPick1} alt="" />
                    </div>
                    <div className='p__card-text'>
                        <h3>adadfvbdgfbvc </h3>
                        <div><button>&gt;&gt;&gt;</button></div>
                    </div>
                </div>
                <div className='p__card'>
                    <div className='p__card-img'>
                        <img src={cardPick2} alt="" />
                    </div>
                    <div className='p__card-text'>
                        <h3>adadfvbdgfbvc </h3>
                        <div><button>&gt;&gt;&gt;</button></div>
                    </div>
                </div>
                <div className='p__card'>
                    <div className='p__card-img'>
                        <img src={cardPick3} alt="" />
                    </div>
                    <div className='p__card-text'>
                        <h3>adadfvbdgfbvc </h3>
                        <div><button>&gt;&gt;&gt;</button></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default portfolio