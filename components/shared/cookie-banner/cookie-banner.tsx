'use client'

import { useEffect, useState } from 'react'
import styles from './cookie-banner.module.css'

export const CookieBanner = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const accepted = localStorage.getItem('cookieAccepted')
        if (!accepted) {
            setVisible(true)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookieAccepted', 'true')
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>
                Этот сайт использует только технические cookie, необходимые для его функционирования. Эти cookie не требуют вашего согласия и используются для таких целей, как, например, запоминание ваших настроек, управление сессией и отображение контента.
            </p>

            <button className={styles.button} onClick={handleAccept}>
                Понимаю
            </button>
        </div>
    )
}