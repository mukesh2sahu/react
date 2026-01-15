import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content glass-card">
                <div className="footer-top">
                    <div className="footer-logo">Mukesh<span>Sahu</span></div>
                    <div className="social-links">
                        <a href="#" className="social-link" aria-label="GitHub">
                            <span>GitHub</span>
                        </a>
                        <a href="#" className="social-link" aria-label="LinkedIn">
                            <span>LinkedIn</span>
                        </a>
                        <a href="#" className="social-link" aria-label="Twitter">
                            <span>Twitter</span>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">© 2026 Mukesh Sahu. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
