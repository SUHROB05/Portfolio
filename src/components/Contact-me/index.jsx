import React from 'react'
import './contact-me.scss'

function Contact() {
    return (
        <section className='contact__me' id='contact-me'>
            <div className='contact__me-text'>
                <h2>Contact me</h2>
                <p>Men bilan bog'lonmoqchi bo'sangiz o'z malumotlaringizni qoldiring</p>
            </div>
            <form className="form__contact">
                <label htmlFor="name">
                    <input type="text" placeholder="Name..." id="name" name="name" required />
                </label>

                <label htmlFor="phone">
                    <input type="tel" placeholder="Phone Number..." id="phone" name="phone" required />
                </label>

                <label htmlFor="timeline">
                    <input type="date" id="timeline" name="timeline" required />
                </label>

                <label htmlFor="email">
                    <input type="email" placeholder="Email..." id="email" name="email" required />
                </label>

                <label htmlFor="soha">
                    <select name="soha" id="soha" required>
                        <option value="">Select an option</option>
                        {/* Add options here */}
                    </select>
                </label>

                <label htmlFor="details">
                    <textarea id="details" name="details" placeholder="Project Details..."></textarea>
                </label>
            </form>


            <div className='form-btn1'>
                <button className='form__contact-btn' type="submit">Yuborish</button>
            </div>


        </section>
    )
}

export default Contact