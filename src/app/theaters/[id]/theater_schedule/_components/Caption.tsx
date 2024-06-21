import { Box } from "@yamada-ui/react";
import React from "react";

export const Caption = (title: string) => {
  return (
    <>
      <Box w="100%" h="150px">
        {title}
      </Box>
    </>
  );
};
