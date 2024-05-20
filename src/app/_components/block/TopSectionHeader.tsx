import { Box, Text, useBreakpoint } from '@yamada-ui/react'
import React from 'react'
import { SectionHeaderButton } from '../atom';

interface TopSectionHeaderProps {
    title: string;
    link: string;
};

export const TopSectionHeader = ({title ,link}: TopSectionHeaderProps) => {

    const breakpoint = useBreakpoint();

    return (
        <Box
            bgColor="topSectionHeader.bg"
            w="full"
            h="50px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            overflow="hidden"
            p={["sm", "md"].includes(breakpoint) ? "0" : "0 0 0 60px"}
        >

            <Text
                fontSize="lg"
                fontWeight="bold"
                color="topSectionHeader.title"
                isTruncated
                display={["sm", "md"].includes(breakpoint) ? "flex" : "block"}
                justifyContent="center"
                alignItems="center"
                w={
                    ["sm", "md"].includes(breakpoint) ? "50%" :
                    "70%"
                }
            >
                {title}
            </Text>

            <SectionHeaderButton link={link}/>

        </Box>
    )
}
