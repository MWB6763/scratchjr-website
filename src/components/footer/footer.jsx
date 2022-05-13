import React from 'react';
import './footer.scss';

const Footer = () => (
    <div id="footer">
        <span id="footer-text">
            <strong>ScratchJr</strong> is a collaboration between the DevTech Research Group at
            Tufts University, and the Scratch Foundation.
        </span>
        <div id="footer-social">
            <div id="social-links">
                <a
                    className="social-link sjr-icon-twitter"
                    href="https://twitter.com/ScratchJr"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Twitter"
                >
                    <span>Twitter</span>
                </a>
                <a
                    className="social-link sjr-icon-facebook"
                    href="https://facebook.com/scratchjr"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Facebook"
                >
                    <span>Facebook</span>
                </a>
            </div>
            <div id="footer-nav">
                <a href="https://eepurl.com/3ytf5" title="Join Mailing List">
                    <div className="blue-button">Join Mailing List</div>
                </a>
                &nbsp;
                <a href="mailto:info@scratchjr.org" title="Contact Us">
                    <div className="blue-button">Contact Us</div>
                </a>
            </div>
        </div>
        <div className="footer-links" title="Privacy Policy">
            <a href="/privacy">Privacy Policy</a>
        </div>
    </div>
);
export default Footer;
