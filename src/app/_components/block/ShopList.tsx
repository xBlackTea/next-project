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
    <>
      <Box m="0 auto 15px auto">
        <SimpleGrid w="1200px" columns={{ base: 2, md: 1 }} gap="20px">
          {shop.map((data) => (
            <ShopInformation
              key={data.id}
              shopImage={data.shopImage}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default ShopList
