import styles from "./clients.module.css";
import { Container } from "@/components/shared/container/Container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/Breadcrumbs";
import Image from "next/image";

// ВЕДУЩИЕ КОМПАНИИ

export function Clients() {
  return (
    <section className={styles.section}>
      <Container>
        {/* Хлебные крошки */}
        <Breadcrumbs
          items={[{ label: "Главная", href: "/" }, { label: "Заказчики" }]}
        />

        {/* Заголовок + описание */}
        <div className={styles.header}>
          <h2 className={styles.title}>ВЕДУЩИЕ КОМПАНИИ</h2>
          <p className={styles.text}>
            топливно-энергетического комплекса <br />
            России доверяют нам свои проекты
          </p>
        </div>

        {/* Сетка клиентов */}
        <div className={styles.grid}>
          {Array.from({ length: 32 }, (_, i) => {
            const index = i + 1;
            return (
              <div key={index} className={styles.card}>
                <Image
                  src={`/element/clients/clients-${index}.png`}
                  alt={`client-${index}`}
                  width={220}
                  height={100}
                  className={styles.logo}
                />
              </div>
            );
          })}
        </div>

        {/* Блок списков */}
        <div className={styles.lists}>
          <div className={styles.listColumn}>
            {[
              "ООО «ГАЗПРОМ ИНВЕСТ»",
              "ООО «ГАЗПРОМ ПРОЕКТИРОВАНИЕ»",
              "ООО «ГАЗПРОМ ПХГ»",
              "ООО «ГАЗПРОМ ГАЗИФИКАЦИЯ»",
              "ООО «ГАЗПРОМ ЭНЕРГО»",
              "ООО «ГАЗПРОМ ДОБЫЧА КРАСНОДАР»",
              "ООО «ГАЗПРОМ ДОБЫЧА НАДЫМ»",
              "ООО «ГАЗПРОМ ДОБЫЧА НОЯБРЬСК»",
              "ООО «ГАЗПРОМ ДОБЫЧА УРЕНГОЙ»",
              "ООО «ГАЗПРОМ ДОБЫЧА ЯМБУРГ»",
              "ООО «ГАЗПРОМ ДОБЫЧА АСТРАХАНЬ»",
              "ООО «ГАЗПРОМ ДОБЫЧА ИРКУТСК»",
              "ООО «ГАЗПРОМ ДОБЫЧА ОРЕНБУРГ»",
              "ПАО «ГАЗПРОМ НЕФТЬ»",
              "ООО «ГАЗПРОМНЕФТЬ-ЗАПОЛЯРЬЕ»",
              "ООО «ГАЗПРОМ ПЕРЕРАБОТКА»",
            ].map((text, i) => (
              <div key={i} className={styles.listItem}>
                <span className={styles.dot}></span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className={styles.listColumn}>
            {[
              "ООО «ГАЗПРОМ ТРАНСГАЗ ВОЛГОГРАД»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ ЕКАТЕРИНБУРГ»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ КАЗАНЬ»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ КРАСНОДАР»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ МОСКВА»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ СУРГУТ»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ ТОМСК»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ УХТА»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ ЧАЙКОВСКИЙ»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ ЮГОРСК»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ НИЖНИЙ НОВГОРОД»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ САНКТ-ПЕТЕРБУРГ»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ САМАРА»",
              "ООО «ГАЗПРОМ ТРАНСГАЗ СТАВРОПОЛЬ»",
              "ООО «АЧИМ ДЕВЕЛОПМЕНТ»",
              "ООО «ГЛ ИНЖИНИРИНГ»",
            ].map((text, i) => (
              <div key={i} className={styles.listItem}>
                <span className={styles.dot}></span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
