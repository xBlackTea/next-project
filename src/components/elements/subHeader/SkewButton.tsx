"use client";
import { Box, Button, Text } from "@yamada-ui/react";

interface SkewButtonProps {
    JPTiltle: string,
    ENTitle: string,
    index: number,
};

export const SkewButton = ({ JPTiltle, ENTitle, index }: SkewButtonProps) => {

    return (
        <>
        <Button
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="0px"
                h="full"
                minW="200px"
                p="0 50px"
                bg="subHeader.bg"
                borderRadius="0px"
                borderLeft={index === 0 ? "solid 2px #999" : ""}
                borderRight="solid 2px #999"
                _hover={{ bg: "subHeader.hoverBg" }}
            >
            <Box transform="skewX(-150deg)">
                <Text fontSize="md" color="subHeader.mainText" textAlign="left">{JPTiltle}</Text>
                <Text fontSize="md" color="secondary" textAlign="right">{ENTitle}</Text>
            </Box>
        </Button>
        </>
    );
}