import styles from "./supervision-1.module.css";
import { Container } from "@/components/shared/container/Container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/Breadcrumbs";
import Image from "next/image";

// Осуществление авторского надзора за строительством 1 секция

export function SupervisionUp() {
  return (
    <section className={styles.section}>
      <Container>
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Деятельность" },
            { label: "Авторский надзор" },
          ]}
        />
        {/* Заголовок секции */}
        <h1 className={styles.title}>
          Осуществление авторского <br />
          надзора за строительством
        </h1>

        {/* Блок: подзаголовок + текст */}
        <div className={styles.topRow}>
          <h2 className={styles.subtitle}>
            Профессиональный <br />
            контроль качества
          </h2>

          <p className={styles.description}>
            ООО «Связьгазпроект» осуществляет авторский <br />
            надзор за ходом строительства комплексов <br />
            инженерно-технических средств охраны в <br />
            соответствии с требованиями действующей <br />
            нормативной документации.
          </p>
        </div>

        {/* Функционал */}
        <h2 className={styles.blockTitle}>
          Функционал <br />
          авторского надзора
        </h2>
        <div className={styles.functionalWrapper}>
          <h3 className={styles.functionalTitle}>
            Организация выполнения работ:
          </h3>
          <div className={styles.functionalBlock}>
            {[
              "Оформление договоров",
              "Подготовка разрешительной документации",
              "Рассмотрение и подписание актов освидетельствования скрытых работ",
              "Акты промежуточной приёмки ответственных конструкций, участков сетей инженерно-технического обеспечения",
            ].map((text, i) => (
              <div key={i} className={styles.row}>
                <span className={styles.number}>
                  {(i + 1).toString().padStart(2, "#")}
                </span>
                <span className={styles.rowText}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Блок: текст + картинка */}
        <div className={styles.functionalWrapper}>
          <h3 className={styles.functionalTitle}>
            Контроль соответствия работ:
          </h3>
          <div className={styles.middleRow}>
            <div className={styles.infoCard}>
              <p className={styles.smallText}>
                Контроль соответствия выполняемых <br />
                строительно-монтажных работ разработанной <br />
                рабочей документации, с соблюдением <br />
                технологии производства работ.
              </p>
            </div>

            <div className={styles.imageBlock}>
              <Image
                src="/element/supervision/supervision-2-Rectangle 143.png"
                alt=""
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>

        {/* Дополнительные функции */}
        <h2 className={styles.blockTitle}>
          Дополнительные <br />
          функции авторского <br />
          надзора
        </h2>

        <div className={styles.cards}>
          {[
            {
              icon: "/element/supervision/supervision-1-1.svg",
              title: "Решение технических вопросов",
              text: "Оперативное решение технических вопросов, возникающих в процессе реализации стройки.",
            },
            {
              icon: "/element/supervision/supervision-1-2.svg",
              title: "Согласование изменений технических решений",
              text: "Согласование изменений технических решений.",
            },
            {
              icon: "/element/supervision/supervision-1-3.svg",
              title: "Информирование заказчика о нарушениях",
              text: "Информирование заказчика о некачественном выполнении работ и о срывах сроков устранения замечаний подрядчиком.",
            },
          ].map((card, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>
                <Image src={card.icon} alt="" width={24} height={24} />
              </div>

              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
