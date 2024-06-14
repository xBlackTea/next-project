import React from 'react';
import { Box, Text } from '@yamada-ui/react';

type caption = {
	cap: string;
};

const Caption = (cap: caption) => {
	return (
		<Box w="1200px" h="50" m="15px auto" bg="#bbb" color="white">
			<Text fontSize="5xl">{cap.cap}</Text>
		</Box>
	);
};

export default Caption;
