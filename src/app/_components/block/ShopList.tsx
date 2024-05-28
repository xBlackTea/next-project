import React from 'react';
import { Box, SimpleGrid } from '@yamada-ui/react';
import ShopInformation from './ShopInformation';

const shop = [
  {
    id: 1,
    shopImage: "cinema_donuts.jpg",
  },
  {
    id: 2,
    shopImage: "cinema_donuts.jpg",
  },
  {
    id: 3,
    shopImage: "cinema_donuts.jpg",
  },
  {
    id: 4,
    shopImage: "cinema_donuts.jpg",
  },
];

const ShopList = () => {
  return (
    <Box m="15px auto 0 auto" w="100%">
      <SimpleGrid columns={2} gap={"15px"}>
        {shop.map((data) => (
          <ShopInformation
            key={data.id}
            shopImage={data.shopImage}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ShopList;