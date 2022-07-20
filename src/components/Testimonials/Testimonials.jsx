import React from 'react'
import './Testimonials.scss'

import Avatar1 from '../../files/testimony.png'
import Avatar2 from '../../files/testimony.png'
import Avatar3 from '../../files/testimony.png'
import Avatar4 from '../../files/testimony.png'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'

const data = [
  {
    avatar: Avatar1,
    name: 'Ben Jackizz',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?'
  },
  {
    avatar: Avatar2,
    name: 'Hugh  Remi',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?'
  },
  {
    avatar: Avatar3,
    name: 'Ajayi Ogidiolu',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?'
  },
  {
    avatar: Avatar4,
    name: 'Baba Sule',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?'
  }
]

const Testimonials = () => {
  return (
    <section id={'testimonials'}>
      <h5>Review from Clients and Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='main-container testimonials__container'
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        slidesPerView={1}
        pagination={true}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='Client Avatar' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
