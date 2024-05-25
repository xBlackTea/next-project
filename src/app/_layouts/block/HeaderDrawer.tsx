"use client"
import { useDrawer } from "@/app/hooks"
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerHeader, Image, useBreakpoint } from "@yamada-ui/react"
import { HeaderDrawerButton } from "../atom";

export const HeaderDrawer = () => {

    const breakpoint = useBreakpoint();
    const { isDrawerOpen, handleDrawerValue } = useDrawer();

    const subHeaderList = [
        {title: "マイページ", icon: faPeopleArrows},
    ];


    return (
        <>
        <Drawer
            isOpen={isDrawerOpen}
            onClose={() => handleDrawerValue(false)}
            w={
                breakpoint === "sm" ? "100vw" : "50vw"
            }
        >
            <DrawerCloseButton color="red.500" />
            <DrawerHeader
                display="flex"
                justifyContent="start"
                alignItems="center"
                w="full"
            >
                <Image
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    maxH="35px"
                    maxW="50vw"
                    src="/HAL_Cinema_Logo_White.svg"
                    objectFit="cover"
                    alt='HAL_Cinema_Logo_White'
                    opacity={{base: "1", md: "0", sm: "1"}}
                />
            </DrawerHeader>
            <DrawerBody
                w={
                    breakpoint === "sm" ? "100vw" : "50vw"
                }
                p="0"
                gap="0"
            >
                <Divider variant="solid" />
                {subHeaderList.map((list, index) => (
                    <HeaderDrawerButton
                        title={list.title}
                        icon={list.icon}
                        key={index}
                    />
                ))}
            </DrawerBody>
        </Drawer>
        </>
    )
}
