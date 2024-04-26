"use client";
import { Box, Button, Link, Text, useBreakpoint, useColorMode } from "@yamada-ui/react";
import { Icon } from "@yamada-ui/fontawesome";
import { faBars, faCircleHalfStroke, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { HeaderButton } from "../elements";

export const Header = () => {

    const breakpoint = useBreakpoint();
    const {toggleColorMode } = useColorMode();

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
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center" gap="5px">
                <Icon icon={faBars}
                color={["white", "white"]}
            />
                <Text
                    fontSize="xs"
                    isTruncated
                    color={["white", "white"]}
                    >
                        MENU
                    </Text>
            </Box>
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

                <Button
                    color={["black", "gray"]}
                    onClick={toggleColorMode}
                    leftIcon={<Icon icon={faCircleHalfStroke} color={["black", "white"]}/>}/>
            </Box>
            }
        </Box>
        </>
    );
}