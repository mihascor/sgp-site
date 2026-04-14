"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // плавный скролл
    });
  };

  if (!isVisible) return null;

  return (
    <button className={styles.button} onClick={scrollToTop}>
      <svg width="20" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 19V5M12 5L6 11M12 5L18 11"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
