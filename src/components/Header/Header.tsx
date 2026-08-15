import { useEffect, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  /*
   * Close the mobile menu when the Escape key
   * is pressed.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /*
   * Prevent the page behind the mobile navigation
   * from scrolling while the menu is open.
   */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {/* ================================
            LOGO
        ================================= */}

        <a
          href="#home"
          className={styles.logo}
          onClick={closeMenu}
          aria-label="Desmond home"
        >
          DESMOND
        </a>

        {/* ================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
        >
          <span
            className={`${styles.menuIcon} ${
              isMenuOpen ? styles.open : ""
            }`}
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </span>
        </button>

        {/* ================================
            NAVIGATION
        ================================= */}

        <nav
          id="main-navigation"
          className={`${styles.navigation} ${
            isMenuOpen
              ? styles.navigationOpen
              : ""
          }`}
          aria-label="Main navigation"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ==============================
              RESUME
          =============================== */}

          <a
            href="/documents/Desmond-Gbande-Resume.pdf"
            download="Desmond-Gbande-Resume.pdf"
            className={styles.resumeLink}
            onClick={closeMenu}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;