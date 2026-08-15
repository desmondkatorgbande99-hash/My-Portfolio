import styles from "./Header.module.css";

const navItems = [
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

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav
          className={styles.nav}
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className={styles.logo}
            aria-label="Go to homepage"
          >
            DESMOND
          </a>

          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className={styles.cta}
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;