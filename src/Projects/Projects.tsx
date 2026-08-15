import { projects } from "../data/projectData";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>PROJECTS</p>

          <h2 id="projects-title">
            Selected work and things I've built.
          </h2>

          <p className={styles.intro}>
            A selection of projects demonstrating my approach
            to frontend development, backend development,
            problem solving, and product-focused thinking.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;