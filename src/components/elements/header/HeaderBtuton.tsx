import { Button } from "@yamada-ui/react";
import { ReactElement, ReactNode } from "react";

interface HeaderButtonProps  {
    children: ReactNode,
    icon?: ReactElement,
    variant?: string,
}

export const HeaderButton = ({ icon, children, variant }: HeaderButtonProps ) => {

    return (
        <>
        <Button
            variant={variant || "solid"}
            colorScheme="secondary"
            p="0 30px"
            fontWeight="bold"
            leftIcon={icon}
        >
            {children}
        </Button>
        </>
    );
}