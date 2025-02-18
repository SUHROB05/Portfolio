import React from 'react'
import myRasmim from '../../assets/imgs/myRasim.png'
import './home.scss';
import 'tailwindcss';
import { GrInstagram } from "react-icons/gr";
import { RiTelegram2Fill } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";



function homeSectin() {
    return (
        <section className='section1' id='home'>
            <div className='s-text'>
                <div className='text'>
                    <p className='p1'>Hi I am</p>
                    <p className='p2'>Suhrob Amirov</p>
                    <h1 className='bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-transparen'>FRONT-END DEVOLOPER</h1>
                    <ul className='icons-link'>
                        <li className='link-icon'><a target='_blank' href="https://www.instagram.com/suxrobamirov00"><GrInstagram className='item-icon' /></a></li>
                        <li className='link-icon'><a target='_blank' href="https://t.me/ALFAYEGR"><RiTelegram2Fill className='item-icon' /></a></li>
                        <li className='link-icon'><a target='_blank' href="https://www.linkedin.com/in/suxrob-amirov-301807343/"><AiOutlineLinkedin className='item-icon' /></a></li>
                        <li className='link-icon'><a target='_blank' href="suxrobamirov00@gmail.com"><SiGmail className='item-icon' /></a></li>
                    </ul>
                    <div className='btns'>
                        <button className='btn1'>Hire Me</button>
                        <button className='btn2'>Downlead CV </button>
                    </div>
                    <div className='s-card'>
                        <div className='preykt-item'>
                            <h2>40+</h2>
                            <p>Project done</p>
                        </div>
                        <span></span>
                        <div className='klent-item preykt-item'>
                            <h2>10+</h2>
                            <p>Happy Clients</p>
                        </div>
                        <span></span>
                        <div className='daraja'>
                            <h2>JUNYOR</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='s-img'>
                <img src={myRasmim} alt="o'z rasmim" />
            </div>
        </section>
    )
}

export default homeSectin