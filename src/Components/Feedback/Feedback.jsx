// Feedback.js

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import './Feedback.css';

const Feedback = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_p9pk4qk', 'template_iobopgy', form.current, {
                publicKey: '7lg7V16bIY-KOmhML',
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
        <div className="Auth-form-container">
            <form ref={form} className="Auth-form" onSubmit={sendEmail}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Feedback</h3>
                    <div className="form-group mt-3">
                        <label>Your Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            name="user_name"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Your Email</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            name="user_email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Your Message</label>
                        <textarea
                            placeholder="Your Feedback"
                            rows={5}
                            className="form-control mt-1"
                            name="message"
                        />
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Feedback;
