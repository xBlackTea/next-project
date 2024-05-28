import React from 'react';
import { Box, SimpleGrid } from '@yamada-ui/react';
import { shopList, shopType} from '@/list/shopList';
import ShopInformation from './ShopInformation';

const ShopList = () => {
  return (
    <Box m="15px auto 0 auto" w="100%">
      <SimpleGrid columns={2} gap={"15px"}>
        {shopList.map((data: shopType) => (
          <ShopInformation
            key={data.id}
            shopImage={data.shopImage}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ShopList;