import React from "react";
import { eventList, eventType } from "@/list/eventList";
import { Box, SimpleGrid } from "@yamada-ui/react";
import ShopInformation from "./ShopInformation";

export const EventList = () => {
  return (
    <>
      <Box m="0 auto 20px auto">
        <SimpleGrid w="1200px" columns={{ base: 2, md: 1 }} gap="30px">
          {eventList.map((data: eventType) => (
            <ShopInformation key={data.id} shopImage={data.eventImage} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};
