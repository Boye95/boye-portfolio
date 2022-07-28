import React from 'react'
import './Footer.scss'

import esin from '../../files/esin.gif'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <a href='/#' className='footer__logo'>
          Esin Dudu <img src={esin} alt='' />
        </a>  
      <ul className='permalinks'>
        <li>
          <a href='/#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experiences'>Experiences</a>
        </li>
        <li>
          <a href='#jobs'>Work History</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/samuel-folaranmi-107074214/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillLinkedin />
        </a>
        <a href='https://github.com/Boye95' target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
        <a
          href='https://twitter.com/ade_boyee'
          target='_blank'
          rel='noreferrer'
        >
          <FaTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Samuel Adeboye Folaranmi. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
