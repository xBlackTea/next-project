'use client';
import React from 'react';
import { Box } from '@yamada-ui/react';
import { BreadcrumbList } from './_components/BreadcrumbList';
import { MovieCaption } from './_components/MovieCaption';
import { MovieInformation } from './_components/MovieInformation';
import { ScheduleAccordion } from './_components/ScheduleAccordion';
import { useParams, useSearchParams } from 'next/navigation';
import useMovieId from '@/app/hooks/useMovieId';
import { useRouter } from 'next/navigation';

const Page = () => {
	const params = useParams();
	const str_id = params.id;
	const id_num = Number(str_id);

	const { movie, loading, error } = useMovieId(id_num);
	console.log(id_num);
	console.log(movie);
	if (!movie) {
		return <div>No movie data found</div>;
	}

	return (
		<>
			<Box w="80%" maxW="1500px" m="0 auto">
				<BreadcrumbList />
			</Box>

			<Box w="80%" maxW="1500px" m="0 auto">
				<MovieCaption />
			</Box>

			<Box w="80%" maxW="1500px" m="0 auto">
				<MovieInformation movie={movie} />
			</Box>

			<Box w="80%" maxW="1500px" m="0 auto">
				<ScheduleAccordion />
			</Box>
		</>
	);
};

export default Page;
