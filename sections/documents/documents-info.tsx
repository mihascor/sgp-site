import Image from "next/image";
import styles from "./documents-info.module.css";
import { Container } from "@/components/shared/container/Container";

export function DocumentsInfo() {
  return (
    <section className={styles.section}>
      {/* Отдельный декоративный фон секции */}
      <div className={styles.background} />

      <Container>
        <div className={styles.layout}>
          {/* Левая колонка с контентом */}
          <div className={styles.content}>
            <div className={styles.titleBlock}>
              <h2 className={styles.title}>ПРАВОВАЯ ИНФОРМАЦИЯ</h2>
              <p className={styles.subtitle}>ООО «Связьгазпроект»</p>
            </div>

            <div className={styles.infoList}>
              <p>Общество с ограниченной ответственностью</p>
              <p>Директор: Макарова Анна Николаевна</p>
              <p>ИНН: 3525341140</p>
              <p>КПП: 352501001</p>
              <p>ОГРН: 1153525002113</p>
            </div>
          </div>

          {/* Правая карточка */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <Image
                src="/element/documents/documents-info-certificate.svg"
                alt="Сертификат"
                fill
                className={styles.iconImage}
              />
            </div>

            <div className={styles.cardText}>
              <p className={styles.cardTitle}>Сертифицированная организация</p>
              <p className={styles.cardDescription}>
                Все документы актуальны
                <br />
                и соответствуют требованиям
                <br />
                законодательства РФ
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
