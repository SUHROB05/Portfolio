import React from 'react'
import './button.scss'
import { CgArrowTopLeftO } from "react-icons/cg";

function button() {
    return (
        <div className='button__top'>
            <a href="#header"> <button><CgArrowTopLeftO className='button-icon' /></button></a>
        </div>
    )
}

export default button