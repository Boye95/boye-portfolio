import React from 'react'

import './Portfolio.scss'
import IMG1 from '../../files/finite.PNG'
import IMG2 from '../../files/hometeach.PNG'
import IMG3 from '../../files/fuelerUI.PNG'
import IMG4 from '../../files/library.PNG'
import IMG5 from '../../files/calculator.PNG'
import IMG6 from '../../files/moneybuddy.PNG'
import IMG7 from '../../files/portfolio.PNG'
import IMG8 from '../../files/theblogx.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'FiniteNFT: an NFT Marketplace with wide range of arts.',
    github: 'https://github.com/Boye95/FiniteNFT',
    demo: 'https://boyefinitenft.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title:
      'HomeTeach: a platform for experienced teachers to register and retail their services.',
    github: 'https://github.com/Boye95/home-teach-pjt-54-fe',
    demo: 'https://hometeachv1.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title:
      'FuelerUI: a platform that helps developers show their proof of work',
    github: 'https://github.com/Boye95/fuelerUI',
    demo: 'https://boye95.github.io/fuelerUI/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Express Library App: a simple library app',
    github: 'https://github.com/Boye95/express-locallibrary-tutorial',
    demo: 'https://fringuante-baguette-12236.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Calculaor: this is a simple JavaScript calculator',
    github: 'https://github.com/Boye95/JS-Calculator',
    demo: 'https://boye95.github.io/JS-Calculator/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'MoneyBuddyUI: a platform for students to earn while learning',
    github: 'https://github.com/Boye95/MoneyBuddyUI',
    demo: 'https://moneybuddy.netlify.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Boye\'s Portfolio: First version of Boye\'s portfolio website',
    github: 'https://github.com/Boye95/boye-portfolio',
    demo: 'https://adeboye.netlify.app/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'A MERN Stack Blog App with support for AI generated post',
    github: 'https://github.com/Boye95/theBlog',
    demo: 'https://theblogx.onrender.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='main-container portfolio__container'>
        {[...data].reverse().map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn github' target='_blank' rel='noreferrer'>
                  Github
                </a>
                <a href={demo} className='btn btn-primary live' target='_blank' rel='noreferrer'>
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Portfolio
