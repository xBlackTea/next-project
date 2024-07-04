// 'use client';
// import React from 'react';
// import { Box, Card, CardBody, Flex, Image, Text } from '@yamada-ui/react';
// import { movieCard } from '@/mock/movie/mock';

// interface MovieInformationProps {
// 	movie: {
// 		movie_id: number;
// 		movie_name: string;
// 		movie_detail: string;
// 		movie_time: number;
// 		movie_image1: string;
// 		movie_image2: string;
// 	};
// }

// export const MovieInformation: React.FC<MovieInformationProps> = ({
// 	movie,
// }) => {
// 	const movieDetail = movieCard[0];
// 	console.log(decodeURIComponent(movie.movie_image2));

// 	return (
// 		<>
// 			<Box
// 				display={'flex'}
// 				alignItems={'center'}
// 				p={'20px 15px'}
// 				gap={'40px'}
// 				bg={'caption.bg'}
// 				color={'#fff'}
// 			>
// 				<Box fontSize={'1.2rem'} fontWeight={'bold'}>
// 					{movie.movie_name}
// 				</Box>
// 				<Box display={'flex'} gap="20px">
// 					<Text>上映時間:{movie.movie_time}</Text>
// 					<Text>監督:永岡智佳</Text>
// 					<Text>
// 						出演:【声の出演】高山みなみ／山崎和佳奈／小山力也／山口勝平 ほか
// 					</Text>
// 				</Box>
// 			</Box>
// 			<Box display={'flex'} gap={'10px'} bg={'caption.bg'} color={'#fff'}>
// 				<Image
// 					objectFit="cover"
// 					src={`/${movie.movie_image2}`}
// 					alt="movieImage"
// 					w="50%"
// 					aspectRatio="16/9"
// 					p={'0 0 10px 10px'}
// 				/>
// 				<Box h="200px" p={'0 10px 10px 0'}>
// 					<Text fontSize="1.2rem" fontWeight="bold">
// 						あらすじ
// 					</Text>
// 					<Text>{movie.movie_detail}</Text>
// 				</Box>
// 			</Box>
// 		</>
// 	);
// };

'use client';
import React from 'react';
import { Box, Image, Text, useBreakpointValue } from '@yamada-ui/react';
import { movieCard } from '@/mock/movie/mock';

type MovieInformationProps = {
	movie: {
		movie_id: number;
		movie_name: string;
		movie_detail: string;
		movie_time: number;
		movie_image1: string;
		movie_image2: string;
	};
};

export function MovieInformation({ movie }: MovieInformationProps) {
	const movieDetail = movieCard[0];

	console.log(decodeURIComponent(movie.movie_image2));

	const breakpoint = useBreakpointValue({ base: 'base', sm: 'sm', md: 'md' });
	const isSmallScreen = ['sm', 'md'].includes(breakpoint);

	return (
		<Box
			width="100%"
			marginTop="15px"
			bg="#111"
			color="#fff"
			borderRadius="2px"
			padding="10px"
		>
			<Box
				display="flex"
				flexDirection={isSmallScreen ? 'column' : 'row'}
				gap="10px"
			>
				<Box flex={isSmallScreen ? '1' : '4'} width="100%">
					<Image
						objectFit="cover"
						src={`/${movie.movie_image2}`}
						alt="movieImage"
						width="100%"
						aspectRatio="16/9"
					/>
				</Box>

				<Box flex={isSmallScreen ? '1' : '6'} padding="0 10px 10px 0">
					<Box width="100%" height="auto" paddingBottom="10px">
						<Text fontSize="1.2rem" fontWeight="bold">
							{movie.movie_name}
						</Text>
						<Text>上映時間: {movie.movie_time} 分</Text>
						<Text>
							監督: 永岡智佳
							出演:【声の出演】高山みなみ／山崎和佳奈／小山力也／山口勝平 ほか
						</Text>
					</Box>
					<Text fontSize="1.2rem" fontWeight="bold">
						あらすじ
					</Text>
					<Text>{movie.movie_detail}</Text>
				</Box>
			</Box>
		</Box>
	);
}
