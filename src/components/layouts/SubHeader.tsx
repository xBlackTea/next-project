"use client";
import { Box } from "@yamada-ui/react";
import { SkewButton } from "../elements/subHeader/SkewButton";

export const SubHeader = () => {

    const subHeaderList = [
        {JPTitle: "作品案内", ENTitle: "MOVIE GUIDE"},
        {JPTitle: "劇場案内", ENTitle: "THEATER GUIDE"},
        {JPTitle: "売店案内", ENTitle: "SHOP GUIDE"},
        {JPTitle: "イベント案内", ENTitle: "EVENT GUIDE"},
        {JPTitle: "サービス案内", ENTitle: "SERVICE GUIDE"},
    ];

    return (
        <>
        <Box
            w="full"
            h="60px"
            bg="subHeader.bg"
        >
            <Box
                h="full"
                w="1200px"
                maxW="100vw"
                margin="0 auto"
                display="flex"
                justifyContent="center"
                alignItems="center"
                overflowX="scroll"
                sx={{
                    '::-webkit-scrollbar': {
                    display: 'none',
                    },
                }}
            >
            {subHeaderList.map((_, index) =>
                <SkewButton
                    key={index}
                    JPTiltle={_.JPTitle}
                    ENTitle={_.ENTitle}
                    index={index}
                />
            )}
            </Box>
        </Box>
        </>
    );
}