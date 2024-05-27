import { Box, SimpleGrid } from "@yamada-ui/react";
import React from "react";
import ShopInformation from "./ShopInformation";
import { serviceList, serviceType } from "@/list/serviceList";

export const ServiceList = () => {
  return (
    <>
      <Box m="0 auto 20px auto">
        <SimpleGrid w="1200px" columns={{ base: 2, md: 1 }} gap="30px">
          {serviceList.map((data: serviceType) => (
            <ShopInformation key={data.id} shopImage={data.serviceImage} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};
