import styles from "./engineering-surveys-two.module.css";
import { Container } from "@/components/shared/container/Container";
import Image from "next/image";

export function EngineeringSurveysTwo() {
  return (
    <section id="geology" className={styles.section}>
      <Container>
        {/* --- ВЕРХНИЙ БЛОК --- */}
        <div className={styles.top}>
          {/* Синяя карточка */}
          <div className={styles.titleCard}>
            <h2 className={styles.title}>ИНЖЕНЕРНО-ГЕОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ</h2>

            <div className={styles.iconWrapper}>
              <div className={styles.iconCircle} />
              <Image
                src="/element/engineering-surveys/engineering-surveys-up-stripes.svg"
                alt=""
                width={20}
                height={13}
                className={styles.icon}
              />
            </div>
          </div>

          {/* Описание */}
          <div className={styles.description}>
            Инженерно-геологические изыскания обеспечивают <br />
            исходные данные для расчёта фундаментов и безопасной <br />
            эксплуатации сооружений.
          </div>

          {/* Картинка */}
          <div className={styles.imageWrapper}>
            <Image
              src="/element/engineering-surveys/engineering-surveys-two-Rectangle 140.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        </div>

        {/* --- СПИСОК РАБОТ --- */}
        <div className={styles.workBlock}>
          <h3 className={styles.subtitle}>Состав работ:</h3>

          {/* --- ДОП БЛОКИ --- */}
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              В рамках работ выполняется комплекс полевых, <br />
              лабораторных и камеральных исследований, позволяющий <br />
              оценить ключевые характеристики площадки строительства
            </div>

            <div className={styles.infoCard}>
              По результатам изысканий даются рекомендации <br />
              по инженерной защите территории
            </div>
          </div>

          <div className={styles.workList}>
            {[
              "геологическое строение площадки",
              "гидрогеологические условия",
              "физико-механические свойства грунтов",
              "агрессивность грунтов к конструкциям",
              "наличие специфических грунтов",
              "наличие опасных процессов",
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

        {/* --- ОБОРУДОВАНИЕ --- */}
        <div className={styles.equipmentBlock}>
          <h3 className={styles.subtitle}>Оборудование и техника:</h3>

          <div className={styles.equipmentGrid}>
            {/* --- 1 (большая) --- */}
            <div className={`${styles.equipmentCard} ${styles.cardBig}`}>
              <h4 className={styles.cardTitle}>Буровая установка УБГМ-1М</h4>

              <div className={styles.tag}>
                Бурение скважин с продувкой и промывкой
              </div>

              <div>
                <p className={styles.cardTextMuted}>База:</p>
                <p className={styles.cardText}>автомобиль Садко NEXT</p>
              </div>

              <div>
                <p className={styles.cardTextMuted}>Характеристики:</p>
                <ul className={styles.cardList}>
                  <li>грунты до 10 категории буримости</li>
                  <li>глубина до 60 м</li>
                </ul>
              </div>
            </div>

            {/* --- 2 (большая) --- */}
            <div className={`${styles.equipmentCard} ${styles.cardBig}`}>
              <h4 className={styles.cardTitle}>Буровые установки УБШМ-1-13</h4>

              <div className={styles.tag}>
                Бурение в труднодоступных и стеснённых условиях
              </div>

              <div>
                <p className={styles.cardTextMuted}>База:</p>
                <p className={styles.cardText}>
                  Mitsubishi L200, Great Wall Poer King Kong
                </p>
              </div>

              <div>
                <p className={styles.cardTextMuted}>Характеристики:</p>
                <ul className={styles.cardList}>
                  <li>грунты до 8 категории буримости</li>
                  <li>глубина до 35 м</li>
                </ul>
              </div>
            </div>

            {/* --- 3 (маленькая) --- */}
            <div className={`${styles.equipmentCard} ${styles.cardSmall}`}>
              <h4 className={styles.cardTitle}>
                Электроразведочный комплекс РУТИЛ-1М
              </h4>

              <div className={styles.tag}>
                Определение удельного электрического сопротивления
              </div>
            </div>

            {/* --- 4 (маленькая) --- */}
            <div className={`${styles.equipmentCard} ${styles.cardSmall}`}>
              <h4 className={styles.cardTitle}>
                Комплект для статического зондирования «ТЕСТ»
              </h4>

              <div className={styles.tag}>
                Оценка несущей способности грунтов
              </div>

              <div>
                <ul className={styles.cardList}>
                  <li className={styles.cardText}>
                    прибор автоматической регистрации ТЕСТ-К2М
                  </li>
                  <li className={styles.cardText}>
                    тензометрические зонды (тип II) А2/350
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
