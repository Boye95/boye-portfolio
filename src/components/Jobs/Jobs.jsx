import React from 'react'

import './Jobs.scss'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import zuri from '../../files/zuri.jpg'
import bet9ja from '../../files/bet9ja.jpeg'
import kkon from '../../files/kkontech.jpg'

const data = [
  {
    orgLogo: zuri,
    role: 'Frontend Developer(Intern)',
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
    orgLogo: bet9ja,
    role: 'Cahier',
    organization: 'KC Gaming Networks (BET9JA)',
    duration: 'Feb 2017 - Apr 2018',
    points: [
      'Interfaced with customers/punters',
      "Staked the customers' games on time and avoided errors",
      "Handled the customers' complaints on the spot",
      'Managed the till and kept a balanced account'
    ]
  },
  {
    orgLogo: kkon,
    role: 'Network Monitor/Customer Service Representative/Tech Support',
    organization: 'KKONTech',
    duration: 'Aug 2015 - Aug 2016',
    points: [
      'Monitored network uptime and downtime',
      'Reported to field engineers on network status and advised them to work on it if need be',
      "Made daily reports of customers' network performances",
      "Attended to customers' calls and took their complaints"
    ]
  }
]
const Jobs = () => (
  <section id='jobs'>
    <h5>Where I've Worked</h5>
    <h2>Work History</h2>

    <Tabs className='main-container jobs__container'>
      <TabList>
        {data.map(({ organization }, index) => {
          return (
            <Tab key={index}>
              <img src={organization.orgLogo} alt={organization.organization} />
            </Tab>
          )
        }
        )}
      </TabList>
    </Tabs>
  </section>
)

export default Jobs
