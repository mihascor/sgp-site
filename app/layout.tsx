import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/layout/header/header"

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
      </body>
    </html>
  )
}