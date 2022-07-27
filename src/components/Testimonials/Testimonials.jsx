import React from 'react'
import './Testimonials.scss'

import Avatar1 from '../../files/testimony.jpg'
import Avatar2 from '../../files/testimony.jpg'
import Avatar3 from '../../files/testimony.jpg'
import Avatar4 from '../../files/testimony.jpg'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'

const data = [
  {
    avatar: Avatar1,
    name: 'Halimatsadiat Yaya',
    review:
      'Samuel Folaranmi is an excellent developer who pays attention to details with good interpersonal relationship. I enjoyed working on a project with him.'
  },
  {
    avatar: Avatar2,
    name: 'Halimatsadiat Yaya',
    review:
      'Samuel Folaranmi is an excellent developer who pays attention to details with good interpersonal relationship. I enjoyed working on a project with him.'
  },
  {
    avatar: Avatar3,
    name: 'Halimatsadiat Yaya',
    review:
      'Samuel Folaranmi is an excellent developer who pays attention to details with good interpersonal relationship. I enjoyed working on a project with him.'
  },
  {
    avatar: Avatar4,
    name: 'Halimatsadiat Yaya',
    review:
      'Samuel Folaranmi is an excellent developer who pays attention to details with good interpersonal relationship. I enjoyed working on a project with him.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
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
