import { GridItem, Image } from '@yamada-ui/react';
import React from 'react';

type shopType = {
	key: number;
	shopImage: string;
};

const ShopInformation = (props: shopType) => {
	return (
		<GridItem w="100%" rounded="2px" bg="#ddd">
			<Image
				src={props.shopImage}
				alt={props.shopImage}
				width="100%"
				height="auto"
			/>
		</GridItem>
	);
};

export default ShopInformation;
