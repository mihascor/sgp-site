import styles from "./privacy-policy.module.css";
import { Container } from "@/components/shared/container/Container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/Breadcrumbs";
import ReactMarkdown from "react-markdown";

// 👇 импорт markdown как raw текста
import fs from "fs";
import path from "path";

export function PrivacyPolicy() {
  // читаем файл
  const filePath = path.join(process.cwd(), "content/privacy-policy.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <section className={styles.section}>
      <Container>
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Политика обработки персональных данных" },
          ]}
        />

        <div className={styles.header}>
          <h1 className={styles.title}>
            ПОЛИТИКА ОБРАБОТКИ
            <br />
            ПЕРСОНАЛЬНЫХ ДАННЫХ
          </h1>
        </div>

        {/* 👇 ВСТАВКА markdown */}
        <div className={styles.content}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </Container>
    </section>
  );
}
