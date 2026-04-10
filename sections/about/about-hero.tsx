import styles from "./about-hero.module.css";
import { Container } from "@/components/shared/container/Container";
import Link from "next/link";

const directions = [
  { title: "Инженерные изыскания", href: "/engineering-surveys" },
  { title: "Землеустройство", href: "/land-management" },
  { title: "Проектирование ИТСО", href: "/design" },
  { title: "Авторский надзор", href: "/supervision" },
];

export function AboutHero() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} /> {/* затемнение */}
      <Container className={styles.container}>
        <div className={styles.row}>
          {/* Текстовый блок */}
          <div className={styles.text}>
            <h1 className={styles.title}>СВЯЗЬГАЗПРОЕКТ</h1>
            <p className={styles.description}>
              Специализируемся на проектировании <br />
              комплексов инженерно-технических средств охраны <br />
              для крупных и стратегически важных объектов
            </p>
          </div>

          {/* Нижний блок */}
          <div className={styles.bottom}>
            {/* Chips */}
            <div className={styles.chips}>
              {directions.map((item) => (
                <Link key={item.href} href={item.href} className={styles.chip}>
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Кнопка */}
            <Link href="/contacts" className={styles.cta}>
              <span className={styles.dot}></span>
              <span>Бесплатная консультация</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
