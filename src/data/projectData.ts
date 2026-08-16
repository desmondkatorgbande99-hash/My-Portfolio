export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}


export const projects: Project[] = [
  {
    id: 1,

    title: "Binary Color Generator",

    description:
      "A web application that generates and visualizes colors using binary values and provides corresponding decimal, hexadecimal, and RGB representations.",

    category: "Web Application",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
    ],

    image:
      "/projects/binary-color-generator.webp",

    // Add the real repository URL when available.
    // githubUrl:
    //"https://github.com/desmondkatorgbande99-hash/Project-Binary-Color-Generator",

    // Add the deployed application URL when available.
    // liveUrl:
    //   "https://your-live-demo-url.com",
  },


  {
    id: 2,

    title: "Artisan & Graduate Job Board",

    description:
      "A platform concept designed to connect artisans and graduates with relevant job opportunities through a structured and accessible interface.",

    category: "Web Application",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],

    image:
      "/projects/job-board.webp",

    // Add the real repository URL when available.
    // githubUrl:
    //   "https://github.com/yourusername/job-board",

    // Add the deployed application URL when available.
    // liveUrl:
    //   "https://your-live-demo-url.com",
  },


  {
    id: 3,

    title: "Portfolio Website",

    description:
      "A responsive personal portfolio designed to showcase projects, technical skills, experience, and professional information.",

    category: "Portfolio",

    technologies: [
      "React",
      "TypeScript",
      "CSS",
      "Vite",
    ],

    image:
      "/projects/portfolio.webp",

    // Add the real repository URL when available.
    // githubUrl:
    //   "https://github.com/yourusername/portfolio",

    // Add the deployed portfolio URL when available.
    // liveUrl:
    //   "https://your-portfolio-url.com",
  },
];