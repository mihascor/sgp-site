import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/layout/header/header"
import { CookieBanner } from '@/components/shared/cookie-banner/cookie-banner'

export const metadata: Metadata = {
  title: "СГП",
  description: "Сайт компании",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}