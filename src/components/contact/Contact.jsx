import React from "react";
import "./contact.scss";
import { AiOutlineMail } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h6>warrendubery@gmail.com</h6>
            <a
              href='mailto:warrendubery@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Enquiries
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
