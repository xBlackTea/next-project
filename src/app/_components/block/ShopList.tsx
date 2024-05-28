import React from 'react';
import { Box, SimpleGrid } from '@yamada-ui/react';
import ShopInformation from './ShopInformation';
import { shopList } from '@/list/shopList';

const ShopList = () => {
  return (
    <Box m="15px auto 0 auto" w="100%">
      <SimpleGrid columns={2} gap={"15px"}>
        {shopList.map((data) => (
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