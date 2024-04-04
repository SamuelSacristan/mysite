import React from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_clwxdvv', 'template_f823ndb', e.target, 'Samuel')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form onSubmit={sendEmail}>
            <input type="email" name="email" placeholder="Your Email" />
            <textarea name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;
