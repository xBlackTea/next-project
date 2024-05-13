"use client";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@yamada-ui/fontawesome";
import { Button } from "@yamada-ui/react";

export const LeftButton = () => {

    return (
        <>
        <Button
            position="absolute"
            left="0"
            bottom="0"
            justifyContent="start"
            alignItems="center"
            bg="primary"
            gap="0px"
            h="full"
            w="50vw"
            p="0 40px"
            borderRadius="0px"
            _hover={{ bg: "subHeader.hoverBgArrow" }}
        >
            <Icon icon={faLeftLong} color="white"/>
        </Button>
        </>
    );
}