import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container/Container";
import styles from "./ConsultationSection.module.css";

type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
};

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
              <Link href="tel:+78172239695" className={styles.button}>
                <Image
                  src="/element/consultation/telephone.svg"
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden="true"
                />
                <span>Позвонить сейчас</span>
              </Link>

              <Link href="mailto:info@sgp.ru" className={styles.button}>
                <Image
                  src="/element/consultation/mail.svg"
                  alt=""
                  width={17}
                  height={14}
                  aria-hidden="true"
                />
                <span>Написать письмо</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
