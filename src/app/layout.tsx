import type { Metadata } from "next";
import './styles/global.css';
import { UIProvider } from "@yamada-ui/react";
import { Header } from "./components/layouts";

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
        <UIProvider>
          <Header />
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
