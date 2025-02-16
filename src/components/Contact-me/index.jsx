import { useState } from "react";
import './contact-me.scss';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        timeline: "",
        soha: "",
        details: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.message);
    };

    return (
        <section className='contact__me' id='contact-me'>
            <div className='contact__me-text'>
                <h2>Contact me</h2>
                <p>Men bilan bog‘lanmoqchi bo‘lsangiz, o‘z ma‘lumotlaringizni qoldiring</p>
            </div>

            <form className="form__contact" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input type="text" placeholder="Name..." id="name" name="name" onChange={handleChange} required />
                </label>

                <label htmlFor="phone">
                    <input type="tel" placeholder="Phone Number..." id="phone" name="phone" onChange={handleChange} required />
                </label>

                <label htmlFor="timeline">
                    <input type="date" id="timeline" name="timeline" onChange={handleChange} required />
                </label>

                <label htmlFor="email">
                    <input type="email" placeholder="Email..." id="email" name="email" onChange={handleChange} required />
                </label>

                <label htmlFor="soha">
                    <select name="soha" id="soha" onChange={handleChange} required>
                        <option value="">Select an option</option>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                    </select>
                </label>

                <label htmlFor="details">
                    <textarea id="details" name="details" placeholder="Project Details...." onChange={handleChange}></textarea>
                </label>

                <div className='form-btn1'>
                    <button className='form__contact-btn' type="submit">Yuborish</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
