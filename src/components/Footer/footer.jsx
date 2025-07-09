import React from 'react'
import './footer.scss';
import logorasmi from '../../assets/icons/Suhrob aka logo.svg'

import { GrInstagram } from "react-icons/gr";
import { RiTelegram2Fill } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className='footer__logo'>
                <img src={logorasmi} alt="" />
            </div>
            <div className='footer__nav'>
                <ul>
                    <li><a href="#home" className='navbar-activ'>Home</a></li>
                    <li><a href="#hard__skills"> Hard skills</a></li>
                    <li><a href="#aboutme">About me</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#contact-me">Contact me</a></li>
                </ul>
            </div>
            <div className='footer__icons'>
                <ul className='footer-link'>
                    <li className='link-icon'><a target='_blank' href="https://www.instagram.com/suxrobamirov00"><GrInstagram className='item-icon' /></a></li>
                    <li className='link-icon'><a target='_blank' href="https://t.me/ALFAYEGR"><RiTelegram2Fill className='item-icon' /></a></li>
                    <li className='link-icon'><a target='_blank' href="https://www.linkedin.com/in/suxrob-amirov-301807343/"><AiOutlineLinkedin className='item-icon' /></a></li>
                    <li className='link-icon'>
                        <a
                            target='_blank'
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=suxrobamirov00@gmail.com"
                        >
                            <SiGmail className='item-icon' />
                        </a>
                    </li>
                    <li className='link-icon'><a target='_blank' href="https://github.com/SUHROB05"><FaGithub className='item-icon' /></a></li>
                </ul>
            </div>
            <div className='footer__contact'>
                <div>
                    <h2>  <CgMail className='item-icon' />
                        <a href="suxrobamirov00@gmail.com">suxrobamirov00@gmail.com</a></h2>
                </div>
                <div>
                    <h2><BsTelephone className='item-icon' />
                        <a href="tel:+998 97 933 85 79" > +998 93 833 85 79</a></h2>
                </div>
            </div>
            <div className='footer__finsh'>
                <h4>Designed by suxrobamirov00@gmail.com
                    front-end devoloper</h4>
            </div>

        </footer>
    )
}

export default Footer