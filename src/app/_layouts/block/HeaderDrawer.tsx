"use client"
import { useDrawer } from "@/app/hooks"
import { Drawer, DrawerBody, DrawerHeader, useBreakpoint } from "@yamada-ui/react"

export const HeaderDrawer = () => {

    const breakpoint = useBreakpoint();
    const { isDrawerOpen, handleDrawerValue } = useDrawer();

    return (
        <>
        <Drawer
            isOpen={isDrawerOpen}
            onClose={() => handleDrawerValue(false)}
            w={
                breakpoint === "sm" ? "100vw" : "50vw"
            }
        >
            <DrawerHeader>HALシネマ</DrawerHeader>
            <DrawerBody>
                『ドラゴンボール』は、鳥山明による日本の漫画作品です。...
            </DrawerBody>
        </Drawer>
        </>
    )
}
