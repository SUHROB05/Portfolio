import React, { useRef, useState, useEffect } from 'react';
import './skills.scss';

import { RiNodejsLine, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { IoLogoPython } from "react-icons/io5";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3, FaSass, FaBootstrap } from "react-icons/fa6";
import { BsCCircle } from "react-icons/bs";

function Skills() {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  const totalSlides = 11;
  const cardWidth = 320;

  const showSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${-index * cardWidth}px)`;
    }
  };

  useEffect(() => {
    showSlide();
  }, [index]); // index o'zgarganda showSlide ishlaydi

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="skills" id='hard__skills'>
      <h2 className="hard-text">Hard Skills</h2>
      <div className="hard__carusel">
        {/* <button className="btn__carusel" onClick={prevSlide}>&lt;</button> */}
          <div className="carusel" ref={carouselRef}>
            <div className="card"><RiNodejsLine className="img__icon" /><h2>JavaScript</h2></div>
            <div className="card"><RiReactjsFill className="img__icon" /><h2>React JS</h2></div>
            <div className="card"><TbBrandNextjs className="img__icon" /><h2>Next JS</h2></div>
            <div className="card"><IoLogoPython className="img__icon" /><h2>Python</h2></div>
            <div className="card"><TbBrandTypescript className="img__icon" /><h2>TypeScript</h2></div>
            <div className="card"><ImHtmlFive className="img__icon" /><h2>HTML</h2></div>
            <div className="card"><FaCss3 className="img__icon" /><h2>CSS</h2></div>
            <div className="card"><FaSass className="img__icon" /><h2>SCSS</h2></div>
            <div className="card"><FaBootstrap className="img__icon" /><h2>Bootstrap</h2></div>
            <div className="card"><RiTailwindCssFill className="img__icon" /><h2>TailwindCSS</h2></div>
            {/* <div className="card"><BsCCircle className="img__icon" /><h2>C</h2></div> */}
          </div>
        {/* <button className="btn__carusel" onClick={nextSlide}>&gt;</button> */}
      </div>
    </section>
  );
}

export default Skills;


















// import React from 'react';
// import { useRef, useState } from 'react';

// import './skills.scss';

// import { RiNodejsLine } from "react-icons/ri";
// import { RiReactjsFill } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { IoLogoPython } from "react-icons/io5";
// import { ImHtmlFive } from "react-icons/im";
// import { FaCss3 } from "react-icons/fa6";
// import { TbBrandTypescript } from "react-icons/tb";
// import { FaSass } from "react-icons/fa6";
// import { FaBootstrap } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { BsCCircle } from "react-icons/bs";

// function Skills() {

//   const carouselRef = useRef(null);
//   const [index, setIndex] = useState(0);

//   const totalSlides = 11;
//   const cardWidth = 320;

//   const showSlide = () => {
//     if (carouselRef.current) {
//       carouselRef.current.style.transform = `translateX(${-index * cardWidth}px)`;
//     }
//   };

//   const nextSlide = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     showSlide();
//   };

//   const prevSlide = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//     showSlide();
//   };

//   return (
//     <section className='skills'>
//       <h2 className='hard-text'>Hard Skillis</h2>
//       <p></p>
//       <div className='hard__carusel'>
//         <button className='btn__carusel' onClick={prevSlide}>&lt;</button>
//         <div className='carusel'>
//           <div className='card'>
//             <RiNodejsLine className='img__icon' />
//             <h2>JavaScript</h2>
//             <p></p>
//           </div>
//           <div className='card'>
//             <RiReactjsFill className='img__icon' />
//             <h2>React JS</h2>
//             <p></p>
//           </div>
//           <div className='card'>
//             <TbBrandNextjs className='img__icon' />
//             <h2>Next JS</h2>
//             <p></p>
//           </div>
//           <div className='card'>
//             <IoLogoPython className='img__icon' />
//             <h2>Pythone</h2>
//             <p></p>
//           </div>
//           <div className='card'>
//             <TbBrandTypescript className='img__icon' />
//             <h2>Type Script</h2>
//             <p></p>
//           </div>
//           <div className='card'>
//             <ImHtmlFive className='img__icon' />
//             <h2>Html</h2>
//             <p></p>
//           </div>
//           <div className='card'>
//             <FaCss3 className='img__icon' />
//             <h2>CSS</h2>
//             <p></p>
//           </div>
//           <div className='card'>
//             <FaSass className='img__icon' />
//             <h2>Scss</h2>
//             <p></p>
//           </div>
//           <div className='card'>
//             <FaBootstrap className='img__icon' />
//             <h2>Bootstrap</h2>
//             <p></p>
//           </div>
//           <div className='card'>
//             <RiTailwindCssFill className='img__icon' />
//             <h2>TailwindCSS</h2>
//             <p></p>
//           </div>
//           <div className='card'>
//             <BsCCircle className='img__icon' />
//             <h2>C</h2>
//             <p></p>
//           </div>
//         </div>
//         <button className='btn__carusel' onClick={nextSlide}>&gt;</button>
//       </div>
//     </section>
//   )
// }

// export default Skills