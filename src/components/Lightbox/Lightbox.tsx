import { useEffect } from "react";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  image: string;
  title: string;
  onClose: () => void;
}

function Lightbox({
  image,
  title,
  onClose,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} project preview`}
      onClick={handleBackdropClick}
    >
      <div className={styles.content}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close project preview"
        >
          ×
        </button>

        <img
          src={image}
          alt={`${title} project preview`}
          className={styles.image}
        />

        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}

export default Lightbox;