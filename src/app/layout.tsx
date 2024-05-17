import type { Metadata } from "next";
import {
  Box,
  colorModeManager,
  ColorModeScript,
  UIProvider,
} from "@yamada-ui/react";
import theme from "@/theme";
import { customConfig } from "@/theme/config";
import { Footer, Header, SubHeader } from "./_layouts/block";

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
        <UIProvider
          colorModeManager={{ ...colorModeManager }.cookieStorage}
          theme={theme}
          config={customConfig}>
          <Header />
          <SubHeader />
            <Box
              maxW="2100px"
              margin="0 auto"
            >
              {children}
            </Box>
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
