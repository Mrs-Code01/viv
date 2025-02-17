import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/vivotipovlogo.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import twitter from '../assets/images/twitter.png'
import youtube from '../assets/images/youtube.png'
import '../css/footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-container'>
          <div className='footer-top'>
            <img src={logo} alt="NGO logo" />
            <div className='socials'>
              <Link to='https://www.facebook.com/share/18Lbrgmhsf/?mibextid=wwXIfr'><img src={facebook} alt="facebook icon" /></Link>
              <Link to='https://www.instagram.com/oti.2025/'><img src={instagram} alt="instagram icon" /></Link>
              <Link to='https://www.linkedin.com/in/vivien-oti-poverty-relief-initiative-62609a34a/'><img src={linkedin} alt="linkedin icon" /></Link>
              <Link to='https://x.com/OtiRelief270865'><img src={twitter} alt="twitter icon" /></Link>
              <Link to='https://www.youtube.com/feed/you'><img src={youtube} alt="youtube icon" /></Link>
            </div>
            <Link to='/Donate' className='donate-btn'>Donate</Link>
          </div>
          <div className='footer-bottom'>
            <ul>
              <li><Link to='/Contact'>CONTACT</Link></li>
              <li><Link to=''>COPYRIGHT</Link></li>
              <li><Link to=''>FAQ</Link></li>
              <li><Link to=''>RESOURCES</Link></li>
              <li><Link to=''>PRIVACY NOTICE</Link></li>
              <li><Link to=''>TERMS OF USE</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
