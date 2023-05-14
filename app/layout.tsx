import { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/clientOnly";
import LoginModal from "@/app/components/modals/loginModal";
import RegisterModal from "@/app/components/modals/registerModal";
import Navbar from "@/app/components/navbar/navbar";
import ToastProvider from "@/app/providers/toastProvider";

export const metadata: Metadata = {
  title: "別荘&コンドミニアムをレンタル-Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="ja">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
