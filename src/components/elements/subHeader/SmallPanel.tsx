"use client";
import { Box, Button, Text } from "@yamada-ui/react";

interface SkewButtonProps {
    JPTiltle: string,
    ENTitle: string,
    index: number,
};

export const SmallPanel = ({ JPTiltle, ENTitle, index }: SkewButtonProps) => {

    return (
        <>
        <Button
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="0px"
                h="full"
                w="50%"
                p="0 50px"
                bg="subHeader.bg"
                borderRadius="0px"
                _hover={{ bg: "subHeader.hoverBg" }}
            >
            <Box textAlign="center">
                <Text fontSize="md" color="subHeader.mainText">{JPTiltle}</Text>
                <Text fontSize="md" color="secondary">{ENTitle}</Text>
            </Box>
        </Button>
        </>
    );
}