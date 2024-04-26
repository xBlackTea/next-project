import type { Metadata } from "next";
import './styles/global.css';
import { Header } from "./components/layouts/Header";

export const metadata: Metadata = {
  title: "HALシネマ",
  description: "映画予約サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className="global">
        <Header />
        {children}
      </body>
    </html>
  );
}
