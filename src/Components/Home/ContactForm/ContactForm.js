import React, { useRef } from 'react';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons';


import emailjs from '@emailjs/browser';



const ContactForm = () => {



    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log('Sending email',form);
  
      emailjs.sendForm('service_8hyjrsa', 'template_gwpf85m', form.current, 'jUVsTcFLJV7ZYwZa7')
        .then((result) => {
            console.log(result.text);
            alert('your message has been submitted')
        }, (error) => {
            console.log(error.text);
        });

    }

    

    return (

        <div className="container ">
            <div className="row pt-5">
                <div className="col-md-6">
                    <h1 className="text-white text-uppercase">Send Message Us</h1>

                    <form ref={form} className="contact-form pb-5 mt-3" onSubmit={sendEmail}>
                        <input className="form-control" placeholder="Your Name" type="text" name="user_name" />
                        <input className="form-control my-3" placeholder="Your Email" type="email" name="user_email" />
                        <textarea rows='6' col='12' className="form-control" placeholder="Your Massage" name="message" />
                        <br />
                        <input className="form-control btn btn-primary" type="submit" value="Send" />
                    </form>
                    

                </div>
                <div className="col-md-6 text-white">
                    <h1 className="text-white pt-5 mt-4 text-uppercase">Get in Touch</h1>
                    <h4 className="mt-4" style={{ textAlign: 'justify', lineHeight: '35px' }}>Please feel free to contact me if you need any further information. Please let me know if you have any questions. I hope the above is useful to you.</h4>

                    <div className="text-white d-flex justify-content-center mt-5 icons">
                        <a href="https://www.facebook.com/profile.php?id=100066632149032"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.linkedin.com/in/jesminara/"><FontAwesomeIcon className="mx-3" icon={faLinkedinIn} /></a>
                        <a href="https://github.com/0178811jes"><FontAwesomeIcon icon={faGithub} /></a>


                    </div>
                </div>
                <h6 className="mx-auto mb-3 text-white">Copyright &copy; All rights reserved.</h6>
            </div>
        </div>
    );
};

export default ContactForm;