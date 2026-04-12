import Image from "next/image";
import styles from "./design-down.module.css";
import { Container } from "@/components/shared/container/Container";

export function DesignDown() {
  return (
    <section className={styles.section}>
      <Container>
        {/* Заголовок секции */}
        <h2 className={styles.title}>
          РАЗРАБОТКА <br />
          ПРОЕКТНЫХ РЕШЕНИЙ
        </h2>

        {/* Блок: инженерно-технические средства */}
        <div className={styles.blockTop}>
          <h3 className={styles.subtitle}>
            ИНЖЕНЕРНО-ТЕХНИЧЕСКИЕ СРЕДСТВА ЗАЩИТЫ
          </h3>

          <div className={styles.tags}>
            <div className={styles.tag}>
              <Image
                src="/element/design/design-down-1.svg"
                alt=""
                width={24}
                height={24}
                className={styles.icon}
              />
              <span>Инженерные заграждения</span>
            </div>

            <div className={styles.tag}>
              <Image
                src="/element/design/design-down-2.svg"
                alt=""
                width={24}
                height={24}
                className={styles.icon}
              />
              <span>Инженерные средства и сооружения</span>
            </div>

            <div className={styles.tag}>
              <Image
                src="/element/design/design-down-3.svg"
                alt=""
                width={24}
                height={24}
                className={styles.icon}
              />
              <span>Контрольно-пропускные пункты</span>
            </div>
          </div>
        </div>

        {/* Блок: технические средства */}
        <div className={styles.blockBottom}>
          <h3 className={styles.subtitle}>ТЕХНИЧЕСКИЕ СРЕДСТВА ОХРАНЫ</h3>

          <div className={styles.grid}>
            {/* Левая колонка */}
            <div className={styles.column}>
              <h4 className={styles.groupTitle}>Контроль:</h4>

              <div className={styles.list}>
                {[
                  {
                    text: "Система охранной сигнализации зданий",
                    icon: "/element/design/design-down-4.svg",
                  },
                  {
                    text: "Система тревожной сигнализации",
                    icon: "/element/design/design-down-5.svg",
                  },
                  {
                    text: "Система охранного телевидения",
                    icon: "/element/design/design-down-6.svg",
                  },
                  {
                    text: "Система охранной сигнализации периметра объекта",
                    icon: "/element/design/design-down-7.svg",
                  },
                  {
                    text: "Система контроля и управления доступом",
                    icon: "/element/design/design-down-8.svg",
                  },
                ].map((item, index) => (
                  <div key={index} className={styles.item}>
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className={styles.icon}
                    />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка */}
            <div className={styles.column}>
              <div className={styles.subColumn}>
                <h4 className={styles.groupTitle}>Управление:</h4>

                <div className={styles.list}>
                  {[
                    {
                      text: "Система сбора и обработки информации",
                      icon: "/element/design/design-down-9.svg",
                    },
                    {
                      text: "Технические средства осмотра",
                      icon: "/element/design/design-down-10.svg",
                    },
                  ].map((item, index) => (
                    <div key={index} className={styles.item}>
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className={styles.icon}
                      />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.subColumn}>
                <h4 className={styles.groupTitle}>Обеспечение:</h4>

                <div className={styles.list}>
                  {[
                    {
                      text: "Система электропитания",
                      icon: "/element/design/design-down-11.svg",
                    },
                    {
                      text: "Система охранного освещения",
                      icon: "/element/design/design-down-12.svg",
                    },
                  ].map((item, index) => (
                    <div key={index} className={styles.item}>
                      <Image
                        src={item.icon}
                        alt=""
                        width={24}
                        height={24}
                        className={styles.icon}
                      />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
