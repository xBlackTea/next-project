import { Box } from '@yamada-ui/react';
import React from 'react';

type captionProps = {
	title: string;
};

export const Caption = (title: captionProps) => {
	return (
		<>
			<Box m="20px auto" w="80%" p="15px" color="#fff" bgColor="caption.bg">
				{title.title}
			</Box>
		</>
	);
};
