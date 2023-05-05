import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/app/components/navbar/navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
