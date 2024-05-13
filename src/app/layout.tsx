import type { Metadata } from "next";
import { colorModeManager, ColorModeScript, UIProvider } from "@yamada-ui/react";
import theme from "@/theme";
import { customConfig } from "@/theme/config";
import { Header, SubHeader } from "./_layouts/block";

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
          <SubHeader />
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
