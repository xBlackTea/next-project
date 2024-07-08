// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Box, useBreakpoint } from '@yamada-ui/react';

// import Title from './_components/Title';
// import Genre from './_components/Genre';
// import BreadcrumbList from './_components/BreadcrumbList';
// import { fetchMovie } from '../hooks/useMovie'; // フェッチ関数をインポート
// import { MovieCard } from './_components/MovieCard'; // コンポーネントのインポート
// import Placeholder from './_components/Placeholder'; // プレースホルダーコンポーネントのインポート
// import Link from 'next/link';

// interface Movie {
// 	movie_id: number;
// 	movie_image: string;
// 	movie_name: string;
// 	category_id: number;
// }

// const Page = () => {
// 	const [movies, setMovies] = useState<Movie[]>([]);
// 	const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
// 	const [loading, setLoading] = useState(true);
// 	const breakpoint = useBreakpoint();

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const moviesData = await fetchMovie();
// 			const formattedData: Movie[] = moviesData.map((movie: any) => ({
// 				movie_id: movie.movie_id,
// 				movie_image: movie.movie_image1,
// 				movie_name: movie.movie_name,
// 				category_id: movie.category_id,
// 			}));
// 			setMovies(formattedData);
// 			setFilteredMovies(formattedData);
// 			setLoading(false);
// 		};
// 		fetchData();
// 	}, []);

// 	const handleGenreChange = (selectedGenres: number[]) => {
// 		if (selectedGenres.length === 0 || selectedGenres.includes(0)) {
// 			setFilteredMovies(movies);
// 		} else {
// 			setFilteredMovies(
// 				movies.filter((movie) => selectedGenres.includes(movie.category_id))
// 			);
// 		}
// 	};

// 	return (
// 		<Box
// 			margin="0 auto"
// 			maxWidth="1500px"
// 			width="100%"
// 			height="auto"
// 			backgroundColor="#fff"
// 		>
// 			<BreadcrumbList />
// 			<Title />
// 			<Genre onGenreChange={handleGenreChange} />
// 			<Box
// 				display="flex"
// 				alignItems="start"
// 				flexWrap="wrap"
// 				gap="15px"
// 				marginTop="15px"
// 				marginBottom="15px"
// 			>
// 				{loading ? (
// 					<>
// 						<Placeholder width="490px" height="870px" />
// 						<Placeholder width="490px" height="870px" />
// 						<Placeholder width="490px" height="870px" />
// 						<Placeholder width="490px" height="870px" />
// 						<Placeholder width="490px" height="870px" />
// 						<Placeholder width="490px" height="870px" />
// 					</>
// 				) : (
// 					filteredMovies.map((movie: Movie) => (
// 						<Link key={movie.movie_id} href={`../movies/${movie.movie_id}`}>
// 							<Box display="block">
// 								<MovieCard
// 									key={movie.movie_id}
// 									movie_id={movie.movie_id}
// 									movie_image={movie.movie_image}
// 									movie_name={movie.movie_name}
// 								/>
// 							</Box>
// 						</Link>
// 					))
// 				)}
// 			</Box>
// 		</Box>
// 	);
// };

// export default Page;

// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Box, useBreakpoint } from '@yamada-ui/react';

// import Title from './_components/Title';
// import Genre from './_components/Genre';
// import BreadcrumbList from './_components/BreadcrumbList';
// import { fetchMovie } from '../hooks/useMovie'; // フェッチ関数をインポート
// import { MovieCard } from './_components/MovieCard'; // コンポーネントのインポート
// import Placeholder from './_components/Placeholder'; // プレースホルダーコンポーネントのインポート
// import Link from 'next/link';

// interface Movie {
//   movie_id: number;
//   movie_image: string;
//   movie_name: string;
//   category_id: number;
// }

// const Page = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
//   const [loading, setLoading] = useState(true);
//   const breakpoint = useBreakpoint();

