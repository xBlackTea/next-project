import React from "react";
import { Box, SimpleGrid } from "@yamada-ui/react";
import { serviceList, serviceType } from "@/list/serviceList";
import ShopInformation from "./ShopInformation";

export const ServiceList = () => {
  return (
    <Box m="15px auto 15px auto" w="100%">
      <SimpleGrid columns={2} gap={"15px"}>
        {serviceList.map((data: serviceType) => (
          <ShopInformation
            key={data.id}
            shopImage={data.serviceImage}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
