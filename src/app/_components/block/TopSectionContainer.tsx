import { Box } from '@yamada-ui/react'
import { ReactNode } from 'react'

interface TopSectionContainerProp {
    children: ReactNode;
}

export const TopSectionContainer = ({ children }: TopSectionContainerProp) => {
    return (
        <Box
            w="full"
            display="flex"
            justifyContent="center"
            alignItems="space-between"
            flexDirection="column"
            gap="20px"
            mt="70px"
        >
            {children}
        </Box>
    )
}
