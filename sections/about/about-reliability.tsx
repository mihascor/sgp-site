import Image from "next/image";
import styles from "./about-reliability.module.css";
import { Container } from "@/components/shared/container/Container";

// Неизменная надёжность
export function AboutReliability() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.stats}>
          <div className={`${styles.statCard} ${styles.statPrimary}`}>
            <div className={styles.statValue}>10+ лет</div>
            <div className={styles.statText}>
              Опыта <br /> в проектировании <br /> систем охраны
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValueDark}>400+</div>
            <div className={styles.statTextDark}>
              Квалифицированных проектировщиков и инженеров в штате
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValueDark}>7</div>
            <div className={styles.statTextDark}>
              Региональных подразделений <br /> по всей РФ
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValueDark}>100%</div>
            <div className={styles.statTextDark}>
              Выполнение <br />
              обязательств <br />в срок
            </div>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.mainCard}>
            <div className={styles.decor}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={styles.mainContent}>
              <div className={styles.subtitle}>О компании</div>
              <h2 className={styles.title}>НЕИЗМЕННАЯ НАДЁЖНОСТЬ</h2>
            </div>
          </div>

          <div className={styles.imageCard}>
            <Image
              src="/about-reliability.webp"
              alt=""
              width={800}
              height={600}
            />
          </div>

          <div className={styles.bottomLeft}>
            <div className={styles.smallCard}>
              <div className={styles.smallTitle}>С 2015 года</div>
              <div className={styles.smallText}>
                ООО «Связьгазпроект» специализируется на создании сложных
                инженерно-технических систем охраны.
              </div>
            </div>

            <div className={styles.smallCard}>
              <div className={styles.smallTitle}>Берём на себя</div>
              <div className={styles.smallText}>
                Полный цикл — <br />
                от первых инженерных изысканий на местности до авторского
                надзора за строительством.
              </div>
            </div>
          </div>

          <div className={styles.guarantee}>
            <div className={styles.guaranteeTitle}>
              Наш опыт работы с объектами повышенной сложности позволяет нам
              гарантировать:
            </div>

            <ul className={styles.list}>
              <li>
                <Image
                  src="/element/about/about-reliability.svg"
                  alt=""
                  aria-hidden="true"
                  className={styles.listIcon}
                  width={17}
                  height={17}
                />
                <span>безупречное качество документации</span>
              </li>

              <li>
                <Image
                  src="/element/about/about-reliability.svg"
                  alt=""
                  aria-hidden="true"
                  className={styles.listIcon}
                  width={17}
                  height={17}
                />
                <span>прохождение любых экспертиз</span>
              </li>

              <li>
                <Image
                  src="/element/about/about-reliability.svg"
                  alt=""
                  aria-hidden="true"
                  className={styles.listIcon}
                  width={17}
                  height={17}
                />
                <span>
                  соблюдение самых строгих гос. стандартов безопасности
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
