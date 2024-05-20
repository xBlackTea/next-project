import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@yamada-ui/fontawesome';
import { Box, Button, Link, Text } from '@yamada-ui/react'
import React from 'react'

interface TopSectionHeaderProps {
    title: string;
    link: string;
};

export const TopSectionHeader = ({title ,link}: TopSectionHeaderProps) => {

    return (
        <Box
            bgColor="topSectionHeader.bg"
            w="full"
            h="50px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="0 20px"
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
                    // bgColor='topSectionHeader.button'
                    bgColor={["blue.500", "#000"]}
                    rightIcon={<Icon icon={faRightLong} />}
                >
                    一覧
                </Button>
            </Link>

        </Box>
    )
}
