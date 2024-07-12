import { Box, Button } from '@yamada-ui/react';
import React from 'react';

const StartOverBtn = () => {
	return (
		<div>
			<Box w="95%" m="10px auto">
				<Button w="100%" h="70px" p="20px 0" colorScheme="gray">
					決済情報を入力しなおす
				</Button>
			</Box>
		</div>
	);
};

export default StartOverBtn;
