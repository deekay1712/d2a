import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
export default function ContactUs() {
    const [val, setVal] = useState();
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
    setVal(() => "")
    }
  return (
    <div className="contactUsWrapper">
        <div className="contactUsBanner">
            <h1 className="contactUsBannerHeading">Contact D2A Atelier</h1>
            <p className="contactUsBannerSubHeading">Use the form to get in touch with our office. We will do our best to getback within 48 hours</p>
        </div>
        <div className="contactUsFormWrapper">
            <form className="contactUsForm" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" value={val} required/>
                <label>Contact No.</label>
                <input type="text" name="user_mobile" value={val} required/>
                <label>Email</label>
                <input type="email" value={val} name="user_email" required/>
                <label>Subject</label>
                <input type="text" value={val} name="user_subject" required/>
                <label>Message</label>
                <textarea className='contactUsFormMessage' value={val} name="message" required/>
                <input className='contactUsFormButton' type="submit" value="Send" />
            </form>
        </div>
    </div>
  )
}
