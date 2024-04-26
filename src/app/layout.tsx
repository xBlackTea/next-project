import type { Metadata } from "next";
import { colorModeManager, ColorModeScript, UIProvider } from "@yamada-ui/react";
import { Header } from "@/components/layouts";
import theme from "@/theme";
import { customConfig } from "@/theme/cofig";

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
      <body>
        <ColorModeScript type="cookie" nonce="testing" />
        <UIProvider colorModeManager={{ ...colorModeManager }.cookieStorage} theme={theme} config={customConfig}>
          <Header />
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
