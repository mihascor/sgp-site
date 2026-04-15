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
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`${styles.card} ${i === 0 ? styles.active : ""}`}
            >
              {/* Логотип */}
              <Image
                src="/element/clients/clients-1.svg"
                alt=""
                width={150}
                height={40}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
