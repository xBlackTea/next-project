import React from 'react';
import { AspectRatio } from '@yamada-ui/react';
import BreadcrumbList from './_components/BreadcrumbList';
import Title from './_components/Title';
import TheaterTokyo from './_components/TheaterTokyo';
import TheaterNagoya from './_components/TheaterNagoya';
import TheaterOsaka from './_components/TheaterOsaka';

const Page = () => {
	return (
		<div
			style={{
				margin: '0 auto',
				marginBottom: '15px',
				maxWidth: '1500px',
				width: '100%',
				height: 'auto',
				backgroundColor: '#fff',
			}}
		>
			<div>
				<BreadcrumbList />
				<Title />
				<TheaterTokyo />
				<TheaterNagoya />
				<TheaterOsaka />
			</div>
		</div>
	);
};

export default Page;
