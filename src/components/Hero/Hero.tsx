import styles from "./Hero.module.css";

function Hero() {
  return (
    <section
      id="home"
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <div className="container">
        <div className={styles.heroContent}>

          {/* =================================
              HERO TEXT
          ================================= */}

          <div className={styles.textContent}>
            <p className={styles.eyebrow}>
              SOFTWARE ENGINEER
            </p>

            <h1 id="hero-title">
              I build digital experiences that solve real problems.
            </h1>

            <p className={styles.description}>
              I design and develop modern, responsive web
              applications with a focus on clean code,
              usability, and practical solutions.
            </p>

            {/* =================================
                HERO ACTIONS
            ================================= */}

            <div className={styles.actions}>
              <a
                href="#projects"
                className={styles.primaryButton}
              >
                View My Work
              </a>

              <a
                href="#contact"
                className={styles.secondaryButton}
              >
                Let's Talk
              </a>

              <a
                href="/documents/Desmond-Gbande-Resume.pdf"
                download="Desmond-Gbande-Resume.pdf"
                className={styles.resumeButton}
              >
                Download Resume
              </a>
            </div>
          </div>


          {/* =================================
              HERO VISUAL
          ================================= */}

          <div
            className={styles.visual}
            aria-hidden="true"
          >
            <div className={styles.visualFrame}>
              <div className={styles.visualContent}>
                <span className={styles.codeSymbol}>
                  {"</>"}
                </span>

                <span className={styles.visualText}>
                  SOFTWARE
                  <br />
                  ENGINEER
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;