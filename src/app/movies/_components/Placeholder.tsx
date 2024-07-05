import React from 'react';
import { Box } from '@yamada-ui/react';

const Placeholder = ({
	width,
	height,
	marginRight,
}: {
	width: string;
	height: string;
	marginRight?: string;
}) => {
	return (
		<Box
			width={width}
			height={height}
			marginRight={marginRight}
			backgroundColor="#ddd"
			display="flex"
			alignItems="center"
			justifyContent="center"
			borderRadius="2px"
		></Box>
	);
};

export default Placeholder;
