import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In <span>Touch</span></h2>
                <div className="contact-wrapper glass-card">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            I'm always open to discussing product design work or partnership opportunities.
                            Whether you have a question or just want to say hi, my inbox is open!
                        </p>
                        <div className="contact-details">
                            <div className="info-item">
                                <span className="label">Email</span>
                                <a href="mailto:mukeshsahurkl1@gmail.com" className="value">mukeshsahurkl1@gmail.com</a>
                            </div>
                            <div className="info-item">
                                <span className="label">Location</span>
                                <p className="value">Rourkela, Odisha</p>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
