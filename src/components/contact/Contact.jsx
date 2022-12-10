import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hktjp0s', 'template_kw013d9', form.current, 'sBg52z6i6RXrpvg3e')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div>
            <section>
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>

                <div className="container contact_container">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required/>
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message" rows="6" placeholder='Your Message' required></textarea>
                        <input type="submit" className='btn btn-primary' value="Send Message"/>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;