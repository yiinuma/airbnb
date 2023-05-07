import { Nunito } from "next/font/google";

import "./globals.css";
import ClientOnly from "@/app/components/clientOnly";
import LoginModal from "@/app/components/modals/loginModal";
import RegisterModal from "@/app/components/modals/registerModal";
import Navbar from "@/app/components/navbar/navbar";
import ToastProvider from "@/app/providers/toastProvider";

export const metadata = {
  title: "別荘&コンドミニアムをレンタル-Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
