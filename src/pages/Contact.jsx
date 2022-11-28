import React from "react";
import "@styles/contact.css";

const Contact = () => {
    const form = React.useRef(null);

    const catchData = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            reason: formData.get('reason')
        }

        console.log(data);
    }
    return (
        <div className="contactContainer">
            {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900" id="categoryTitle">Contact</h2> */}

            <section className="category__item category--contact" id="contact">
                <form action="POST" className="contactForm" ref={form}>
                    <input type="text" className="contactForm__input" name="firstName" placeholder="Luis David"/>

                    <input type="text" className="contactForm__input" name="lastName" placeholder="Garcia Prank"/>

                    <input type="email" className="contactForm__input" name="email" placeholder="example@gmail.com"/>

                    <textarea className="contactForm__reason" name="reason" placeholder="I'm contacting you in order to..."/>

                    <button className="contactForm__button" onClick={catchData}>Submit</button>
                </form>
            </section>
        </div>
    )
}

export default Contact;