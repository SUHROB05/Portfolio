import React from 'react';
import './about.scss';
import myRasim from '../../assets/imgs/myRasim.png';
import Dowlond__CV from "..//../Dowlond__CV/dowlond__cv"


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
                        <span> Salom! Men Suhrob, frontend dasturchiman. Dasturlashga yoshligimdan qiziqaman va bu sohada haqiqiy mutaxassis bo‘lishga intilaman. Mening maqsadim — foydalanuvchilar uchun tezkor, qulay va jozibali web-yechimlar yaratish. Har bir loyiha — bu men uchun tajriba va yangi imkoniyatlar eshigi.

                            Asosiy yo‘nalishim frontend dasturlash bo‘lib, HTML, CSS, SCSS, Tailwind, JavaScript, React va Vite kabi texnologiyalar bilan ishlayman. Web-saytlar va ilovalarni zamonaviy dizayn, animatsiya va interaktiv imkoniyatlar bilan boyitishga harakat qilaman. Bundan tashqari, backend, mobil ilovalar, o‘yin yaratish, robototexnika va sun’iy intellekt (AI) sohalariga ham qiziqaman. Ushbu yo‘nalishlarda o‘zimni rivojlantirishga intilaman va yangi texnologiyalarni o‘rganishdan zavqlanaman.

                            Dasturlash men uchun shunchaki kasb emas — bu ijodiy jarayon. Har bir kod qatori orqali foydalanuvchilarga qulaylik yaratish va texnologiya yordamida muammolarni hal qilish men uchun muhim. O‘z ustimda ishlash, yangi loyihalar ustida tajriba qilish va texnologik dunyodagi o‘zgarishlarga moslashish — mening asosiy maqsadlarimdan biri. </span>
                    </p>
                    <div>
                        <div className="btn__yuklash"><Dowlond__CV /></div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default about