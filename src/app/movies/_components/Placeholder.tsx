import React from 'react';
import { Box } from '@yamada-ui/react';

const Placeholder = ({
	width,
	minWidth,
	height,
	marginRight,
}: {
	width: string;
	minWidth?: string;
	height: string;
	marginRight?: string;
}) => {
	return (
		<Box
			width={width}
			height={height}
			minWidth={minWidth}
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
