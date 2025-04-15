import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  tcs,
  mrsac,
  GBJlogo,
  python,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI & UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "System Engineer",
    company_name: "Tata Consultancy Services (TCS)",
    icon: tcs,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Providing ongoing support and maintenance for enterprise-level applications to ensure smooth and uninterrupted functionality.",
      "Collaborating with development and operations teams to identify, troubleshoot, and resolve production issues in a timely manner.",
      "Implementing minor enhancements, bug fixes, and performance optimizations based on user feedback and business requirements.",
      "Monitoring application performance and logs, and creating detailed reports for issue tracking and root cause analysis.",
    ],
  },
  {
    title: "Data Scientist Intern",
    company_name: "MRSAC (Maharashtra Remote Sensing Application Centre)",
    icon: mrsac,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - June 2024",
    points: [
      "Worked on the project 'Land Cover Through Classification' using deep convolutional neural networks (CNNs) with a ResNet-based model.",
      "Utilized aerial image datasets to train and evaluate the model for accurate land cover classification and mapping.",
      "Collaborated with a research team to preprocess satellite imagery data, apply augmentation techniques, and fine-tune model performance.",
      "Contributed to model optimization and visualization of classification results for practical use in geospatial analysis.",
    ],
  },
  {
    title: "Web Designer & Developer",
    company_name: "GBJBUZZ",
    icon: GBJlogo,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designed and developed responsive websites and web interfaces that aligned with the brand identity and user experience goals.",
      "Worked closely with the founding team to translate business ideas into functional and visually appealing digital solutions.",
      "Built and maintained front-end components using HTML, CSS, JavaScript, and modern frameworks to ensure cross-platform compatibility.",
      "Optimized website performance, improved UI/UX, and implemented interactive features to enhance user engagement.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
