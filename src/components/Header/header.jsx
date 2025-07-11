import React from 'react';
import asLogo from '../../assets/icons/Suhrob aka logo.svg';
import './header.scss';
import { VscListSelection } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function header() {
    const navigate = useNavigate();

    return (
        <header id='header'>
            <div className='mediya-icons'>
                <div>
                    <VscListSelection className='m-icons' />
                </div>
            </div>
            <div className='as-logo'>
                <img src={asLogo} alt="as logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#home" className='navbar-activ'>Home</a></li>
                    <li><a href="#hard__skills"> Hard skills</a></li>
                    <li><a href="#aboutme">About me</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#contact-me">Contact me</a></li>
                </ul>
            </nav>
            <div className='header-btn'>
                <button onClick={() => navigate("/partfolio")}>Portfolio</button>
            </div>
        </header>
    )
}

export default header