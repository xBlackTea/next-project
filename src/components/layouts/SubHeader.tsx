"use client";
import { Box, useBreakpoint } from "@yamada-ui/react";
import { SkewButton } from "../elements/subHeader/SkewButton";
import { LeftButton } from "../elements/subHeader/LeftButton";
import { RightButton } from "../elements/subHeader/RightButton";
import { SmallPanel } from "../elements/subHeader/SmallPanel";

export const SubHeader = () => {
    
    const breakpoint = useBreakpoint();

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
        >
            {["sm", "md"].includes(breakpoint) ?
                <Box
                    display="flex"
                    flexWrap="wrap"
                    w="full"
                >
                    {subHeaderList.map((_, index) =>
                        <SmallPanel
                            key={index}
                            JPTiltle={_.JPTitle}
                            ENTitle={_.ENTitle}
                            index={index}
                        />
                    )}
                </Box>
                :
                <Box 
                    display="flex"
                    h="full"
                    p="0 100px"
                    position="relative"
                    bg="primary"
                >
                    <LeftButton />
                    <Box
                    bg="subHeader.bg"
                        h="full"
                        display="flex"
                        justifyContent="start"
                        alignItems="center"
                        overflowX="scroll"
                        transform="skewX(150deg)"
                        margin="0 auto"
                        zIndex="100"
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
                    <RightButton />
                </Box>
            }
        </Box>
        </>
    );
}