"use client";

import { useState } from "react";
import { Container } from "@/components/shared/container/Container";
import styles from "./about-working.module.css";

type City = {
    id: string;
    name: string;
    x: number;
    y: number;
    mobileX?: number;
    mobileY?: number;
};

type RegionGroup = {
    id: string;
    label: string;
    cities: City[];
};

const regionGroups: RegionGroup[] = [
    {
        id: "north-west",
        label: "Северо-Запад:",
        cities: [
            { id: "saint-petersburg", name: "Санкт-Петербург", x: 17.5, y: 34.2 },
            { id: "vologda", name: "Вологда", x: 24.8, y: 37.2 },
        ],
    },
    {
        id: "center-south",
        label: "Центр и Юг:",
        cities: [
            { id: "voronezh", name: "Воронеж", x: 19.8, y: 49.5 },
            { id: "ryazan", name: "Рязань", x: 22.8, y: 45.6 },
            { id: "stavropol", name: "Ставрополь", x: 12.8, y: 62.8 },
        ],
    },
    {
        id: "volga",
        label: "Поволжье:",
        cities: [
            { id: "kazan", name: "Казань", x: 31.6, y: 48.2 },
            { id: "nizhny-novgorod", name: "Нижний Новгород", x: 28.2, y: 43.8 },
        ],
    },
    {
        id: "siberia",
        label: "Сибирь:",
        cities: [{ id: "tomsk", name: "Томск", x: 57.2, y: 53.8 }],
    },
];

const defaultCityId = "vologda";

export const AboutWorking = () => {
    const allCities = regionGroups.flatMap((group) => group.cities);
    const [activeCityId, setActiveCityId] = useState(defaultCityId);

    const activeCity =
        allCities.find((city) => city.id === activeCityId) ?? allCities[0];

    return (
        <section className={styles.section}>
            <div className={styles.block}>
                <Container>
                    {/* Заголовок секции */}
                    <h2 className={styles.title}>
                        РАБОТАЕМ ТАМ,
                        <br />
                        ГДЕ НАХОДЯТСЯ ВАШИ АКТИВЫ
                    </h2>

                    {/* Верхняя часть: карточка + список офисов */}
                    <div className={styles.top}>
                        <div className={styles.infoCard}>
                            <p className={styles.infoTitle}>
                                Центральный офис в Вологде
                                <br />и сеть подразделений
                            </p>

                            <p className={styles.infoText}>
                                позволяют нам эффективно работать
                                <br />в ключевых экономических центрах:
                            </p>
                        </div>

                        <div className={styles.officeGroups}>
                            {regionGroups.map((group) => (
                                <div className={styles.officeRow} key={group.id}>
                                    <div className={styles.officeLabel}>{group.label}</div>

                                    <div className={styles.officeTags}>
                                        {group.cities.map((city) => {
                                            const isActive = city.id === activeCityId;

                                            return (
                                                <button
                                                    key={city.id}
                                                    type="button"
                                                    className={`${styles.cityButton} ${isActive ? styles.cityButtonActive : ""
                                                        }`}
                                                    onMouseEnter={() => setActiveCityId(city.id)}
                                                    onFocus={() => setActiveCityId(city.id)}
                                                    onClick={() => setActiveCityId(city.id)}
                                                    aria-pressed={isActive}
                                                >
                                                    {city.name}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Карта и маркер */}
                    <div className={styles.mapArea}>
                        <img
                            src="/element/about/about-working/map-russia.svg"
                            alt="Карта России"
                            className={styles.map}
                        />

                        <img
                            src="/element/about/about-working-pointer.svg"
                            alt=""
                            aria-hidden="true"
                            className={styles.marker}
                            style={
                                {
                                    "--marker-x": `${activeCity.x}%`,
                                    "--marker-y": `${activeCity.y}%`,
                                } as React.CSSProperties
                            }
                        />
                    </div>
                </Container>
            </div>
        </section>
    );
};