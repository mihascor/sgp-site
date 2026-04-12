import styles from "./engineering-surveys-three.module.css";
import { Container } from "@/components/shared/container/Container";
import Image from "next/image";

export function EngineeringSurveysThree() {
  return (
    <section id="hydromet" className={styles.section}>
      <Container>
        {/* --- ВЕРХНИЙ БЛОК --- */}
        <div className={styles.top}>
          {/* Синяя карточка */}
          <div className={styles.titleCard}>
            <h2 className={styles.title}>
              ИНЖЕНЕРНО-ГИДРОМЕТЕОРОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ
            </h2>

            {/* Иконка */}
            <div className={styles.iconWrapper}>
              <div className={styles.iconCircle} />
              <Image
                src="/element/engineering-surveys/engineering-surveys-up-rain.svg"
                alt=""
                width={20}
                height={20}
                className={styles.icon}
              />
            </div>
          </div>

          {/* Описание */}
          <div className={styles.description}>
            Инженерно-гидрометеорологические изыскания представляют собой <br />
            комплекс исследований, направленных на изучение климатических,{" "}
            <br />
            гидрологических, метеорологических и морфометрических условий <br />
            на участке строительства. В ходе работ осуществляется прогноз <br />
            их возможных изменений под влиянием проектируемого объекта, <br />
            что позволяет принимать обоснованные проектные решения.
          </div>

          {/* Картинка */}
          <div className={styles.imageWrapper}>
            <Image
              src="/element/engineering-surveys/engineering-surveys-two-Rectangle 141.png"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        </div>

        {/* --- ЧТО ИЗУЧАЕТСЯ --- */}
        <div className={styles.workBlock}>
          <h3 className={styles.subtitle}>В ходе изысканий изучаются:</h3>

          <div className={styles.workList}>
            {[
              "Гидрологический режим рек, озёр, водохранилищ, морей, болот и временных водотоков",
              "Климатические условия и ключевые метеорологические характеристики",
              "Опасные гидрометеорологические процессы и явления",
              "Изменения гидрологических и климатических параметров под воздействием техногенных факторов",
            ].map((item, index) => (
              <div key={index} className={styles.workItem}>
                <span className={styles.workIndex}>
                  {String(index + 1).padStart(2, "#")}
                </span>
                <span className={styles.workText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- СОСТАВ РАБОТ --- */}
        <div className={styles.workBlock}>
          <h3 className={styles.subtitle}>Состав работ включает:</h3>

          <div className={styles.workList}>
            {[
              "Сбор, анализ и обобщение гидрометеорологических и картографических материалов",
              "Рекогносцировочное обследование территории",
              "Наблюдения за гидрологическими и климатическими характеристиками",
              "Изучение опасных процессов и явлений",
              "Камеральную обработку данных и определение расчётных гидрологических и/или метеорологических параметров",
            ].map((item, index) => (
              <div key={index} className={styles.workItem}>
                <span className={styles.workIndex}>
                  {String(index + 1).padStart(2, "#")}
                </span>
                <span className={styles.workText}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- ДОП БЛОК --- */}
        <div className={styles.infoSingle}>
          <h3 className={styles.subtitle}>Результат работ:</h3>

          <div className={styles.infoCard}>
            Технический отчёт об инженерно-гидрометеорологических <br />
            изысканиях, подготовленный в соответствии <br />с действующими
            нормативными документами.
          </div>
        </div>
      </Container>
    </section>
  );
}
