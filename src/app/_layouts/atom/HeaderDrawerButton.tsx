import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@yamada-ui/fontawesome";
import { Button, Divider } from "@yamada-ui/react"

interface HeaderDrawerButtonProps {
    title: string;
    icon: IconDefinition;
}

export const HeaderDrawerButton = ({title, icon}: HeaderDrawerButtonProps) => {
    return (
        <>
        <Button
            variant="ghost"
            colorScheme="secondary"
            w="full"
            p="30px 0"
            borderRadius="0"
            rightIcon={<Icon icon={icon} color={"secondary"}/>}
        >
            {title}
        </Button>
        <Divider variant="solid" />
        </>
    )
}
