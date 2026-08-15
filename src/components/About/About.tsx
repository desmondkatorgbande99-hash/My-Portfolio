import styles from "./About.module.css";

function About() {
  return (
    <section
      id="about"
      className={styles.about}
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>ABOUT ME</p>

          <h2 id="about-title">
            Turning ideas into practical digital solutions.
          </h2>
        </div>

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

          <div className={styles.details}>
            <div className={styles.detailCard}>
              <span className={styles.detailNumber}>01</span>

              <div>
                <h3>Development</h3>

                <p>
                  Building responsive and maintainable web
                  applications with modern technologies.
                </p>
              </div>
            </div>

            <div className={styles.detailCard}>
              <span className={styles.detailNumber}>02</span>

              <div>
                <h3>Problem Solving</h3>

                <p>
                  Breaking complex problems into practical,
                  understandable, and scalable solutions.
                </p>
              </div>
            </div>

            <div className={styles.detailCard}>
              <span className={styles.detailNumber}>03</span>

              <div>
                <h3>Continuous Learning</h3>

                <p>
                  Exploring new technologies and improving my
                  skills through hands-on projects and experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;