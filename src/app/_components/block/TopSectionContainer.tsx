import { Box } from "@yamada-ui/react";
import { ReactNode } from "react";

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
      gap="15px"
      mt="0px"
    >
      {children}
    </Box>
  );
};
