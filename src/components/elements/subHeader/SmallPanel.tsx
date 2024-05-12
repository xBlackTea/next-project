"use client";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@yamada-ui/fontawesome";
import { Button, Text } from "@yamada-ui/react";

interface SkewButtonProps {
    title: string,
    icon: IconDefinition
};

export const SmallPanel = ({ title, icon }: SkewButtonProps) => {

    return (
        <>
        <Button
                h="full"
                w="50%"
                p="0 50px"
                bg="subHeader.bg"
                borderRadius="0px"
                border="solid 1px #999"
                _hover={{ bg: "subHeader.hoverBg" }}
                leftIcon={<Icon icon={icon} color={"secondary"}/>}
            >
                <Text fontSize="md" color="subHeader.mainText">{title}</Text>
        </Button>
        </>
    );
}