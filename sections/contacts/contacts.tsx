import { Container } from "@/components/shared/container/Container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/Breadcrumbs";
import styles from "./contacts.module.css";

// КОНТАКТЫ

export function ContactsOne() {
  return (
    <section className={styles.section}>
      <Container>
        {/* Хлебные крошки */}
        <Breadcrumbs
          items={[{ label: "Главная", href: "/" }, { label: "Документы" }]}
        />
      </Container>
    </section>
  );
}
