"use client";
import { Box, Link, useBreakpoint } from "@yamada-ui/react";
import { Icon } from "@yamada-ui/fontawesome";
import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { HeaderButton } from "../elements";

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
            <Icon icon={faBars} />
            :
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
            >
                <Link href="tel:052-551-1051">
                    <HeaderButton
                        variant="outline"
                        icon={<Icon icon={faPhone} />}
                    >
                        052-551-1001
                    </HeaderButton>
                </Link>

                <HeaderButton
                    icon={<Icon icon={faEnvelope} />}
                >
                    xxx@xxx.com
                </HeaderButton>
            </Box>
            }
        </Box>
        </>
    );
}