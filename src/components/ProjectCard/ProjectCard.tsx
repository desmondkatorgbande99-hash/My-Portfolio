import styles from "./ProjectCard.module.css";
import type { Project } from "../../data/projectData";

interface ProjectCardProps {
  project: Project;
  onImageClick: (project: Project) => void;
}

function ProjectCard({
  project,
  onImageClick,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.imageButton}
        onClick={() => onImageClick(project)}
        aria-label={`View larger image of ${project.title}`}
      >
        <div className={styles.imageWrapper}>
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className={styles.image}
            loading="lazy"
          />
        </div>
      </button>

      <div className={styles.content}>
        <p className={styles.category}>
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p className={styles.description}>
          {project.description}
        </p>

        <ul className={styles.technologies}>
          {project.technologies.map((technology) => (
            <li key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;