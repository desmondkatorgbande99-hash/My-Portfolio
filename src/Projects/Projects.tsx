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
    ...Array.from(
      new Set(
        projects.map(
          (project) => project.category
        )
      )
    ),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  const handleCategoryChange = (
    category: string
  ) => {
    setActiveCategory(category);

    /*
     * Close the lightbox when changing categories
     * so a project from the previous filter cannot
     * remain open.
     */
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-title"
    >
      <div className="container">

        {/* =================================
            PROJECT HEADER
        ================================= */}

        <div className={styles.header}>
          <p className={styles.eyebrow}>
            PROJECTS
          </p>

          <h2 id="projects-title">
            Selected work and things I've built.
          </h2>

          <p className={styles.intro}>
            A selection of projects demonstrating my
            approach to frontend development, backend
            development, problem solving, and
            product-focused thinking.
          </p>
        </div>


        {/* =================================
            PROJECT FILTERS
        ================================= */}

        <div
          className={styles.filters}
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                className={`${styles.filterButton} ${
                  isActive
                    ? styles.active
                    : ""
                }`}
                onClick={() =>
                  handleCategoryChange(category)
                }
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>


        {/* =================================
            PROJECT GRID
        ================================= */}

        <div
          className={styles.grid}
          aria-live="polite"
          aria-label={`${filteredProjects.length} ${
            filteredProjects.length === 1
              ? "project"
              : "projects"
          } displayed`}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={setSelectedProject}
            />
          ))}
        </div>


        {/* =================================
            EMPTY STATE
        ================================= */}

        {filteredProjects.length === 0 && (
          <p
            className={styles.emptyState}
            role="status"
          >
            No projects found in this category.
          </p>
        )}
      </div>


      {/* =================================
          LIGHTBOX
      ================================= */}

      {selectedProject && (
        <Lightbox
          image={selectedProject.image}
          title={selectedProject.title}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}
    </section>
  );
}

export default Projects;