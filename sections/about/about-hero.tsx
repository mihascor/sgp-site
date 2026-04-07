import Link from "next/link"
import { Container } from "@/components/shared/container/Container"
import styles from "./about-hero.module.css"

// направления
const directions = [
  { title: "Инженерные изыскания", href: "/engineering-surveys" },
  { title: "Землеустройство", href: "/land-management" },
  { title: "Проектирование ИТСО", href: "/design" },
  { title: "Авторский надзор", href: "/supervision" },
]

export const AboutHero = () => {
  return (
    <section className={styles.hero}>
      {/* затемнение */}
      <div className={styles.overlay} />

      <Container>
        {/* главный вертикальный layout */}
        <div className={styles.inner}>

          {/* верх — текст */}
          <div className={styles.textBlock}>
            <h1 className={styles.title}>Связьгазпроект</h1>

            <p className={styles.description}>
              Специализируемся на проектировании комплексов
              инженерно-технических средств охраны для крупных
              и стратегически важных объектов
            </p>
          </div>

          {/* низ — теги + кнопка */}
          <div className={styles.bottom}>
            <div className={styles.tags}>
              {directions.map((item) => (
                <Link key={item.title} href={item.href} className={styles.tag}>
                  {item.title}
                </Link>
              ))}
            </div>

            <Link href="/contacts" className={styles.button}>
              <span className={styles.buttonDot} />
              <span className={styles.buttonText}>
                Бесплатная консультация
              </span>
            </Link>
          </div>

        </div>
      </Container>
    </section>
  )
}