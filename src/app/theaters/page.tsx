import React from 'react';
import { Box } from '@yamada-ui/react';
import BreadcrumbList from './_components/BreadcrumbList';
import Title from './_components/Title';
import TheaterTokyo from './_components/TheaterTokyo';
import TheaterNagoya from './_components/TheaterNagoya';
import TheaterOsaka from './_components/TheaterOsaka';

const Page = () => {
	return (
		<Box
			margin="0 auto"
			marginBottom="15px"
			maxWidth="1500px"
			width="100%"
			height="auto"
			backgroundColor="#fff"
		>
			<BreadcrumbList />
			<Title />
			<TheaterTokyo />
			<TheaterNagoya />
			<TheaterOsaka />
		</Box>
	);
};

export default Page;
