import styles from "./supervision-down.module.css";
import { Container } from "@/components/shared/container/Container";
import Image from "next/image";

export function SupervisionDown() {
  return (
    <section className={styles.section}>
      {/* Основной фон + декоративный градиент */}
      <div className={styles.panel}>
        <Container>
          {/* Верхняя часть: заголовок + описание */}
          <div className={styles.header}>
            <h2 className={styles.title}>
              ПРЕИМУЩЕСТВА <br /> АВТОРСКОГО НАДЗОРА
            </h2>

            <p className={styles.text}>
              Наш авторский надзор гарантирует соответствие <br />
              строительства проектной документации и нормативным <br />
              требованиям.
            </p>
          </div>

          {/* Карточки */}
          <div className={styles.cards}>
            {[
              {
                icon: "/element/supervision/supervision-down-1.svg",
                title: "Качество",
                text: "Контроль реализации всех тех. требований",
              },
              {
                icon: "/element/supervision/supervision-down-2.svg",
                title: "Сроки",
                text: "Реализация графика строительных работ",
              },
              {
                icon: "/element/supervision/supervision-down-3.svg",
                title: "Экономия",
                text: "Предотвращение переделок и доп. затрат",
              },
              {
                icon: "/element/supervision/supervision-down-4.svg",
                title: "Документооборот",
                text: "Полное ведение отчётной документации",
              },
            ].map((card, index) => (
              <div key={index} className={styles.card}>
                {/* Иконка в круге */}
                <div className={styles.iconWrapper}>
                  <Image src={card.icon} alt="" width={24} height={24} />
                </div>

                {/* Контент карточки */}
                <div className={styles.cardContent}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
