export const siteConfig = {
  name: 'Rahul Yadav',
  title: 'Rahul Yadav - Senior Frontend Developer',
  description:
    'Senior Frontend Developer with 7+ years of experience building high-performance web applications using React.js, Next.js, TypeScript, and AngularJS. Proven track record in performance optimization, SEO improvements, and scalable frontend architecture.',
  url: 'https://yourdomain.com',
  location: 'Bangalore, India',

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Education', href: '/education' },
  ],

  social: {
    github: 'https://github.com/rhlyadav',
    linkedin: 'https://www.linkedin.com/in/rahul-y1894/',
    email: 'yadavrahul1894@gmail.com',
    phone: '+91 7406838601',
  },

  skills: {
    languages: ['JavaScript (ES6+)', 'TypeScript'],
    frameworks: ['React.js', 'Next.js (SSR/ISR)', 'AngularJS'],
    stateManagement: ['Redux', 'Redux-Saga', 'React Query', 'Context API'],
    styling: ['Tailwind CSS', 'Material UI', 'CSS', 'SCSS', 'Styled Components'],
    testing: ['Jest', 'React Testing Library'],
    analytics: ['Datadog', 'Amplitude'],
    authCloud: ['Azure AD (MSAL)', 'AWS Amplify'],
    tools: ['Git', 'GitHub Copilot', 'Jira', 'Jenkins', 'npm/yarn', 'Webpack', 'Storybook', 'Figma', 'Zeplin'],
  },

  projects: [
    {
      id: 'neighborly',
      title: 'Neighborly Customer Portal',
      description:
        'Developed and enhanced a customer portal using React, TypeScript, Redux, and Redux-Saga. Implemented Azure AD authentication with MSAL, secure bearer-token API handling, payment iframe flows, and Datadog monitoring.',
      tech: ['React', 'TypeScript', 'Redux-Saga', 'Tailwind CSS', 'Azure AD', 'Datadog'],
      company: 'Infogain',
      year: '2025 - Present',
    },
    {
      id: 'hopscotch-pdp-migration',
      title: 'PDP Migration and E-commerce Revamp',
      description:
        'Migrated the Product Detail Page from AngularJS to Next.js with TypeScript, improving page load speed by 50%. Built reusable components, improved test coverage, and integrated GoKwik, Shopflo, Juspay, and Amplitude.',
      tech: ['Next.js', 'React', 'TypeScript', 'Jest', 'React Testing Library', 'Storybook'],
      company: 'Hopscotch',
      year: '2023 - 2025',
    },
    {
      id: 'site-merch',
      title: 'Site Merchandising Platform',
      description:
        'Built Collection Doorways, Hero Carousel, and PLP Grid experiences for merchandising teams. Led custom tile migration from JSP to React with Redux and delivered pagination, filtering, and search enhancements.',
      tech: ['React', 'Redux', 'JavaScript', 'AngularJS'],
      company: 'Hopscotch',
      year: '2019 - 2023',
    },
    {
      id: 'real-estate-crm',
      title: 'Real Estate CRM and Lead Management',
      description:
        'Built lead tracking, ticket management, and check-in/check-out dashboards with role-based access control. Improved SEO and UX, and supported migration of legacy platform modules to AngularJS.',
      tech: ['AngularJS', 'JavaScript (ES6+)', 'RBAC', 'SEO'],
      company: 'Bright Path Technology',
      year: '2018 - 2019',
    },
  ],

  education: [
    {
      id: 'psit',
      institution: 'PSIT, Bangalore',
      degree: 'B.Tech in Computer Science and Engineering',
      year: '2012 - 2016',
    },
  ],
};

export type Project = (typeof siteConfig)['projects'][number];
export type Education = (typeof siteConfig)['education'][number];

export default siteConfig;
