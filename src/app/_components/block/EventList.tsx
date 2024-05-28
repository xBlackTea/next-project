import React from "react";
import { eventList, eventType } from "@/list/eventList";
import { Box, SimpleGrid } from "@yamada-ui/react";
import ShopInformation from "./ShopInformation";

export const EventList = () => {
  return (
    <Box m="15px auto 0 auto">
      <SimpleGrid columns={2} gap={"15px"}>
        {eventList.map((data: eventType) => (
          <ShopInformation
            key={data.id}
            shopImage={data.eventImage}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
