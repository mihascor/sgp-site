import styles from "./engineering-surveys-1.module.css";
import { Container } from "@/components/shared/container/Container";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/Breadcrumbs";
import Image from "next/image";

// ВЫПОЛНЕНИЕ КОМПЛЕКСНЫХ ИНЖЕНЕРНЫХ ИЗЫСКАНИЙ - секция 1

export function EngineeringSurveysUp() {
  return (
    <section className={styles.section}>
      <Container>
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Деятельность" },
            { label: "Комплексные инженерные изыскания" },
          ]}
        />

        <h1 className={styles.title}>
          ВЫПОЛНЕНИЕ КОМПЛЕКСНЫХ ИНЖЕНЕРНЫХ ИЗЫСКАНИЙ
        </h1>

        {/* Верх: 2 колонки */}
        <div className={styles.top}>
          <h2 className={styles.subtitle}>КОМПЛЕКСНЫЙ ПОДХОД</h2>

          <p className={styles.text}>
            ООО «Связьгазпроект» выполняет все основные виды инженерных
            изысканий, необходимых для выполнения проектных работ, в том числе:
          </p>
        </div>

        {/* НИЖЕ — ОДНА СЕТКА 2x2 */}
        <div className={styles.grid}>
          <a href="#geodesy" className={styles.button}>
            <div className={styles.left}>
              <Image
                src="/element/engineering-surveys/engineering-surveys-up-map.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>Инженерно-геодезические</span>
            </div>
            <Image
              src="/element/engineering-surveys/engineering-surveys-up-arrow.svg"
              alt=""
              width={12}
              height={12}
            />
          </a>

          <a href="#hydromet" className={styles.button}>
            <div className={styles.left}>
              <Image
                src="/element/engineering-surveys/engineering-surveys-up-rain.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>Инженерно-гидрометеорологический</span>
            </div>
            <Image
              src="/element/engineering-surveys/engineering-surveys-up-arrow.svg"
              alt=""
              width={12}
              height={12}
            />
          </a>

          <a href="#geology" className={styles.button}>
            <div className={styles.left}>
              <Image
                src="/element/engineering-surveys/engineering-surveys-up-stripes.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>Инженерно-геологические</span>
            </div>
            <Image
              src="/element/engineering-surveys/engineering-surveys-up-arrow.svg"
              alt=""
              width={12}
              height={12}
            />
          </a>

          <a href="#ecology" className={styles.button}>
            <div className={styles.left}>
              <Image
                src="/element/engineering-surveys/engineering-surveys-up-trees.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>Инженерно-экологические</span>
            </div>
            <Image
              src="/element/engineering-surveys/engineering-surveys-up-arrow.svg"
              alt=""
              width={12}
              height={12}
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
