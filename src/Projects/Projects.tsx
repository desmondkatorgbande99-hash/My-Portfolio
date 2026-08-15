import { useState } from "react";

import { projects } from "../data/projectData";

import ProjectCard from "../components/ProjectCard/ProjectCard";

import Lightbox from "../components/Lightbox/Lightbox";

import type { Project } from "../data/projectData";

import styles from "./Projects.module.css";

function Projects() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const categories = [
    "All",
    ...new Set(
      projects.map((project) => project.category)
    ),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

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

        <div
          className={styles.filters}
          aria-label="Project filters"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filterButton} ${
                activeCategory === category
                  ? styles.active
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
              aria-pressed={
                activeCategory === category
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={setSelectedProject}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className={styles.emptyState}>
            No projects found in this category.
          </p>
        )}
      </div>

      {selectedProject && (
        <Lightbox
          image={selectedProject.image}
          title={selectedProject.title}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;