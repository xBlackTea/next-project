"use client";
import { Box, Link, useBreakpoint } from "@yamada-ui/react";
import { Icon } from "@yamada-ui/fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { HeaderButton, MenuButton, ScreenButton } from "../elements/header";

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

            <div style={{color: "#fff", fontWeight: "bold"}}>ここにロゴ</div>

            {["sm", "md"].includes(breakpoint) ?

            <MenuButton />
            :
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
            >
                <Link href="tel:052-551-1051">
                    <HeaderButton variant="outline"icon={<Icon icon={faPhone} />}>052-551-1001</HeaderButton>
                </Link>

                <HeaderButton icon={<Icon icon={faEnvelope} />}>xxx@xxx.com</HeaderButton>

                <ScreenButton />
            </Box>
            }
        </Box>
        </>
    );
}