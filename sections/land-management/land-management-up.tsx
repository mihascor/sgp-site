import Image from "next/image";
import styles from "./land-management-up.module.css";
import { Container } from "@/components/shared/container/Container";

export const LandManagementUp = () => {
  return (
    <section className={styles.section}>
      <Container>
        {/* Хлебные крошки */}
        <div className={styles.breadcrumbs}>
          Главная / Деятельность / Землеустроительные работы
        </div>

        {/* Заголовок и описание */}
        <div className={styles.header}>
          <h1 className={styles.title}>ВЫПОЛНЕНИЕ ЗЕМЛЕУСТРОИТЕЛЬНЫХ РАБОТ</h1>
          <p className={styles.description}>
            ООО «Связьгазпроект» выполняет комплексное сопровождение проектов,
            связанных с оформлением имущественных прав, землеустроительной и
            градостроительной деятельностью
          </p>
        </div>

        {/* Подзаголовок */}
        <h2 className={styles.subTitle}>ОСНОВНЫЕ НАПРАВЛЕНИЯ</h2>

        {/* Все группы */}
        <div className={styles.groups}>
          {/* 1 */}
          <div className={styles.group}>
            <div className={styles.groupHeader}>
              <Image
                src="/element/land-management/land-management-up-folder.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>1. Проектно-документационное обеспечение</span>
            </div>

            <div className={styles.items}>
              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Подготовка разделов проектно-сметной документации и
                  исходно-разрешительных материалов.
                </span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Получение, анализ и систематизация исходных данных в органах
                  власти и ведомствах.
                </span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>Работа со сведениями ЕГРН.</span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Подготовка отчётов о возможности реализации проектов и оценка
                  земельных отводов.
                </span>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className={styles.group}>
            <div className={styles.groupHeader}>
              <Image
                src="/element/land-management/land-management-up-pencil.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>2. Согласовательная деятельность</span>
            </div>

            <div className={styles.items}>
              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Согласование проектных материалов с ведомствами, органами
                  власти и землепользователями.
                </span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Обеспечение внесения сведений в документы территориального
                  планирования.
                </span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Подготовка материалов для ГПЗУ и документации по планировке
                  территории.
                </span>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className={styles.group}>
            <div className={styles.groupHeader}>
              <Image
                src="/element/land-management/land-management-up-magnifying.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>3. Техническая экспертиза</span>
            </div>

            <div className={styles.items}>
              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Определение методов и средств проведения землеустроительных
                  работ.
                </span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Анализ исходных данных, местоположения объектов,
                  градостроительных документов.
                </span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Оценка возможности реализации проектов и подготовка
                  обоснований по техническим решениям.
                </span>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className={styles.group}>
            <div className={styles.groupHeader}>
              <Image
                src="/element/land-management/land-management-up-document.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>4. Документационное обеспечение и специальные работы</span>
            </div>

            <div className={styles.items}>
              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>Подготовка материалов для установления ЗОУИТ.</span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Согласование размещения объектов в зонах с особыми условиями
                  использования территорий.
                </span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Оформление прав на земельные участки, анализ
                  правоустанавливающих документов.
                </span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Подготовка материалов по несоответствиям границ земельных
                  участков.
                </span>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className={styles.group}>
            <div className={styles.groupHeader}>
              <Image
                src="/element/land-management/land-management-up-place.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>5. Кадастровые работы</span>
            </div>

            <div className={styles.items}>
              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>Разработка схем расположения земельных участков.</span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Подготовка материалов для разрешений на размещение объектов и
                  использование земель.
                </span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>Проекты публичных сервитутов.</span>
              </div>

              <div className={styles.item}>
                <Image
                  src="/element/land-management/land-management-up-label.svg"
                  alt=""
                  width={17}
                  height={17}
                />
                <span>
                  Сбор и подготовка материалов для согласования размещения
                  объектов в границах НКД, взаимодействие с недропользователями.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
