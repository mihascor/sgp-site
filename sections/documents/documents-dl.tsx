import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container/Container";
import styles from "./documents-dl.module.css";
import { Breadcrumbs } from "@/components/shared/breadcrumbs/Breadcrumbs";

type DocumentItem = {
  id: number;
  title: string;
  description: string;
  status: string;
  href: string;
  note?: string;
  statusWide?: boolean;
  isPrimaryView?: boolean;
};

const documents: DocumentItem[] = [
  {
    id: 1,
    title: "Политика в отношении обработки персональных данных",
    description:
      "Документ, регламентирующий принципы и порядок обработки персональных данных в компании",
    status: "Актуально",
    href: "/documents/politika_v_otnoshenii_obrabotki_personalnykh_dannykh.pdf",
  },
  {
    id: 2,
    title: "Сертификат качества ГОСТ Р ИСО 9001-2015",
    description:
      "Система менеджмента качества соответствует международным стандартам",
    status: "Сертифицировано",
    href: "/documents/sertifikat_kachestva_gost_r_iso_9001_2015.pdf",
    statusWide: true,
  },
  {
    id: 3,
    title: "Лицензия ФСТЭК России",
    description:
      "Лицензия от 30.01.2023 по технической защите конфиденциальной информации",
    note: "Регистрационный номер: № Л024-00107-77/00630358",
    status: "Действует",
    href: "/documents/licenziya_fstek_rossii_ot_30_01_2023_po_tehnicheskoiy_zashchite_konfidentsialnoy.pdf",
  },
  {
    id: 4,
    title: "Свидетельство ИНН",
    description:
      "Свидетельство о постановке на учет российской организации в налоговом органе",
    status: "Действует",
    href: "/documents/svidetelstvo_inn.pdf",
  },
  {
    id: 5,
    title: "Свидетельство о ГРЮЛ",
    description:
      "Свидетельство о государственной регистрации юридического лица",
    status: "Действует",
    href: "/documents/svidetelstvo_gryul.pdf",
  },
  {
    id: 6,
    title: "Сертификат соответствия ИНТЕРГАЗСЕРТ",
    description:
      "Проектирование инженерно-технических средств охраны на объектах ПАО Газпром",
    status: "Сертифицировано",
    href: "/documents/sertifikat_sootvetstviya_intergazsert_proektirovanie_inzhenerno_tekhnicheskikh.pdf",
    statusWide: true,
  },
  {
    id: 7,
    title: "Свидетельство члена СОЮЗА СТРОИТЕЛЕЙ",
    description: "Членство в СОЮЗЕ СТРОИТЕЛЕЙ ВОРОНЕЖСКОЙ ОБЛАСТИ",
    status: "Активно",
    href: "/documents/svidetelstvo_soyuz_stroiteley_voronezhskoy_oblasti.pdf",
  },
];

export function DocumentsDl() {
  return (
    <section className={styles.section} aria-labelledby="documents-dl-title">
      <Container>
        <div className={styles.inner}>
          {/* Хлебные крошки */}
          <Breadcrumbs
            items={[{ label: "Главная", href: "/" }, { label: "Документы" }]}
          />

          {/* Заголовок секции */}
          <h1 id="documents-dl-title" className={styles.title}>
            ДОКУМЕНТЫ
            <br />И ЛИЦЕНЗИИ
          </h1>

          {/* Сетка карточек документов */}
          <div className={styles.grid}>
            {documents.map((document) => (
              <article key={document.id} className={styles.card}>
                <div className={styles.cardContent}>
                  {/* Верхняя строка карточки: решетка + статус */}
                  <div className={styles.cardTop}>
                    <Image
                      src="/element/documents/documents-dl-lattice.svg"
                      alt=""
                      width={29}
                      height={47}
                      className={styles.lattice}
                      aria-hidden="true"
                    />

                    <div
                      className={`${styles.status} ${
                        document.statusWide ? styles.statusWide : ""
                      }`}
                    >
                      <span className={styles.statusText}>
                        {document.status}
                      </span>
                      <Image
                        src="/element/documents/documents-dl-jackdaw.svg"
                        alt=""
                        width={17}
                        height={17}
                        className={styles.statusIcon}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Текстовый контент карточки */}
                  <div className={styles.info}>
                    <h2 className={styles.cardTitle}>{document.title}</h2>
                    <p className={styles.cardDescription}>
                      {document.description}
                    </p>

                    {document.note && (
                      <p className={styles.cardNote}>{document.note}</p>
                    )}
                  </div>
                </div>

                {/* Кнопки действий */}
                <div className={styles.actions}>
                  <a
                    href={document.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionButton}
                    aria-label={`Просмотреть документ: ${document.title}`}
                  >
                    <Image
                      src="/element/documents/documents-dl-look.svg"
                      alt=""
                      width={17}
                      height={15}
                      className={styles.actionIcon}
                      aria-hidden="true"
                    />
                    <span>Просмотреть</span>
                  </a>

                  <a
                    href={document.href}
                    download
                    className={styles.actionButton}
                    aria-label={`Скачать PDF: ${document.title}`}
                  >
                    <Image
                      src="/element/documents/documents-dl-download.svg"
                      alt=""
                      width={17}
                      height={17}
                      className={styles.actionIcon}
                      aria-hidden="true"
                    />
                    <span>Скачать PDF</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
