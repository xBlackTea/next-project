import { GridItem, Image, SimpleGrid } from '@yamada-ui/react';
import React from 'react';

type shopType = {
  key: number;
  shopImage: string;
};

const ShopInformation = (props: shopType) => {
  // const{key, shopImage} = props
  return (
    <>
      <GridItem w="600px" h="4xs" rounded="md" bg="#ddd">        
        <Image
          src={props.shopImage}
          alt={props.shopImage}
          width="100%"
        />
      </GridItem>
    </>
  )
}

export default ShopInformation