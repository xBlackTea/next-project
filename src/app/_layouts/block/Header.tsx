"use client";
import { Box, Image, Link, useBreakpoint } from "@yamada-ui/react";
import { Icon } from "@yamada-ui/fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { HeaderButton, MenuButton, ScreenButton } from "../atom";

export const Header = () => {
  const breakpoint = useBreakpoint();

  return (
    <>
      <Box
        w="full"
        h="60px"
        p={["sm", "md"].includes(breakpoint) ? " 0 20px" : "0 60px"}
        bg="primary"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href='/' style={{ textDecoration: "none" }}>
          <Image
            src='/HAL_Cienema_Logo_White.svg'
            objectFit="cover"
            height={50}
            alt='HAL_Cienema_Logo_White'
          />
        </Link>

        {["sm", "md"].includes(breakpoint) ? (
          <MenuButton />
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <HeaderButton variant="outline" icon={<Icon icon={faPhone} />}>
              052-551-1001
            </HeaderButton>

            <Link href="/mypage">
              <HeaderButton icon={<Icon icon={faEnvelope} />}>
                マイページ
              </HeaderButton>
            </Link>

            <ScreenButton />
          </Box>
        )}
      </Box>
    </>
  );
};
