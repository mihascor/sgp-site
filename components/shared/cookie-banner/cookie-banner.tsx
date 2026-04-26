"use client";

import { useState } from "react";
import styles from "./cookie-banner.module.css";

export function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;

    return localStorage.getItem("cookieAccepted") !== "true";
  });

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Этот сайт использует только технические cookie, необходимые для его
        функционирования. Эти cookie не требуют вашего согласия и используются
        для таких целей, как, например, запоминание ваших настроек, управление
        сессией и отображение контента.
      </p>

      <button className={styles.button} onClick={handleAccept}>
        Понимаю
      </button>
    </div>
  );
}
