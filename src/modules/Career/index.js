import React from 'react'

import PageTitle from 'components/PageTitle'
import Company from './components/Company'

import styles from './Career.scss'

const careers = [{
  company: 'SOCAR',
  position: 'Manager',
  period: {
    from: '2015-10',
    to: '2017-03',
  },
  description: 'Hired for front-end web developer position but currently working as JS full-stack DevOps. Developing and maintaining both SOCAR and ZEROCAR mobile application and back-end server. Implemented new technology such as node.js, react, react-native successfully into SOCAR © tech stacks including TDD, continuous integration and Kanban.',
  projects: [{
    name: 'ZEROCAR Web Promotion',
    link: 'https://zerocar.socar.kr',
    description: 'ZEROCAR promotion website',
    achievements: [
      'Lead development of React.js based single page application (SPA) including continuous integration and cloud based deployment process with AWS and Buddy.works',
      'Implemented tech stack includes redux, sass, SSR (Server Side Rendering), and webpack/gulp bundling.',
    ],
  }, {
    name: 'ZEROCAR',
    link: 'https://itunes.apple.com/kr/app/zerocar-셰어링하면-제로가-되는-제로카셰어링/id1128309540',
    description: 'P2P car sharing mobile application',
    achievements: [
      'Handling continuous integration and deployment process including project setups.',
      'Developing new node.js api back-end api server including continuous integration/deployment, unit test, docker virtualization in production.',
      'Developing and managing mobile application development with react-native hybrid framework.',
      'Developing back-office application both server and web front-end.',
    ],
  }, {
    name: 'SOCAR',
    link: 'https://itunes.apple.com/kr/app/socar-대한민국-1등-카셰어링-쏘카/id515173864',
    description: 'Car sharing mobile application.',
    achievements: [
      'Developed various new features to SOCAR cordova hybrid mobile application for car sharing and improved a lot of UI changes including transition animation, touch scroll.',
      'Led developemnt and adoption of React to SOCAR web application.',
      'SOCAR application\'s development speed and quality improved by implementing javascript continuous integration.',
      'Speed up the the application by reducing css selectors to one and half by adopting SASS preprocessor. Also improved visual quality',
    ],
  }],
}, {
  company: 'Lab80',
  position: 'Unicorn',
  period: {
    from: '2015-04',
    to: '2015-09',
  },
  description: 'As a full-stack front-end developer worked mostly with Meteor and Blaze. Created reddit sharing and back link feature of hellomoney.co. Bounce rate decreased by 20%, receive 10,000 traffic instantly.',
  projects: [{
    name: 'Hellomoney',
    link: 'https://hellomoney.co',
    description: 'Web application to create and share investment portfolio like Lego for US stock market.',
    achievements: [
      'Worked as full-stack front-end developer with meteor and blaze',
      'Created its sharing related functionality such as auto contents generation for reddit and back link viewer as full stack developer.',
      'Create internal package for general form in hellomoney application.',
      'Bounce rate decreased by 20%',
      'Get 10,000 more unique traffic',
    ],
  }],
}, {
  company: 'alma creative inc',
  position: 'Founder',
  period: {
    from: '2011-03',
    to: '2014-03',
  },
  description: 'Found a company to build social media',
  projects: [{
    name: 'Kartoon Cup',
    description: 'Subscription based web-toon magazine',
    achievements: [
      'Developed Web/App subscription based comics service Kartoon Kup especially cut effect editor using jQuery and HTML canvas element.',
    ],
  }, {
    name: 'hikebike',
    description: 'Social media for bike lovers to track their ride record and share experience',
    achievements: [
      'Developed hikebike API server with Node.js (Express.js) and MongoDB',
      'Handled GPS tracking data management, social activity such as news feed, follow/unfollow and facebook integration.',
    ],
  }, {
    name: 'Grouple',
    description: 'Social media to help people to find study groups',
    achievements: [
      'Designed service UI/UX.',
      'Partially involved in iOS app development such as bug fix and minor UI improvement.',
    ],
  }],
}]

const Career = () => (
  <div className={styles.container}>
    <PageTitle title="Work Experience" />

    {careers.map(career => (
      <Company key={career.company} {...career} />
    ))}
  </div>
)

export default Career