//   useEffect(() => {
//     const fetchData = async () => {
//       const moviesData = await fetchMovie();
//       const formattedData: Movie[] = moviesData.map((movie: any) => ({
//         movie_id: movie.movie_id,
//         movie_image: movie.movie_image1,
//         movie_name: movie.movie_name,
//         category_id: movie.category_id,
//       }));
//       setMovies(formattedData);
//       setFilteredMovies(formattedData);
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const handleGenreChange = (selectedGenres: number[]) => {
//     if (selectedGenres.length === 0 || selectedGenres.includes(0)) {
//       setFilteredMovies(movies);
//     } else {
//       setFilteredMovies(
//         movies.filter((movie) => selectedGenres.includes(movie.category_id))
//       );
//     }
//   };

//   return (
//     <Box
//       margin="0 auto"
//       maxWidth="1500px"
//       width="100%"
//       height="auto"
//       backgroundColor="#fff"
//     >
//       <BreadcrumbList />
//       <Title />
//       <Genre onGenreChange={handleGenreChange} />
//       <Box
//         display="flex"
//         alignItems="start"
//         flexWrap="wrap"
//         gap="15px"
//         marginTop="15px"
//         marginBottom="15px"
//       >
//         {loading ? (
//           <>
//             <Placeholder width="490px" height="870px" />
//             <Placeholder width="490px" height="870px" />
//             <Placeholder width="490px" height="870px" />
//             <Placeholder width="490px" height="870px" />
//             <Placeholder width="490px" height="870px" />
//             <Placeholder width="490px" height="870px" />
//           </>
//         ) : (
//           filteredMovies.map((movie: Movie) => (
//             <Link key={movie.movie_id} href={`../movies/${movie.movie_id}`}>
//               <Box display="block">
//                 <MovieCard
//                   key={movie.movie_id}
//                   movie_id={movie.movie_id}
//                   movie_image={movie.movie_image}
//                   movie_name={movie.movie_name}
//                 />
//               </Box>
//             </Link>
//           ))
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Page;

// ========================================================

// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Box, useBreakpoint } from '@yamada-ui/react';

// import Title from './_components/Title';
// import Genre from './_components/Genre';
// import BreadcrumbList from './_components/BreadcrumbList';
// import { MovieCard } from './_components/MovieCard'; // MovieCardコンポーネントのインポート
// import Link from 'next/link';

// const Page = () => {
// 	const breakpoint = useBreakpoint();

// 	const getCardWidth = () => {
// 		switch (breakpoint) {
// 			case 'md':
// 			case 'sm':
// 				return '100%';
// 			default:
// 				return 'calc(33.3333% - 10px)'; // 15pxの間隔を調整
// 		}
// 	};

// 	return (
// 		<Box
// 			margin="0 auto"
// 			maxWidth="1500px"
// 			width="100%"
// 			height="auto"
// 			backgroundColor="#fff"
// 		>
// 			<BreadcrumbList />
// 			<Title />
// 			<Genre onGenreChange={() => {}} />
// 			<Box
// 				display="flex"
// 				alignItems="start"
// 				flexWrap="wrap"
// 				gap="15px"
// 				marginTop="15px"
// 				marginBottom="15px"
// 			>
// 				{[...Array(6)].map((_, index) => (
// 					<MovieCard key={index} />
// 				))}
// 			</Box>
// 		</Box>
// 	);
// };

// export default Page;

// ========================================================

'use client';
import React, { useEffect, useState } from 'react';
import { Box, useBreakpoint } from '@yamada-ui/react';

import Title from './_components/Title';
import Genre from './_components/Genre';
import BreadcrumbList from './_components/BreadcrumbList';
import { MovieCard } from './_components/MovieCard'; // MovieCardコンポーネントのインポート
import { fetchMovie } from '../hooks/useMovie'; // フェッチ関数をインポート
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

	const getCardWidth = () => {
		switch (breakpoint) {
			case 'md':
			case 'sm':
				return '100%';
			default:
				return 'calc(33.3333% - 10px)'; // 15pxの間隔を調整
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
				gap="15px"
				marginTop="15px"
				marginBottom="15px"
			>
				{loading ? (
					<>{/* プレースホルダー */}</>
				) : (
					filteredMovies.map((movie: Movie) => (
						<Link
							key={movie.movie_id}
							href={`../movies/${movie.movie_id}`}
							passHref
						>
							<Box display="block" width={getCardWidth()}>
								<MovieCard
									key={movie.movie_id}
									movie_id={movie.movie_id}
									movie_image={movie.movie_image}
									movie_name={movie.movie_name}
								/>
							</Box>
						</Link>
					))
				)}
			</Box>
		</Box>
	);
};

export default Page;
