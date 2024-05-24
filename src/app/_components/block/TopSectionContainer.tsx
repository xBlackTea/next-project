import { Box, useBreakpoint } from "@yamada-ui/react";
import { ReactNode } from "react";

interface TopSectionContainerProp {
  children: ReactNode;
}

export const TopSectionContainer = ({ children }: TopSectionContainerProp) => {

  const breakpoint = useBreakpoint();

  return (
    <Box
      w={breakpoint === "sm" ? "100%" : breakpoint === "md" ? "90%" : "80%"}
      m="75px auto 0 auto"
      display="flex"
      justifyContent="center"
      alignItems="space-between"
      flexDirection="column"
      gap="30px"
    >
      {children}
    </Box>
  );
};
