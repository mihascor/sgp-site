import { Container } from "@/components/shared/container/Container";
import styles from "./home-hero.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      {/* <div className={styles.overlay} /> */}

      <Container>
        <div className={styles.row}>
          <div className={styles.content}>
            <div className={styles.textBlock}>
              <p className={styles.caption}>ООО «Связьгазпроект»</p>

              <h1 className={styles.title}>
                Проектирование
                <br />и изыскательские работы
              </h1>
            </div>

            <p className={styles.description}>
              Специализируемся на проектировании комплексов
              инженерно-технических средств охраны для крупных и стратегически
              важных объектов
            </p>
          </div>

          <button type="button" className={styles.button}>
            <span className={styles.buttonDot} />
            <span className={styles.buttonText}>Бесплатная консультация</span>
          </button>
        </div>
      </Container>
    </section>
  );
}
