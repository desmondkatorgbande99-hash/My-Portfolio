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
    image: "/projects/binary-color-generator.webp",
    githubUrl: "",
    liveUrl: "",
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
    image: "/projects/job-board.webp",
    githubUrl: "",
    liveUrl: "",
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
    image: "/projects/portfolio.webp",
    githubUrl: "",
    liveUrl: "",
  },
];