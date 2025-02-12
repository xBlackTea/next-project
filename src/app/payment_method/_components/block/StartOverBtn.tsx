import { Box, Button, Link } from '@yamada-ui/react';
import React from 'react';

const StartOverBtn = () => {
	return (
		<Link href="/">
			<Box w="95%" m="10px auto">
				<Button w="100%" h="70px" p="20px 0" colorScheme="gray">
					チケットを選びなおす
				</Button>
			</Box>
		</Link>
	);
};

export default StartOverBtn;
