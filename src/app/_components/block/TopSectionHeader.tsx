import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@yamada-ui/fontawesome';
import { Box, Button, Link, Text, useBreakpoint } from '@yamada-ui/react'
import React from 'react'

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
            p={["sm", "md"].includes(breakpoint) ? " 0 20px" : "0 60px"}
        >

            <Text
                fontSize="xl"
                fontWeight="bold"
                color="topSectionHeader.title"
                isTruncated
            >
                {title}
            </Text>

            <Link href={link}>
                <Button
                    h="35px"
                    color="topSectionHeader.title"
                    bgColor={["blue.500", "#000"]}
                    rightIcon={<Icon icon={faRightLong} />}
                >
                    一覧
                </Button>
            </Link>

        </Box>
    )
}
