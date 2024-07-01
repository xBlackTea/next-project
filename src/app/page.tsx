'use client';
import { Box, useBreakpoint } from '@yamada-ui/react';

import React, { useEffect, useState } from 'react';
import { movieCard } from '@/mock/movie/mock';
import { fetchMovieResponse } from '@/mock/movie/MovieInterface';
import {
	MovieCard,
	TopSectionContainer,
	TopSectionHeader,
	TopSlider,
} from './_components/block';
import TheaterList from './_components/block/TheaterList';
import ShopList from './_components/block/ShopList';
import { EventList } from './_components/block/EventList';
import { ServiceList } from './_components/block/ServiceList';
import { fetchMovie } from './hooks/useMovie';
import Link from 'next/link';

interface Movie {
	movie_id: number;
	movie_image: string;
	movie_name: string;
}

export default function Page() {
	const [movies, setMovies] = useState<Movie[]>([]);
	const breakpoint = useBreakpoint();

	useEffect(() => {
		const fetchData = async () => {
			const moviesData = await fetchMovie();

			const formattedMovie: Movie[] = moviesData.map((movie: any) => ({
				movie_id: movie.movie_id,
				movie_image: movie.movie_image1,
				movie_name: movie.movie_name,
			}));
			setMovies(formattedMovie);
		};
		fetchData();
	}, []);

	return (
		<>
			<TopSlider />

			<TopSectionContainer>
				<TopSectionHeader title="作品案内" link="/movies" />
				<Box
					flexWrap="wrap"
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					{movies.map((movie: Movie) => (
						<Link key={movie.movie_id} href={`./movies/${movie.movie_id}`}>
							<MovieCard
								key={movie.movie_id}
								movie_image={movie.movie_image}
								title={movie.movie_name}
								id={movie.movie_id}
							/>
						</Link>
					))}
				</Box>
			</TopSectionContainer>

			<TopSectionContainer>
				<TopSectionHeader title="劇場案内" link="/theaters" />
				<TheaterList />
			</TopSectionContainer>

			<TopSectionContainer>
				<TopSectionHeader title="売店案内" link="/shops" />
				<ShopList />
			</TopSectionContainer>

			<TopSectionContainer>
				<TopSectionHeader title="イベント案内" link="/events" />
				<EventList />
			</TopSectionContainer>

			<TopSectionContainer>
				<TopSectionHeader title="サービス案内" link="/services" />
				<ServiceList />
			</TopSectionContainer>
		</>
	);
}
