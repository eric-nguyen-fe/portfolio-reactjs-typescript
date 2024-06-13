/* eslint-disable @typescript-eslint/no-unused-vars */
import { MenuItemType } from 'components/organisms/Menu';

/* eslint-disable import/prefer-default-export */
export const dataMenu: MenuItemType[] = [
  {
    id: '0',
    label: 'home',
    slug: '/'
  },
  {
    id: '2',
    label: 'skill',
    slug: '/skill'
  },
  {
    id: '3',
    label: 'experience',
    slug: '/experience'
  },
  {
    id: '5',
    label: 'Resume',
    slug: '/resume'
  },
];

export const experienceRender = [
  {
    id: 0,
    company: 'DoctorCheck JSC',
    date: 'February 2023 - April 2024',
    address: 'Ho Chi Minh city, Vietnam',
    position: 'Software Developer',
    projects: [
      {
        projectId: 1,
        role: 'Front-end Developer',
        projectName: 'CRM Doctor Check',
        projectDesc: 'Doctor Check CRM is a project used to manage customers, track customer health records, make calls, chat, and convert customers from platforms like Zalo, Facebook, Google.',
        technologies: ['React.js', 'redux-toolkit', 'Typescript', 'SPAs', 'Storybook', 'Axios', 'Websocket', 'SCSS'],
        teamSize: 2,
      },
      {
        projectId: 2,
        role: 'Front-end Developer',
        projectName: 'Doctor Check Zalo Mini App',
        projectDesc: 'Doctor Check Zalo Mini App is a mobile application deployed on the Zalo Super App platform to help customers track medical records, receive test results, schedule appointments, and view promotions directly on Zalo.',
        technologies: ['React.js', 'redux-toolkit', 'Typescript', 'SPAs', 'Storybook', 'Axios', 'Websocket', 'vite'],
        teamSize: 2,
      },
      {
        projectId: 3,
        role: 'Front-end Developer',
        projectName: 'Doctor Check HIS',
        projectDesc: 'This is a project providing tools to support technicians, doctors, and nurses in tracking customer appointments, health records, examination results, providing instructions, advice, and treatment guidance to customers.',
        technologies: ['React.js', 'Nextjs', 'redux-toolkit', 'Typescript', 'SPAs', 'jQuery', 'Axios', 'Websocket', 'Firebase', 'C#', 'ADO.NET'],
        teamSize: 2,
      }
    ],
  },
  {
    id: 1,
    company: 'Miniu Castis Co., Ltd',
    date: 'April 2022 - March 2023',
    address: 'Ho Chi Minh city, Vietnam',
    position: 'Software Developer',
    projects: [
      {
        projectId: 1,
        role: 'Full-stack Developer',
        projectName: 'Castis Booking Meeting',
        projectDesc: '',
        technologies: ['React.js', 'redux-toolkit', 'Typescript', 'SPAs', 'Storybook', 'Axios', 'Websocket', 'SCSS', 'ExpressJs', 'Sequelize', 'JWT'],
        teamSize: 2,
      },
    ],
  },
  {
    id: 2,
    company: 'ViHAT Technology Co., Ltd',
    date: 'January 2022 - April 2022',
    address: 'Ho Chi Minh city, Vietnam',
    position: 'Software Developer Internship',
    projects: [
      {
        projectId: 1,
        role: 'Front-end Developer',
        projectName: 'CRM OMICall',
        projectDesc: 'OMICall is a multi-channel customer interaction solution including call centers, live chat, Facebook accessible through web and mobile apps. It also features a mini-CRM system for customer management and marketing tools like SMS Marketing, Email Marketing, and Zalo ZNS.',
        technologies: ['React.js', 'Redux-saga', 'Javascript', 'Next.js', 'Firebase', 'Axios', 'Websocket', 'Css in JS'],
        teamSize: 2,
      },
    ],
  },
];
