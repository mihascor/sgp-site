import styles from "./engineering-surveys-2.module.css";
import { Container } from "@/components/shared/container/Container";
import Image from "next/image";

// ВЫПОЛНЕНИЕ КОМПЛЕКСНЫХ ИНЖЕНЕРНЫХ ИЗЫСКАНИЙ - секция 2

export function EngineeringSurveysOne() {
  return (
    <section id="geodesy" className={styles.section}>
      <Container>
        {/* Верхний блок: карточка + картинка */}
        <div className={styles.top}>
          <div className={styles.titleCard}>
            <h1 className={styles.title}>ИНЖЕНЕРНО-ГЕОДЕЗИЧЕСКИЕ ИЗЫСКАНИЯ</h1>

            <div className={styles.iconWrapper}>
              <div className={styles.iconCircle} />
              <Image
                src="/element/engineering-surveys/engineering-surveys-up-map.svg"
                alt=""
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
          </div>

          <div className={styles.description}>
            Инженерно-геодезические изыскания выполняются <br />
            для получения топографо-геодезических данных о рельефе, <br />
            объектах и коммуникациях в объёмах, необходимых <br />
            для подготовки проектной и рабочей документации <br />
            в соответствии с требованиями законодательства <br />и
            нормативно-технической базы.
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/element/engineering-surveys/engineering-surveys-up-Rectangle 139.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        </div>

        {/* Список работ */}
        <div className={styles.workBlock}>
          <h2 className={styles.subtitle}>Состав работ:</h2>

          <div className={styles.workList}>
            {[
              "Создание и развитие опорных планово-высотных геодезических сетей",
              "Топографическая съёмка любой сложности, включая подземные коммуникации, обновление и подготовка топопланов",
              "Согласование нанесённых коммуникаций с эксплуатирующими организациями",
              "Крупномасштабная съёмка для ландшафтных работ",
              "Вынос осей и точек проектируемых объектов и земельных участков",
              "Исполнительная съёмка",
              "Подготовка технического отчёта в соответствии с действующими нормами",
            ].map((item, index) => (
              <div key={index} className={styles.workItem}>
                <span className={styles.workIndex}>
                  {String(index + 1).padStart(2, "#")}
                </span>
                <span className={styles.workText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Оборудование */}
        <div className={styles.equipmentBlock}>
          <h2 className={styles.subtitle}>Оборудование и ПО:</h2>

          <div className={styles.equipmentGrid}>
            {[
              {
                title: "Высокоточное спутниковое оборудование",
                tag: "Trimble",
              },
              {
                title: "Обработка результатов измерений",
                tag: "Trimble Business Center",
              },
              { title: "Электронно-оптическое оборудование", tag: "Trimble" },
              { title: "Подготовка топографических планов", tag: "NanoCad" },
              { title: "Трассопоисковые приборы ", tag: "RIDGID" },
              { title: "Лазерные дальномеры", tag: "DISTO" },
            ].map((item, index) => (
              <div key={index} className={styles.equipmentItem}>
                <span>{item.title}</span>
                <div className={styles.tag}>{item.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
