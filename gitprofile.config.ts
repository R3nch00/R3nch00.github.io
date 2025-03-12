// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'r3nch00', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      display : false,
    },
  },
  seo: {
    title: 'Portfolio of MD. Omar Faruk Faisal',
    description: '',
    imageURL: '',
  },
social: {
    linkedin: 'o-f-faisal',
    x: '@OmarFaysal10',
    udemy: 'omar-faysal-2',
    LeetCode: 'R3nch00',
    HackerRank: 'omarfaysal458',
    Codeforcces: '',
    //website: 'https://www.arifszn.com',
    phone: '+880 1846379259',
    email: 'omarfaysal458@gmail.com',
  },

  resume: {
    fileUrl:
      'https://drive.google.com/file/d/11jxDLbQgiqUgZzOwpqTCU4P1uR-AQyoq/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'MySQL',
    'Git',
    'CSS',
    'C',
    'C++',
    'Python',
    'HTML',
    'R',
    'Java',
    'MS Office Suite',
    'G Suite',
  ],
  experiences: [
    {
      company: 'ZXY International',
      position: 'ERP Intern',
      from: 'December 2024',
      to: 'Present',
      companyLink: 'https://www.zxyinternational.com/',
    },
    {
      company: 'GAOTek Inc.',
      position: 'Virtual Technical Support',
      from: 'January 2024',
      to: 'April 2024',
      companyLink: 'https://gaotek.com/',
    },
  ],
  certifications: [
    {
      name: 'Data Analysis with Python – IBM',
      year: 'Januray 2024',
      link: 'https://www.coursera.org/account/accomplishments/certificate/MX8ZX936L7G4',
    },
    {
      name: 'Databases and SQL for Data Science with Python - IBM',
      year: 'December 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/E5WQB2JXF2LB',
    },
    {
      name: 'Introduction to Structured Query Language (SQL) - University of Michigan',
      year: 'December 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/JW8U8AJHKX5F',
    },
    {
      name: 'Software Development Processes andMethodologies - University of Minnesota',
      year: 'December 2023',
      link: 'https://www.coursera.org/account/accomplishments/certificate/MH6Q2HMMVG3T',
    },
    {
      name: 'Google Cybersecurity - Google',
      year: 'December 2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/6KMU4N9AUJ5R',
    },
  ],
  educations: [
    {
      institution: 'American International University-Bangladesh',
      degree: 'BSc IN COMPUTER SCIENCE AND ENGINEERING',
      from: '2020',
      to: '2024',
      CGPA: '3.48/4.00',
    },
    {
      institution: 'Adamjee Cantonment College',
      degree: 'HIGHER SECONDARY SCHOOL CERTIFICATE (HSC)',
      from: '2017',
      to: '2019',
      GPA: '5.00/5.00',
    },
    {
      institution: 'Adamjee Cantonment Public School',
      degree: 'SECONDARY SCHOOL CERTIFICATE (SSC)',
      from: '2015',
      to: '2017',
      GPA: '5.00/5.00',
    },
    
  ],
  
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
