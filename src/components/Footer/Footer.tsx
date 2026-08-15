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
        <div className={styles.top}>
          <div className={styles.introduction}>
            <a
              href="#home"
              className={styles.logo}
              aria-label="Back to homepage"
            >
              DESMOND
            </a>

            <p>
              Software engineer focused on building modern,
              responsive, and practical digital solutions.
            </p>
          </div>

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

          <div className={styles.connect}>
            <p className={styles.navigationTitle}>
              CONNECT
            </p>

            <ul>
              <li>
                <a href="mailto:your.email@example.com">
                  Email
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} Desmond. All rights reserved.
          </p>

          <a
            href="#home"
            className={styles.backToTop}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;