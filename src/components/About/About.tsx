import styles from "./About.module.css";

const details = [
  {
    number: "01",
    title: "Development",
    description:
      "Building responsive and maintainable web applications with modern technologies.",
  },
  {
    number: "02",
    title: "Problem Solving",
    description:
      "Breaking complex problems into practical, understandable, and scalable solutions.",
  },
  {
    number: "03",
    title: "Continuous Learning",
    description:
      "Exploring new technologies and improving my skills through hands-on projects and experience.",
  },
];

function About() {
  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-title"
    >
      <div className="container">
        {/* =================================
            SECTION HEADER
        ================================= */}

        <div className={styles.header}>
          <p className={styles.eyebrow}>ABOUT ME</p>

          <h2 id="about-title">
            Turning ideas into practical digital solutions.
          </h2>
        </div>

        {/* =================================
            ABOUT CONTENT
        ================================= */}

        <div className={styles.content}>
          <div className={styles.introduction}>
            <p>
              I'm a software engineer focused on building modern
              web applications that are functional, responsive,
              and easy to use.
            </p>

            <p>
              I enjoy taking an idea from concept to a working
              product — from designing the interface and
              structuring the application to implementing the
              underlying functionality.
            </p>

            <p>
              My approach combines problem-solving, clean
              development practices, and continuous learning to
              create solutions that provide real value to users
              and businesses.
            </p>
          </div>

          {/* =================================
              ABOUT DETAILS
          ================================= */}

          <div className={styles.details}>
            {details.map((detail) => (
              <article
                key={detail.number}
                className={styles.detailCard}
              >
                <span
                  className={styles.detailNumber}
                  aria-hidden="true"
                >
                  {detail.number}
                </span>

                <div className={styles.detailContent}>
                  <h3>{detail.title}</h3>

                  <p>{detail.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;