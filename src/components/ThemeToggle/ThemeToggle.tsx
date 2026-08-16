import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      THEME_STORAGE_KEY
    );

    if (
      savedTheme === "light" ||
      savedTheme === "dark"
    ) {
      setTheme(savedTheme);

      document.documentElement.setAttribute(
        "data-theme",
        savedTheme
      );

      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const systemTheme: Theme = prefersDark
      ? "dark"
      : "light";

    setTheme(systemTheme);

    document.documentElement.setAttribute(
      "data-theme",
      systemTheme
    );
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme =
      theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

    localStorage.setItem(
      THEME_STORAGE_KEY,
      newTheme
    );
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      aria-pressed={isDark}
      title={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      <span
        className={styles.icon}
        aria-hidden="true"
      >
        {isDark ? "☀" : "☾"}
      </span>
    </button>
  );
}

export default ThemeToggle;