import styles from "./projects-2.module.css";
import { Container } from "@/components/shared/container/Container";
import Image from "next/image";

// Проекты 2 секция - примеры реализованных проектов

// Секция проектов
export function ProjectsDown() {
  return (
    <section className={styles.section}>
      <Container>
        {/* Заголовок */}
        <h2 className={styles.title}>
          ПРИМЕРЫ РЕАЛИЗОВАННЫХ
          <br />
          НАМИ ПРОЕКТОВ
        </h2>

        {/* Сетка карточек */}
        <div className={styles.grid}>
          {[
            {
              title: (
                <>
                  Газопровод
                  <br />
                  «Сила Сибири»
                </>
              ),
              img: "/element/projects/projects-down-1.png",
            },
            {
              title: (
                <>
                  Ковыктинское
                  <br />
                  газоконденсатное месторождение
                </>
              ),
              img: "/element/projects/projects-down-1.png",
            },
            {
              title: (
                <>
                  Амурский
                  <br />
                  газоперерабатывающий завод
                </>
              ),
              img: "/element/projects/projects-down-1.png",
            },
            {
              title: (
                <>
                  Московский
                  <br />
                  нефтеперерабатывающий завод
                </>
              ),
              img: "/element/projects/projects-down-1.png",
            },
            {
              title: (
                <>
                  Омский
                  <br />
                  нефтеперерабатывающий завод
                </>
              ),
              img: "/element/projects/projects-down-1.png",
            },
            {
              title: (
                <>
                  Система магистральных <br />
                  газопроводов «Восточная система <br />
                  газоснабжения»
                </>
              ),
              img: "/element/projects/projects-down-1.png",
            },
          ].map((item, index) => (
            <div key={index} className={styles.card}>
              {/* Картинка */}
              <div className={styles.imageWrapper}>
                <Image src={item.img} alt="" fill className={styles.image} />
              </div>

              {/* Контент */}
              <div className={styles.cardContent}>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
