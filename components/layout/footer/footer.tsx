import Link from "next/link";
import styles from "./footer.module.css";
import { Container } from "@/components/shared/container/Container";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.container}>
          <div className={styles.line} />

          <div className={styles.row}>
            <div className={styles.copy}>© 2025 ООО «Связьгазпроект»</div>

            <Link href="/privacy-policy" className={styles.link}>
              Политика обработки персональных данных
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
