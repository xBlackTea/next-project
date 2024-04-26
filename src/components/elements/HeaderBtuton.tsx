import { Button } from "@yamada-ui/react";
import { ReactElement, ReactNode } from "react";

interface HeaderButtonProps  {
    children: ReactNode,
    icon?: ReactElement,
}

export const HeaderButton = ({ icon, children }: HeaderButtonProps ) => {

    return (
        <>
        <Button
            variant="solid"
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