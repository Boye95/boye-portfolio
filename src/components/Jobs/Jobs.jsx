import React from 'react'

import './Jobs.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const data = [
  {
    orgLogo: Avatar1,
    role: 'Frontend Developer',
    organization: 'Zuri Team, Inc',
    duration: 'Jan 2021 - Jun 2021',
    points: [
      'Led the Front-End team to develop and host a functional website',
      'Collaborated with the Design team in delivering results',
      'Worked with the Backend Team on integration',
      'Worked with React, Tailwind CSS and HTML5'
    ]
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
const Jobs = () => (
  <section id='jobs'>
    <h5>Where I've Worked</h5>
    <h2>Work History</h2>

    <Tabs className='main-container jobs__container'>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  </section>
)

export default Jobs
