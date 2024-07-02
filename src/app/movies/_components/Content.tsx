// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Box, Link } from '@yamada-ui/react';
// import { fetchMovie } from '../../hooks/useMovie';
// import { MovieCard } from '../_components/MovieCard';

// interface Movie {
//     movie_id: number;
//     movie_image: string;
//     movie_name: string;
// }

// const Content = () => {
//     const [movies, setMovies] = useState<Movie[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const moviesData: any[] = await fetchMovie();
//             const formattedData = moviesData.map((movie: any) => ({
//                 movie_id: movie.movie_id,
//                 movie_image: movie.movie_image1,
//                 movie_name: movie.movie_name,
//             }));
//             setMovies(formattedData);
//         };
//         fetchData();
//     }, []);

//     return (
//         <Box display="flex" flexWrap="wrap" justifyContent="flex-start" gap="15px" width="100%" maxW="1500px" marginTop="15px">
//             {movies.map((movie: Movie) => (
//                 <Link key={movie.movie_id} href={`../movies/${movie.movie_id}`} display="block">
//                     <MovieCard
//                         key={movie.movie_id}
//                         movie_id={movie.movie_id}
//                         movie_image={movie.movie_image}
//                         movie_name={movie.movie_name}
//                     />
//                 </Link>
//             ))}
//         </Box>
//     );
// };

// export default Content;

'use client';
import React, { useEffect, useState } from 'react';
import { Box, Link } from '@yamada-ui/react';
import { fetchMovie } from '../../hooks/useMovie';
import { MovieCard } from '../_components/MovieCard';

interface Movie {
	movie_id: number;
	movie_image: string;
	movie_name: string;
}

const Content = () => {
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const moviesData: any[] = await fetchMovie();
			const formattedData = moviesData.map((movie: any) => ({
				movie_id: movie.movie_id,
				movie_image: movie.movie_image1,
				movie_name: movie.movie_name,
			}));
			setMovies(formattedData);
		};
		fetchData();
	}, []);

	return (
		<Box
			display="flex"
			flexWrap="wrap"
			justifyContent="center"
			gap="15px"
			width="100%"
			maxW="1500px"
			marginTop="15px"
		>
			{movies.map((movie: Movie) => (
				<Link
					key={movie.movie_id}
					href={`../movies/${movie.movie_id}`}
					display="block"
				>
					<MovieCard
						key={movie.movie_id}
						movie_id={movie.movie_id}
						movie_image={movie.movie_image}
						movie_name={movie.movie_name}
					/>
				</Link>
			))}
		</Box>
	);
};

export default Content;
