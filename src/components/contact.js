import React from 'react'
import { useRef} from 'react' 
import './contact.css'
import LinkedIn from '../assests/linkedin.svg'
import Github from '../assests/github.svg'
import Instagram from '../assests/instagram.svg'
import Facebook from '../assests/facebook.svg'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_teqqewd', 'template_6j67sw4', form.current, {
          publicKey: 'H4h-7feAjPh5G1Wqi',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
   <section id='contact'>
    <div id='social'>
        <h1 className='socialTitle'>Socials</h1>
        <p className='scocialDesc'>Here you connect with me on my social media</p>
        <div className='socialImgs'>
           <a href='https://www.linkedin.com/in/nikhilpoddarnp'> <img src= {LinkedIn} alt='LinkedIn' className='socialImg' /> </a>
           <a href='https://github.com/nikhilpoddarnp'>  <img src= {Github} alt='Github' className='socialImg' /> </a>
           <a href='#' onClick={(e) => e.preventDefault()}>  <img src= {Instagram} alt='Instagram' className='socialImg' /> </a>
           <a href='#' onClick={(e) => e.preventDefault()}>  <img src= {Facebook} alt='Facebook' className='socialImg' /> </a>
           
        </div>
    </div>

    <div id='contactPage'>
        <h1 className='contactTitle'>Contact</h1>
        <span className='contactDesc'>Feel free to contact me</span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name="from_name"  required />
            <input type='email' className='email' placeholder='Your Email'  name="your_email" required />
            <textarea className='msg' rows="5" placeholder='Your Message' name="message" required></textarea>
            <button type='submit' value='Send' className='submitBtn' onClick={ () => {alert("Your form is submited")}} >Submit</button>

        </form>
    </div>
   </section>
  )
}
