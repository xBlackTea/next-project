"use client";
import { Box, Button, Text, useBreakpoint } from "@yamada-ui/react";
import { Icon } from "@yamada-ui/fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const SubHeader = () => {

    const breakpoint = useBreakpoint();

    return (
        <>
        <Box
            w="full"
            h="60px"
            bg="subHeader.bg"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Button
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bg="transparent"
                gap="0px"
                h="full"
                p="0 30px"
                borderRadius="0px"
                transform="skewX(150deg)"
                borderLeft="solid 2px #999"
                borderRight="solid 2px #999"
            >
                <Box transform="skewX(-150deg)" textAlign="center">
                    <Text fontSize="md" color="subHeader.mainText" textAlign="left">作品案内</Text>
                    <Text fontSize="md" color="secondary" textAlign="right">MOVIE GUIDE</Text>
                </Box>
            </Button>
            <Button
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bg="transparent"
                gap="0px"
                h="full"
                p="0 30px"
                borderRadius="0px"
                transform="skewX(150deg)"
                borderLeft="solid 2px #999"
                borderRight="solid 2px #999"
            >
                <Box transform="skewX(-150deg)">
                    <Text fontSize="md" color="subHeader.mainText" textAlign="left">劇場案内</Text>
                    <Text fontSize="md" color="secondary" textAlign="right">THEATER GUIDE</Text>
                </Box>
            </Button>
        </Box>
        </>
    );
}