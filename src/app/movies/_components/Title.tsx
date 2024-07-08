import React from 'react';
import { Box, Text } from '@yamada-ui/react';

const Title = () => {
	return (
		<Box
			height="60px"
			borderRadius="2px"
			backgroundColor="#111"
			width="100%"
			marginTop="15px"
		>
			<Text paddingLeft="10px" fontSize="30px" lineHeight="1.8" color="#fff">
				作品一覧
			</Text>
		</Box>
	);
};

export default Title;
