import styles from "./projects-up.module.css";
import { Container } from "@/components/shared/container/Container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/Breadcrumbs";
import Image from "next/image";

export function ProjectsUp() {
  return (
    <section className={styles.section}>
      <Container>
        {/* Хлебные крошки */}
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Реализованные проекты" },
          ]}
        />

        {/* Верхний блок: заголовок + текст + карточки статистики */}
        <div className={styles.top}>
          <div className={styles.left}>
            <h1 className={styles.title}>ОПЫТ РАБОТЫ</h1>

            <p className={styles.text}>
              ООО «Связьгазпроект» обладает большим опытом разработки проектов
              по оснащению объектов комплексами инженерно-технических средств
              охраны
            </p>
          </div>

          {/* Статистика */}
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statText}>лет опыта</span>
            </div>

            <div className={styles.statCard}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statText}>проектов</span>
            </div>
          </div>
        </div>

        {/* Заголовок объектов */}
        <h2 className={styles.subtitle}>ОБЪЕКТЫ</h2>

        {/* Сетка карточек */}
        <div className={styles.grid}>
          {[
            {
              title: (
                <>
                  Газоперерабатывающие <br /> заводы
                </>
              ),
              image: "/element/projects/projects-up-1.png",
            },
            {
              title: (
                <>
                  Нефтеперерабатывающие <br /> заводы
                </>
              ),
              image: "/element/projects/projects-up-2.png",
            },
            {
              title: (
                <>
                  Магистральные газо — <br /> и нефтепроводы
                </>
              ),
              image: "/element/projects/projects-up-3.png",
            },
            {
              title: (
                <>
                  Газораспределительные <br /> станции
                </>
              ),
              image: "/element/projects/projects-up-4.png",
            },
            {
              title: (
                <>
                  Компрессорные <br /> и насосные станции
                </>
              ),
              image: "/element/projects/projects-up-5.png",
            },
            {
              title: (
                <>
                  Подземные <br /> хранилища газа
                </>
              ),
              image: "/element/projects/projects-up-6.png",
            },
            {
              title: (
                <>
                  Объекты <br /> спорта
                </>
              ),
              image: "/element/projects/projects-up-7.png",
            },
            {
              title: (
                <>
                  Линейные объекты <br /> системы газоснабжения
                </>
              ),
              image: "/element/projects/projects-up-8.png",
            },
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              {/* Верх — изображение */}
              <div className={styles.cardImage}>
                <Image src={item.image} alt="" width={373} height={216} />
              </div>

              {/* Низ — текст */}
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
