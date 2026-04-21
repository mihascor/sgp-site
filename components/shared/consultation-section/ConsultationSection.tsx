import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container/Container";
import styles from "./ConsultationSection.module.css";

type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
};
// Консультация
export function ConsultationSection({ title, description }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <Container>
          <div className={styles.content}>
            <div className={styles.textBlock}>
              <h2 className={styles.title}>{title}</h2>

              <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.actions}>
              <Link href="/contacts" className={styles.button}>
                Контакты
                <Image
                  src="/element/consultation/arrow.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
