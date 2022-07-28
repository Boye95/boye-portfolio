import React from 'react'
import './Testimonials.scss'

import halimat from '../../files/testimony.jpg'
import toyin from '../../files/toyin.jpg'
import Avatar3 from '../../files/testimony.jpg'
import Avatar4 from '../../files/toyin.jpg'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'

const data = [
  {
    avatar: halimat,
    name: 'Halimatsadiat Yaya',
    title: 'User Interface and User Research Designer',
    review:
      'Samuel Folaranmi is an excellent developer who pays attention to details with good interpersonal relationship. I enjoyed working on a project with him.'
  },
  {
    avatar: toyin,
    name: 'Toyin Ajiboye',
    title: 'Software Developer',
    review:
      'Samuel is just an amazing person. His clean code and always striving to make it simple yet great speaks a lot about him.'
  },
  {
    avatar: Avatar3,
    name: 'Halimatsadiat Yaya',
    title: 'User Interface and User Research Designer',
    review:
      'Samuel Folaranmi is an excellent developer who pays attention to details with good interpersonal relationship. I enjoyed working on a project with him.'
  },
  {
    avatar: Avatar4,
    name: 'Toyin Ajiboye',
    title: 'Software Developer',
    review:
    'Samuel is just an amazing person. His clean code and always striving to make it simple yet great speaks a lot about him.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from People</h5>
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
        {data.map(({ avatar, name, title, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='Client Avatar' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <h6 className='client__title'>{title}</h6>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
