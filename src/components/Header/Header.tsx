import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
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

  const menuButtonRef =
    useRef<HTMLButtonElement>(null);

  const navigationRef =
    useRef<HTMLElement>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  /*
   * Close mobile navigation with Escape
   * and return focus to the menu button.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();

        requestAnimationFrame(() => {
          menuButtonRef.current?.focus();
        });
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
  }, [isMenuOpen]);

  /*
   * Prevent background scrolling while
   * the mobile menu is open.
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

  /*
   * Close the mobile menu when the viewport
   * becomes desktop-sized.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [isMenuOpen]);

  /*
   * Close the mobile menu when clicking
   * outside the navigation.
   */
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleClickOutside = (
      event: MouseEvent
    ) => {
      const target = event.target as Node;

      if (
        navigationRef.current &&
        !navigationRef.current.contains(target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div
        className={`container ${styles.container}`}
      >
        {/* =================================
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

        {/* =================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          ref={menuButtonRef}
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

        {/* =================================
            NAVIGATION
        ================================= */}

        <nav
          ref={navigationRef}
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

          {/* =================================
              ACTIONS
          ================================= */}

          <div className={styles.actions}>
            <ThemeToggle />

            <a
              href="/documents/Desmond-Gbande-Resume.pdf"
              download="Desmond-Gbande-Resume.pdf"
              className={styles.resumeLink}
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;