'use client';
import React, { useEffect, useState } from 'react';
import { Box, useBreakpoint, AspectRatio } from '@yamada-ui/react';
import Title from './_components/Title';
import Genre from './_components/Genre';
import BreadcrumbList from './_components/BreadcrumbList';
import { fetchMovie } from '../hooks/useMovie';
import { MovieCard } from './_components/MovieCard';
import Placeholder from './_components/Placeholder';
import Link from 'next/link';

interface Movie {
	movie_id: number;
	movie_image: string;
	movie_name: string;
	category_id: number;
}

const Page = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState(true);
	const breakpoint = useBreakpoint();

	useEffect(() => {
		const fetchData = async () => {
			const moviesData = await fetchMovie();
			const formattedData: Movie[] = moviesData.map((movie: any) => ({
				movie_id: movie.movie_id,
				movie_image: movie.movie_image1,
				movie_name: movie.movie_name,
				category_id: movie.category_id,
			}));
			setMovies(formattedData);
			setFilteredMovies(formattedData);
			setLoading(false);
		};
		fetchData();
	}, []);

	const handleGenreChange = (selectedGenres: number[]) => {
		if (selectedGenres.length === 0 || selectedGenres.includes(0)) {
			setFilteredMovies(movies);
		} else {
			setFilteredMovies(
				movies.filter((movie) => selectedGenres.includes(movie.category_id))
			);
		}
	};

	const getContainerWidth = (breakpoint: string) => {
		switch (breakpoint) {
			case 'sm':
				return '100%';
			case 'md':
				return 'calc(50% - 7.5px)';
			default:
				return 'calc(33.3333% - 10px)';
		}
	};

	return (
		<Box
			margin="0 auto"
			maxWidth="1500px"
			width="100%"
			height="auto"
			backgroundColor="#fff"
		>
			<BreadcrumbList />
			<Title />
			<Genre onGenreChange={handleGenreChange} />
			<Box
				display="flex"
				alignItems="start"
				flexWrap="wrap"
				marginTop="15px"
				marginBottom="15px"
				gap="15px"
			>
				{loading
					? Array.from({ length: 12 }).map((_, index) => (
							<Box key={index} width={getContainerWidth(breakpoint)}>
								<AspectRatio ratio={5 / 7}>
									<Placeholder width="100%" height="100%" />
								</AspectRatio>
							</Box>
						))
					: filteredMovies.map((movie: Movie) => (
							<Box key={movie.movie_id} width={getContainerWidth(breakpoint)}>
								<Link href={`../movies/${movie.movie_id}`}>
									<MovieCard
										key={movie.movie_id}
										movie_id={movie.movie_id}
										movie_image={movie.movie_image}
										movie_name={movie.movie_name}
									/>
								</Link>
							</Box>
						))}
			</Box>
		</Box>
	);
};

export default Page;
