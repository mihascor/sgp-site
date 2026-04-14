import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import { CookieBanner } from "@/components/shared/cookie-banner/cookie-banner";
import { ScrollToTop } from "@/components/shared/scroll-to-top/ScrollToTop";

export const metadata: Metadata = {
  title: "Связьгазпроект",
  description: "Сайт компании ООО «Связьгазпроект»",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
