import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">Dev<span>Portfolio</span></div>
                <div className="social-links">
                    <a href="#" aria-label="GitHub">GH</a>
                    <a href="#" aria-label="LinkedIn">LI</a>
                    <a href="#" aria-label="Twitter">TW</a>
                </div>
                <p className="copyright">© 2024 Alex Developer. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
