import Image from "next/image";
import styles from "./about-5.module.css";
import { Container } from "@/components/shared/container/Container";

// О нас - секция 5

export function AboutMembership() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {/* Верхняя часть: заголовок + описание */}
          <div className={styles.header}>
            <div className={styles.left}>
              <div className={styles.label}>
                <span className={styles.dot}></span>
                <span>ЛИЦЕНЗИИ</span>
              </div>

              <h2 className={styles.title}>
                ЧЛЕНСТВО В САМОРЕГУЛИРУЕМЫХ ОРГАНИЗАЦИЯХ
              </h2>
            </div>

            <p className={styles.description}>
              ООО «Связьгазпроект» входит в ряд <br />
              профильных СРО, подтверждающих <br />
              право на выполнение проектных <br />и изыскательских работ:
            </p>
          </div>

          {/* Карточки */}
          <div className={styles.cards}>
            {/* Карточка 1 */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image
                  src="/element/about/about-membership.svg"
                  alt=""
                  className={styles.icon}
                  width={17}
                  height={17}
                />
                <span>
                  Ассоциация «Объединение проектировщиков “УниверсалПроект”»
                </span>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardTitle}>
                  Право подготовки проектной документации
                </p>

                <div className={styles.badges}>
                  <div className={styles.badge}>СРО: СРО-П-179-12122012</div>
                  <div className={styles.badge}>
                    Регистрационный номер: П-179-003525341140-0598
                  </div>
                </div>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image
                  src="/element/about/about-membership.svg"
                  alt=""
                  className={styles.icon}
                  width={17}
                  height={17}
                />
                <span>
                  Ассоциация «Национальный Альянс изыскателей “ГеоЦентр”»
                </span>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardTitle}>
                  Право выполнения инженерных изысканий
                </p>

                <div className={styles.badges}>
                  <div className={styles.badge}>СРО: СРО-И-037-18122012</div>
                  <div className={styles.badge}>
                    Регистрационный номер: И-037-003525341140-1247
                  </div>
                </div>
              </div>
            </div>

            {/* Карточка 3 */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image
                  src="/element/about/about-membership.svg"
                  alt=""
                  className={styles.icon}
                  width={17}
                  height={17}
                />
                <span>
                  Региональное объединение работодателей строительного комплекса
                  «Союз строителей Воронежской области»
                </span>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardTitle}>
                  Членство в профессиональном объединении
                </p>

                <div className={styles.badges}>
                  <div className={styles.badge}>Регистрационный номер: 195</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
