import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import insta_icon from '../Assets/insta_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import linkedin_icon from '../Assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>TOY STORE</p>
        </div>
        <ul className="footer-links">
            <li>About</li>
            <li>Terms & Conditions</li>
            <li>Copyrights</li>
            <li>More websites</li>
            <li>Contact Us</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={insta_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2028 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer