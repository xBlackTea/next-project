import {
	Box,
	Center,
	SegmentedControl,
	SegmentedControlItem,
} from '@yamada-ui/react';
import React from 'react';
import { movieCard } from '@/mock/theater/movie/mock';
import { fetchMovieResponse } from '@/mock/theater/movie/MovieInterface';
import { MovieScheduleField } from './_components/MovieScheduleField';
import { Caption } from './_components/Caption';
import { BreadcrumbList } from './_components/BreadcrumbList';
import { getNextWeekDates } from '@/utils/scheduleDate';

const Page = () => {
	const items: SegmentedControlItem[] = getNextWeekDates();
	return (
		<>
			<Box maxW="1500px">
				<BreadcrumbList />
				<Caption title="上映スケジュール" />
				<Center>
					<SegmentedControl borderRadius="0" w="80%" items={items} />
				</Center>

				{movieCard.map((data: fetchMovieResponse) => (
					<MovieScheduleField
						key={data.id}
						id={data.id}
						title={data.title}
						image={data.movie_image}
					/>
				))}
			</Box>
		</>
	);
};

export default Page;
