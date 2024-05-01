"use client";
import { Box, useBreakpoint } from "@yamada-ui/react";
import { Icon } from "@yamada-ui/fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const SubHeader = () => {

    const breakpoint = useBreakpoint();

    return (
        <>
        <Box
            w="full"
            h="60px"
            bg="subHeader"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
        </Box>
        </>
    );
}