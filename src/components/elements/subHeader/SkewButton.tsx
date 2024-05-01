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
                bg="transparent"
                gap="0px"
                h="full"
                p="0 50px"
                borderRadius="0px"
                transform="skewX(150deg)"
                borderLeft={index === 0 ? "solid 2px #999" : ""}
                borderRight="solid 2px #999"
            >
            <Box transform="skewX(-150deg)">
                <Text fontSize="md" color="subHeader.mainText" textAlign="left">{JPTiltle}</Text>
                <Text fontSize="md" color="secondary" textAlign="right">{ENTitle}</Text>
            </Box>
        </Button>
        </>
    );
}