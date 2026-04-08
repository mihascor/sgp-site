import Image from "next/image";
import Link from "next/link";
import styles from "./about-krp.module.css";
import { Container } from "@/components/shared/container/Container";

// Данные карточек
const items = [
  {
    title: "Инженерные изыскания",
    description:
      "Выполняем полный комплекс исследований для подготовки точной базы проектирования",
    icon: "/element/about/about-engineering-surveys.svg",
    href: "/engineering-surveys",
  },
  {
    title: "Землеустройство",
    description:
      "Профессиональное выполнение землеустроительных работ для легализации и размещения объектов.",
    icon: "/element/about/about-land-management.svg",
    href: "/land-management",
  },
  {
    title: "Проектирование ИТСО",
    description:
      "Разработка систем инженерно-технических средств охраны любой сложности.",
    icon: "/element/about/about-design.svg",
    href: "/design",
  },
  {
    title: "Авторский надзор",
    description:
      "Гарантируем точное соответствие реализации проектным решениям до этапа сдачи.",
    icon: "/element/about/about-supervision.svg",
    href: "/supervision",
    accent: true,
  },
];

// Комплексная реализация проекта
export const AboutKrp = () => {
  return (
    <section className={styles.section}>
      {/* Белый фон секции вынесен на всю ширину браузера */}
      <div className={styles.background}>
        <Container>
          <div className={styles.content}>
            {/* Верхняя часть секции */}
            <div className={styles.head}>
              <div className={styles.headLeft}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} />
                  <span className={styles.eyebrowText}>Виды деятельности</span>
                </div>

                <h2 className={styles.title}>Комплексная реализация проекта</h2>
              </div>

              <p className={styles.lead}>
                Берём на себя ответственность за каждый этап:
              </p>
            </div>

            {/* Сетка карточек */}
            <div className={styles.grid}>
              {items.map((item) => (
                <article
                  key={item.title}
                  className={`${styles.card} ${item.accent ? styles.cardAccent : ""}`}
                >
                  <div className={styles.cardTop}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>

                    <div className={styles.iconCircle}>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={30}
                        height={30}
                        className={styles.icon}
                      />
                    </div>
                  </div>

                  <div className={styles.divider} />

                  <p className={styles.cardText}>{item.description}</p>

                  <Link href={item.href} className={styles.link}>
                    Подробнее
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};