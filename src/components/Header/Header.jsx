import React from 'react';
import './Header.scss';
import CTA from './CTA';
import ME from '../../files/boye1.png';
import Socials from './Socials';

const Header = () => {
  return (
    <header>
      <div className='main-container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Samuel Adeboye Folaranmi</h1>
        <h5 className='text-dark'>Fullstack Developer</h5>
        <CTA />
        <Socials />
        
        <div className='me'>
          <img src={ME} alt='boye' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
