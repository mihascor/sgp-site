"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/shared/container/Container"
import styles from "./header.module.css"

type MenuKey = "company" | "activity" | null

const companyLinks = [
  { label: "О нас", href: "/about" },
  { label: "Заказчики", href: "/clients" },
  { label: "Документы", href: "/documents" },
]

const activityLinks = [
  { label: "Землеустроительные работы", href: "/land-management" },
  { label: "Комплексные инженерные изыскания", href: "/engineering-surveys" },
  { label: "Проектирование ИТСО", href: "/design" },
  { label: "Авторский надзор", href: "/supervision" },
]

export const Header = () => {
  const [openDesktopMenu, setOpenDesktopMenu] = useState<MenuKey>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<MenuKey>(null)

  const headerRef = useRef<HTMLElement | null>(null)

  const toggleDesktopMenu = (menu: Exclude<MenuKey, null>) => {
    setOpenDesktopMenu((prev) => (prev === menu ? null : menu))
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev

      if (!next) {
        setOpenMobileSubmenu(null)
      }

      return next
    })
  }

  const toggleMobileSubmenu = (menu: Exclude<MenuKey, null>) => {
    setOpenMobileSubmenu((prev) => (prev === menu ? null : menu))
  }

  const closeAllMenus = () => {
    setOpenDesktopMenu(null)
    setIsMobileMenuOpen(false)
    setOpenMobileSubmenu(null)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!headerRef.current) return

      if (!headerRef.current.contains(event.target as Node)) {
        closeAllMenus()
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAllMenus()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  return (
    <header className={styles.header} ref={headerRef}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Link href="/" className={styles.logoLink} aria-label="Перейти на главную">
              <Image
                src="/logo.png"
                alt="Связьгазпроект"
                width={98}
                height={60}
                className={styles.logo}
                priority
              />
            </Link>

            <nav className={styles.desktopNav} aria-label="Основное меню">
              <div className={styles.navItem}>
                <button
                  type="button"
                  className={`${styles.navButton} ${
                    openDesktopMenu === "company" ? styles.navButtonActive : ""
                  }`}
                  onClick={() => toggleDesktopMenu("company")}
                  aria-expanded={openDesktopMenu === "company"}
                  aria-controls="desktop-company-menu"
                >
                  Компания
                  <span
                    className={`${styles.arrow} ${
                      openDesktopMenu === "company" ? styles.arrowOpen : ""
                    }`}
                  />
                </button>

                {openDesktopMenu === "company" && (
                  <div
                    id="desktop-company-menu"
                    className={styles.dropdown}
                    role="menu"
                  >
                    {companyLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownLink}
                        onClick={() => setOpenDesktopMenu(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.navItem}>
                <button
                  type="button"
                  className={`${styles.navButton} ${
                    openDesktopMenu === "activity" ? styles.navButtonActive : ""
                  }`}
                  onClick={() => toggleDesktopMenu("activity")}
                  aria-expanded={openDesktopMenu === "activity"}
                  aria-controls="desktop-activity-menu"
                >
                  Деятельность
                  <span
                    className={`${styles.arrow} ${
                      openDesktopMenu === "activity" ? styles.arrowOpen : ""
                    }`}
                  />
                </button>

                {openDesktopMenu === "activity" && (
                  <div
                    id="desktop-activity-menu"
                    className={`${styles.dropdown} ${styles.dropdownWide}`}
                    role="menu"
                  >
                    {activityLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownLink}
                        onClick={() => setOpenDesktopMenu(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/projects" className={styles.navLink}>
                Реализованные проекты
              </Link>

              <Link href="/contacts" className={styles.navLink}>
                Контакты
              </Link>
            </nav>
          </div>

          <div className={styles.right}>
            <button type="button" className={styles.ctaButton}>
              Обсудить проект
            </button>

            <button
              type="button"
              className={`${styles.burger} ${isMobileMenuOpen ? styles.burgerActive : ""}`}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-menu" className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              <div className={styles.mobileItem}>
                <button
                  type="button"
                  className={styles.mobileToggle}
                  onClick={() => toggleMobileSubmenu("company")}
                  aria-expanded={openMobileSubmenu === "company"}
                >
                  <span>Компания</span>
                  <span
                    className={`${styles.arrow} ${
                      openMobileSubmenu === "company" ? styles.arrowOpen : ""
                    }`}
                  />
                </button>

                {openMobileSubmenu === "company" && (
                  <div className={styles.mobileSubmenu}>
                    {companyLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.mobileSubmenuLink}
                        onClick={closeAllMenus}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.mobileItem}>
                <button
                  type="button"
                  className={styles.mobileToggle}
                  onClick={() => toggleMobileSubmenu("activity")}
                  aria-expanded={openMobileSubmenu === "activity"}
                >
                  <span>Деятельность</span>
                  <span
                    className={`${styles.arrow} ${
                      openMobileSubmenu === "activity" ? styles.arrowOpen : ""
                    }`}
                  />
                </button>

                {openMobileSubmenu === "activity" && (
                  <div className={styles.mobileSubmenu}>
                    {activityLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.mobileSubmenuLink}
                        onClick={closeAllMenus}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/projects" className={styles.mobileLink} onClick={closeAllMenus}>
                Реализованные проекты
              </Link>

              <Link href="/contacts" className={styles.mobileLink} onClick={closeAllMenus}>
                Контакты
              </Link>

              <button type="button" className={styles.mobileCtaButton}>
                Обсудить проект
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}