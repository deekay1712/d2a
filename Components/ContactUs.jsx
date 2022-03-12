import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function ContactUs() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);
        emailjs.sendForm('service_2ow741c', 'template_nrj63go', form.current, 'user_1sr1HGU1K9RyWQpbfXNeh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
      });
      window.location.reload();
    }
  return (
    <div className="contactUsWrapper">
        <div className="contactUsBanner">
            <h1 className="contactUsBannerHeading">Contact Dream Design Architects</h1>
            <p className="contactUsBannerSubHeading">Use the form to get in touch with our office. We will do our best to getback within 48 hours</p>
        </div>
        <div className="contactUsFormWrapper">
            <form className="contactUsForm" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required/>
                <label>Contact No.</label>
                <input type="text" name="user_mobile" required/>
                <label>Email</label>
                <input type="email" name="user_email" required/>
                <label>Subject</label>
                <input type="text" name="user_subject" required/>
                <label>Message</label>
                <textarea className='contactUsFormMessage' name="message" required/>
                <input className='contactUsFormButton' type="submit" value="Send" />
            </form>
        </div>
    </div>
  )
}
