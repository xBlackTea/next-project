import React from 'react';
import { Box, Text } from '@yamada-ui/react';

const Title = () => {
	return (
		<Box
			width="100%"
			height="60px"
			marginTop="15px"
			borderRadius="2px"
			backgroundColor="#111"
		>
			<Text paddingLeft="10px" fontSize="30px" lineHeight="1.8" color="#fff">
				劇場一覧
			</Text>
		</Box>
	);
};

export default Title;
