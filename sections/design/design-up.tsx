import styles from "./design-up.module.css";
import { Container } from "@/components/shared/container/Container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/Breadcrumbs";

export function DesignUp() {
  return (
    <section className={styles.section}>
      <Container>
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Деятельность" },
            { label: "Проектирование ИТСО" },
          ]}
        />
        {/* Верхний блок: заголовок + подзаголовок + текст */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            ВЫПОЛНЕНИЕ КОМПЛЕКСОВ ИНЖЕНЕРНО-ТЕХНИЧЕСКИХ СРЕДСТВ ОХРАНЫ
          </h1>

          <div className={styles.topRow}>
            <h2 className={styles.subtitle}>
              Комплексные решения <br />
              побезопасности
            </h2>

            <p className={styles.description}>
              ООО «Связьгазпроект» осуществляет проектирование <br />
              комплексов инженерно-технических средств охраны <br />
              для различных объектов. В состав работ входят <br />
              предпроектное обследование, разработка проектных <br />
              решений и сопровождение объектов в процессе <br />
              строительства в рамках авторского надзора.
            </p>
          </div>
        </div>

        {/* Заголовок перед карточками */}
        <h2 className={styles.cardsTitle}>
          ПРЕДПРОЕКТНОЕ <br />
          ОБСЛЕДОВАНИЕ ОБЪЕКТОВ
        </h2>

        {/* Карточки */}
        <div className={styles.cards}>
          {/* Карточка 1 */}
          <div className={styles.card}>
            <div className={styles.badge}>Этап 1</div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Анализ текущей оснащенности</h3>

              <p className={styles.cardText}>
                Уточнение текущей ситуации <br />
                по оснащённости объекта <br />
                системами безопасности.
              </p>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className={styles.card}>
            <div className={styles.badge}>Этап 2</div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Проверка соответствия нормам</h3>

              <p className={styles.cardText}>
                Анализ соответствия оснащённости <br />
                требованиям федерального <br />
                законодательства и отраслевых <br />
                нормативных документов.
              </p>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className={styles.card}>
            <div className={styles.badge}>Этап 3</div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Оптимальные <br />
                решения
              </h3>

              <p className={styles.cardText}>
                Определение оптимальных решений <br />
                по доведению уровня <br />
                защищённости объекта <br />
                до нормативных требований.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
