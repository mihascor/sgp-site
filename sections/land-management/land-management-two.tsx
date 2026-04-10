import Image from "next/image";
import { Container } from "@/components/shared/container/Container";
import styles from "./land-management-two.module.css";

const competencyCards = [
  {
    icon: "/element/land-management/land-management-two-people.svg",
    title: "Комплексный подход",
    text: "Профессиональное взаимодействие с органами власти",
  },
  {
    icon: "/element/land-management/land-management-two-shield.svg",
    title: "Соблюдение требований",
    text: "Строгое соблюдение нормативно-правовых требований",
  },
  {
    icon: "/element/land-management/land-management-two-jackdaws.svg",
    title: "Высокое качество",
    text: "Качественная документация и выполнение работ в срок",
  },
  {
    icon: "/element/land-management/land-management-two-arrows.svg",
    title: "Актуализация",
    text: "Актуализация документов до момента их утверждения",
  },
];

export function LandManagementTwo() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.panel}>
          {/* Декоративная рамка блока */}
          <div className={styles.outline} aria-hidden="true" />

          {/* Заголовок секции */}
          <div className={styles.header}>
            <h2 className={styles.title}>
              <span>КЛЮЧЕВЫЕ</span>
              <span>КОМПЕТЕНЦИИ ОТДЕЛА</span>
            </h2>
          </div>

          {/* Основная сетка карточек и изображений */}
          <div className={styles.grid}>
            {/* Текстовая карточка 1 */}
            <article className={styles.card}>
              <div className={styles.iconWrap}>
                <Image
                  src={competencyCards[0].icon}
                  alt=""
                  width={18}
                  height={18}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{competencyCards[0].title}</h3>
                <p className={styles.cardText}>{competencyCards[0].text}</p>
              </div>
            </article>

            {/* Фото-карточка 1 */}
            <div className={`${styles.imageCard} ${styles.imageCardTop}`}>
              <Image
                src="/element/land-management/land-management-two-Rectangle 131.png"
                alt="Промышленный объект"
                fill
                className={styles.image}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 373px"
              />
            </div>

            {/* Текстовая карточка 2 */}
            <article className={styles.card}>
              <div className={styles.iconWrap}>
                <Image
                  src={competencyCards[1].icon}
                  alt=""
                  width={18}
                  height={18}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{competencyCards[1].title}</h3>
                <p className={styles.cardText}>{competencyCards[1].text}</p>
              </div>
            </article>

            {/* Фото-карточка 2 */}
            <div className={`${styles.imageCard} ${styles.imageCardBottom}`}>
              <Image
                src="/element/land-management/land-management-two-Rectangle 131.png"
                alt="Промышленный объект"
                fill
                className={styles.image}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 373px"
              />
            </div>

            {/* Текстовая карточка 3 */}
            <article className={`${styles.card} ${styles.cardShort}`}>
              <div className={styles.iconWrap}>
                <Image
                  src={competencyCards[2].icon}
                  alt=""
                  width={18}
                  height={10}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{competencyCards[2].title}</h3>
                <p className={styles.cardText}>{competencyCards[2].text}</p>
              </div>
            </article>

            {/* Текстовая карточка 4 */}
            <article className={`${styles.card} ${styles.cardShort}`}>
              <div className={styles.iconWrap}>
                <Image
                  src={competencyCards[3].icon}
                  alt=""
                  width={17}
                  height={17}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{competencyCards[3].title}</h3>
                <p className={styles.cardText}>{competencyCards[3].text}</p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
