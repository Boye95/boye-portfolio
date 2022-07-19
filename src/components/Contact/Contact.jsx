import React from 'react'
import './Contact.scss'

import { useRef } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_f6yjnvr',
        'template_itt6yrw',
        form.current,
        'dzSRhec38CKrJeTq6'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>

      <div className='main-container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>samueladeboye1@gmail.com</h5>
            <a
              href='mailto:samueladeboye1@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <BsTwitter className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>@ade_boyee</h5>
            <a
              href='https://twitter.com/ade_boyee'
              target='_blank'
              rel='noreferrer'
            >
              Send a DM
            </a>
          </article>
          <article className='contact__option'>
            <AiFillGithub className='contact__option-icon' />
            <h4>Github</h4>
            <h5>@Boye95</h5>
            <a
              href='https://github.com/Boye95'
              target='_blank'
              rel='noreferrer'
            >
              Let's Collaborate
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            placeholder='Your Message'
            rows='7'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
