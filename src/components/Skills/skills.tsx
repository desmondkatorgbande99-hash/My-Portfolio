import styles from "./Skills.module.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive and interactive interfaces with modern frontend technologies.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Responsive Design",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Developing server-side applications, APIs, and database-driven solutions.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "EJS",
      "MySQL",
    ],
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description:
      "Using modern development tools to build, manage, test, and maintain projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "NPM",
      "Chrome DevTools",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className={styles.skills}
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>SKILLS</p>

          <h2 id="skills-title">
            Technologies I use to build digital products.
          </h2>

          <p className={styles.intro}>
            My development workflow combines frontend development,
            backend technologies, databases, and modern development
            tools to create complete web solutions.
          </p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className={styles.card}
            >
              <span className={styles.number}>
                {group.number}
              </span>

              <h3>{group.title}</h3>

              <p className={styles.description}>
                {group.description}
              </p>

              <ul className={styles.skillList}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;