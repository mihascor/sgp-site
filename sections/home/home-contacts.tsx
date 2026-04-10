import styles from "./home-contacts.module.css";

const offices = [
  {
    city: "Вологда",
    address: "ул. Козленская, д. 119а, оф. 308/9",
  },
  {
    city: "Воронеж",
    address: "ул. Урицкого, д. 151",
  },
  {
    city: "Ставрополь",
    address: "пр-кт Кулакова, д. 7Г, пом. 33",
  },
  {
    city: "Томск",
    address: "ул. Дзержинского, д. 8",
  },
  {
    city: "Санкт-Петербург",
    address: "Пулковское шоссе, д. 28А оф. 805",
  },
  {
    city: "Нижний Новгород",
    address: "ул. Новая, д. 10, пом. П10",
  },
  {
    city: "Рязань",
    address: "Касимовское шоссе, д. 8 к. 1",
  },
  {
    city: "Казань",
    address: "пр-кт Победы, д. 173, оф. 114",
  },
];

export function HomeContacts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Контакты</h2>

        <div className={styles.layout}>
          <div className={styles.leftTop}>
            <div className={styles.contactsRow}>
              <div className={styles.infoGroup}>
                <p className={styles.label}>Телефон:</p>
                <a href="tel:+78172239695" className={styles.phone}>
                  +7 (817) 223–96–95
                </a>
              </div>

              <div className={styles.infoGroup}>
                <p className={styles.label}>E-mail:</p>
                <a href="mailto:post@issgp.ru" className={styles.email}>
                  post@issgp.ru
                </a>
              </div>
            </div>

            <div className={styles.legalBlock}>
              <p className={styles.label}>Юридический адрес:</p>
              <p className={styles.legalAddress}>
                160012, Вологодская обл., г. Вологда, ул. Козленская, д. 119а,
                оф. 308/9
              </p>
            </div>
          </div>

          <div className={styles.rightTop}>
            <div className={styles.infoGroup}>
              <p className={styles.label}>Местоположение:</p>
              <p className={styles.location}>
                Центральный офис
                <br />и обособленные подразделения
              </p>
            </div>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              className={styles.map}
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A5266c7a3390faf2a2084190b476b8d868496880856d137e2d785ef6e280974b9&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта офисов"
            />
          </div>

          <div className={styles.card}>
            <p className={styles.label}>Адреса офисов:</p>

            <div className={styles.officeList}>
              {offices.map((office) => (
                <div key={office.city} className={styles.officeItem}>
                  <p className={styles.city}>{office.city}</p>
                  <p className={styles.address}>{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
