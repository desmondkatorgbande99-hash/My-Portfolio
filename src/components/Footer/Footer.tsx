import styles from "./Footer.module.css";

const footerLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* =================================
            FOOTER TOP
        ================================= */}

        <div className={styles.top}>
          {/* =================================
              INTRODUCTION
          ================================= */}

          <div className={styles.introduction}>
            <a
              href="#home"
              className={styles.logo}
              aria-label="Desmond - Back to homepage"
            >
              DESMOND
            </a>

            <p>
              Software engineer focused on building
              modern, responsive, and practical digital
              solutions.
            </p>
          </div>

          {/* =================================
              NAVIGATION
          ================================= */}

          <nav
            className={styles.navigation}
            aria-label="Footer navigation"
          >
            <p className={styles.navigationTitle}>
              NAVIGATION
            </p>

            <ul>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* =================================
              CONNECT
          ================================= */}

          <div className={styles.connect}>
            <p className={styles.navigationTitle}>
              CONNECT
            </p>

            <ul>
              <li>
                <a href="mailto:gbandedesmondkator@gmail.com">
                  Email
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* =================================
            FOOTER BOTTOM
        ================================= */}

        <div className={styles.bottom}>
          <p>
            © {currentYear} Desmond. All rights reserved.
          </p>

          <a
            href="#home"
            className={styles.backToTop}
            aria-label="Back to top"
          >
            Back to top
            <span aria-hidden="true"> ↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;