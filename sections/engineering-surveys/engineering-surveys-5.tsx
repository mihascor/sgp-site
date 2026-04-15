import styles from "./engineering-surveys-5.module.css";
import { Container } from "@/components/shared/container/Container";
import Image from "next/image";

// ВЫПОЛНЕНИЕ КОМПЛЕКСНЫХ ИНЖЕНЕРНЫХ ИЗЫСКАНИЙ - секция 5

export function EngineeringSurveysFour() {
  return (
    <section id="ecology" className={styles.section}>
      <Container>
        {/* --- ВЕРХНИЙ БЛОК --- */}
        <div className={styles.top}>
          {/* Синяя карточка (заголовок + иконка) */}
          <div className={styles.titleCard}>
            <h2 className={styles.title}>ИНЖЕНЕРНО-ЭКОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ</h2>

            {/* Иконка справа */}
            <div className={styles.iconWrapper}>
              <div className={styles.iconCircle} />
              <Image
                src="/element/engineering-surveys/engineering-surveys-up-trees.svg"
                alt=""
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
          </div>

          {/* Описание */}
          <div className={styles.description}>
            Инженерно-экологические изыскания обеспечивают оценку <br />
            экологических условий территории и прогноз их изменений <br />
            для подготовки градостроительной и проектной <br />
            документации.
          </div>

          {/* Картинка справа */}
          <div className={styles.imageWrapper}>
            <Image
              src="/element/engineering-surveys/engineering-surveys-four-Rectangle 142.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        </div>

        {/* --- СОСТАВ РАБОТ --- */}
        <div className={styles.workBlock}>
          <h3 className={styles.subtitle}>Состав работ:</h3>

          <div className={styles.grid}>
            {/* Карточка 1 */}
            <div className={styles.card}>
              <div className={styles.cardTitle}>#1 Подготовительный этап</div>
              <ul className={styles.list}>
                <li>сбор и анализ данных прошлых изысканий;</li>
                <li>анализ фондовых и опубликованных материалов;</li>
                <li>
                  сбор информации о состоянии среды и экологических
                  ограничениях.
                </li>
              </ul>
            </div>

            {/* Карточка 2 */}
            <div className={styles.card}>
              <div className={styles.cardTitle}>#2 Полевые исследования</div>
              <ul className={styles.list}>
                <li>маршрутные наблюдения;</li>
                <li>эколого-ландшафтные исследования;</li>
                <li>изучение флоры и фауны;</li>
                <li>заложение почвенных разрезов.</li>
              </ul>
            </div>

            {/* Карточка 3 */}
            <div className={styles.card}>
              <div className={styles.cardTitle}>#3 Отбор и анализ проб</div>
              <ul className={styles.list}>
                <li>отбор проб воздуха, почв, вод и донных отложений;</li>
                <li>оценка уровня загрязнения;</li>
                <li>исследование факторов физического воздействия.</li>
              </ul>
            </div>

            {/* Карточка 4 */}
            <div className={styles.card}>
              <div className={styles.cardTitle}>
                #4 Анализ природных процессов
              </div>
              <p className={styles.text}>
                изучение влияния опасных природных и природно-антропогенных
                процессов.
              </p>
            </div>

            {/* Карточка 5 */}
            <div className={styles.card}>
              <div className={styles.cardTitle}>#5 Камеральные работы</div>
              <ul className={styles.list}>
                <li>камеральная обработка результатов;</li>
                <li>подготовка технического отчёта.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- НИЖНИЕ БЛОКИ --- */}
        <div className={styles.bottom}>
          {/* Лаборатория */}
          <div className={styles.infoBlock}>
            <h3 className={styles.subtitle}>Лабораторные исследования:</h3>

            <div className={styles.infoCard}>
              <p>
                Инженерно-экологические изыскания обеспечивают <br />
                оценку экологических условий территории и прогноз <br />
                их изменений для подготовки градостроительной <br />и проектной
                документации.
              </p>

              {/* Декоративная иконка */}
              <div className={styles.infoImage}>
                <Image
                  src="/element/engineering-surveys/engineering-surveys-flask.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>

          {/* Применение */}
          <div className={styles.infoBlock}>
            <h3 className={styles.subtitle}>Применение результатов:</h3>

            <div className={styles.infoCardSmall}>
              Результаты изысканий используются при разработке ОВОС, ПМООС,
              МООС, проектов рекультивации и консервации земель.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
