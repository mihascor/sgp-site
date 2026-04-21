import styles from "./land-management-3.module.css";
import { Container } from "@/components/shared/container/Container";
import Image from "next/image";

// Землеустроительные работы - 3 секция

// Компонент кружков (6 точек)
function Dots({ variant }: { variant: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const dark = "/element/land-management/land-management-three-circle-dark.svg";
  const light =
    "/element/land-management/land-management-three-circle-light.svg";

  const patterns = {
    1: [light, dark, light, light, light, light],
    2: [dark, light, dark, light, light, light],
    3: [light, dark, light, dark, light, dark],
    4: [dark, dark, dark, light, dark, light],
    5: [dark, light, dark, dark, dark, dark],
    6: [dark, dark, dark, dark, dark, dark],
  };

  return (
    <div className={styles.dots} aria-hidden="true">
      {patterns[variant].map((src, index) => (
        <Image key={index} src={src} alt="" width={10} height={10} />
      ))}
    </div>
  );
}

// Секция преимуществ
export function LandManagementThree() {
  return (
    <section className={styles.section}>
      <Container>
        {/* Заголовок секции */}
        <h2 className={styles.title}>Преимущества</h2>

        {/* Карточки преимуществ */}
        <div className={styles.grid}>
          {/* Карточка 1 */}
          <div className={styles.card}>
            <Dots variant={1} />
            <h3 className={styles.cardTitle}>Опытные специалисты</h3>
            <p className={styles.cardText}>
              Штат опытных специалистов и действующих кадастровых инженеров
            </p>
          </div>

          {/* Карточка 2 */}
          <div className={styles.card}>
            <Dots variant={2} />
            <h3 className={styles.cardTitle}>Стандарты качества</h3>
            <p className={styles.cardText}>
              Применение чек-листов, актуальных шаблонов и стандартов
            </p>
          </div>

          {/* Карточка 3 */}
          <div className={styles.card}>
            <Dots variant={3} />
            <h3 className={styles.cardTitle}>Инновации</h3>
            <p className={styles.cardText}>
              Перспективное внедрение нейросетей для оптимизации процессов
            </p>
          </div>

          {/* Карточка 4 */}
          <div className={styles.card}>
            <Dots variant={4} />
            <h3 className={styles.cardTitle}>Повышение квалификации</h3>
            <p className={styles.cardText}>
              Регулярное повышение квалификации сотрудников
            </p>
          </div>

          {/* Карточка 5 */}
          <div className={styles.card}>
            <Dots variant={5} />
            <h3 className={styles.cardTitle}>Индивидуальный подход</h3>
            <p className={styles.cardText}>
              Индивидуальный подход к каждому проекту
            </p>
          </div>

          {/* Карточка 6 */}
          <div className={styles.card}>
            <Dots variant={6} />
            <h3 className={styles.cardTitle}>Методология работы</h3>
            <p className={styles.cardText}>
              Совершённая методология работы и система контроля
            </p>
          </div>
        </div>

        {/* Нижний блок */}
        <div className={styles.bottomBlock}>
          {/* Картинка */}
          <div className={styles.imageWrapper}>
            <Image
              src="/element/land-management/Rectangle 134.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>

          {/* Текст */}
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Полный цикл работ</h3>
            <p className={styles.infoText}>
              ООО «Связьгазпроект» обеспечивает полный цикл работ — <br />
              от сбора и анализа исходных данных до получения всех <br />
              необходимых согласований и утверждения документации. <br />
              Это гарантирует своевременную и успешную реализацию <br />
              инвестиционных проектов в сфере землеустройства, <br />
              градостроительства и оформления имущественных прав.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
