export const siteConfig = {
  name: 'Rahul Yadav',
  title: 'Rahul Yadav — Senior Frontend Developer',
  description:
    'Senior Frontend Developer with 8+ years of experience building high-performance, scalable web applications using React.js, Next.js, TypeScript, and Redux. Specialized in performance optimization, SEO improvements, and enterprise-grade frontend architecture.',
  url: 'https://yourdomain.com',
  location: 'Bangalore, India',

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Education', href: '/education' }
  ],

  social: {
    github: 'https://github.com/rhlyadav',
    linkedin: 'https://www.linkedin.com/in/rahul-y1894/',
    email: 'yadavrahul1894@gmail.com'
  },

  skills: {
    languages: ['JavaScript (ES6+)', 'TypeScript'],
    frameworks: ['React.js', 'Next.js (SSR/ISR)', 'AngularJS'],
    stateManagement: ['Redux', 'Redux-Saga', 'React Query', 'Context API'],
    styling: ['Tailwind CSS', 'Material UI', 'SCSS', 'Styled Components'],
    testing: ['Jest', 'React Testing Library'],
    analytics: ['Datadog', 'Amplitude'],
    authCloud: ['Azure AD (MSAL)', 'AWS Amplify'],
    tools: ['Git', 'Jenkins', 'Webpack', 'Storybook', 'Figma']
  },

  projects: [
    {
      id: 'neighborly',
      title: 'Neighborly Customer Portal',
      description:
        'Enterprise-grade customer portal built with React, TypeScript, Redux & Redux-Saga. Implemented secure Azure AD authentication, payment iframe integration, monitoring with Datadog, and scalable state management.',
      tech: ['React', 'TypeScript', 'Redux-Saga', 'Tailwind CSS', 'Azure AD'],
      company: 'Infogain',
      year: '2025 - Present'
    },
    {
      id: 'hopscotch-pdp-migration',
      title: 'PDP Migration & E-commerce Revamp',
      description:
        'Migrated Product Detail Page from AngularJS to Next.js with TypeScript. Improved performance by 50%, implemented SSR, integrated GoKwik, Shopflo & Juspay, and enhanced checkout flow.',
      tech: ['Next.js', 'React', 'TypeScript', 'Jest', 'Storybook'],
      company: 'Hopscotch',
      year: '2023 - 2025'
    },
    {
      id: 'site-merch',
      title: 'Site Merchandising Platform',
      description:
        'Built Collection Doorways, Hero Carousel, PLP Grid, filtering & search. Migrated legacy JSP stack to React with Redux, improving maintainability and performance.',
      tech: ['React', 'Redux', 'AngularJS'],
      company: 'Hopscotch',
      year: '2019 - 2023'
    },
    {
      id: 'real-estate-crm',
      title: 'Real Estate CRM & Lead Management',
      description:
        'Developed Lead Tracking Dashboard, Ticket Management System, Check-in/Check-out dashboard, and implemented RBAC for secure access control.',
      tech: ['AngularJS', 'JavaScript', 'RBAC'],
      company: 'Bright Path Technology',
      year: '2018 - 2019'
    }
  ],

  education: [
    {
      id: 'psit',
      institution: 'PSIT',
      degree: 'B.Tech in Computer Science & Engineering',
      year: '2012 - 2016'
    }
  ]
};

export type Project = (typeof siteConfig)['projects'][number];
export type Education = (typeof siteConfig)['education'][number];

export default siteConfig;
