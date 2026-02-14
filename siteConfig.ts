export const siteConfig = {
  name: 'Your Name',
  title: 'Your Name — Developer',
  description: "Personal portfolio showcasing projects, education and contact.",
  url: 'https://yourdomain.com',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Schooling', href: '/schooling' }
  ],
  social: {
    github: 'https://github.com/rhlyadav',
    linkedin: 'https://www.linkedin.com/in/rahul-y1894/'
  },
  projects: [
    {
      id: 'proj-1',
      title: 'Open-source UI Kit',
      description: 'A small, accessible UI component library built with TypeScript and Tailwind.',
      tech: ['TypeScript','Tailwind','React'],
      href: 'https://github.com/yourname/uikit'
    },
    {
      id: 'proj-2',
      title: 'E-commerce Demo',
      description: 'A minimal e-commerce demo showing SSR, edge functions, and prisma usage.',
      tech: ['Next.js','Prisma','Postgres'],
      href: 'https://github.com/yourname/ecommerce'
    }
  ],
  schooling: [
    { id: 'edu-1', institution: 'Example University', degree: 'B.Sc. Computer Science', year: '2022' },
    { id: 'edu-2', institution: 'Example High School', degree: 'High School Diploma', year: '2018' }
  ]
};

export type Project = (typeof siteConfig)['projects'][number];
export type Schooling = (typeof siteConfig)['schooling'][number];
export default siteConfig;
