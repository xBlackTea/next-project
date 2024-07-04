// import {
// 	Box,
// 	Center,
// 	SegmentedControl,
// 	SegmentedControlItem,
// } from '@yamada-ui/react';
// import React from 'react';
// import { movieCard } from '@/mock/theater/movie/mock';
// import { fetchMovieResponse } from '@/mock/theater/movie/MovieInterface';
// import { MovieScheduleField } from './_components/MovieScheduleField';
// import { BreadcrumbList } from './_components/BreadcrumbList';
// import { Title } from './_components/Title';
// import { getNextWeekDates } from '@/utils/scheduleDate';

// const Page = () => {
// 	const items: SegmentedControlItem[] = getNextWeekDates();
// 	return (
// 		<Box
// 			margin="0 auto"
// 			marginBottom="15px"
// 			maxWidth="1500px"
// 			width="100%"
// 			height="auto"
// 			backgroundColor="#fff"
// 		>
// 			<BreadcrumbList />
// 			<Title/>

// 			<SegmentedControl marginTop={"15px"} width={"100%"} borderRadius={"2px"} items={items} />

// 			{movieCard.map((data: fetchMovieResponse) => (
// 				<MovieScheduleField
// 					key={data.id}
// 					id={data.id}
// 					title={data.title}
// 					image={data.movie_image}
// 				/>
// 			))}
// 		</Box>
// 	);
// };

// export default Page;

'use client';
import {
	Box,
	Center,
	SegmentedControl,
	SegmentedControlItem,
	useBreakpointValue,
} from '@yamada-ui/react';
import React, { useState } from 'react';
import { movieCard } from '@/mock/theater/movie/mock';
import { fetchMovieResponse } from '@/mock/theater/movie/MovieInterface';
import { MovieScheduleField } from './_components/MovieScheduleField';
import { BreadcrumbList } from './_components/BreadcrumbList';
import { Title } from './_components/Title';
import { getNextWeekDates } from '@/utils/scheduleDate';

const Page = () => {
	const items: SegmentedControlItem[] = getNextWeekDates();
	const breakpoint = useBreakpointValue({ base: 'base', sm: 'sm', md: 'md' });
	const isSmallScreen = ['sm', 'md'].includes(breakpoint);
	const [selectedDate, setSelectedDate] = useState(0);
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

			<Box margin="15px 0">
				<SegmentedControl
					borderRadius="2px"
					w="100%"
					items={items}
					onChange={(value) => setSelectedDate(Number(value))}
					flexWrap="nowrap"
					overflowX="auto"
					sx={{
						display: 'grid',
						gridTemplateColumns: isSmallScreen
							? 'repeat(2, 1fr)'
							: 'repeat(auto-fit, minmax(100px, 1fr))',
						gap: 2,
					}}
				/>
			</Box>
			{movieCard.map((data: fetchMovieResponse) => (
				<MovieScheduleField
					key={data.id}
					id={data.id}
					title={data.title}
					image={data.movie_image}
				/>
			))}
		</Box>
	);
};

export default Page;
