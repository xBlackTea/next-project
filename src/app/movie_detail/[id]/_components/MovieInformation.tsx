import React from 'react';
import { Box, Card, CardBody, Flex, Image, Text } from '@yamada-ui/react';
import { movieCard } from '@/mock/movie/mock';

export const MovieInformation = () => {
	const movieDetail = movieCard[0];

	return (
		<>
			<Box
				display={'flex'}
				alignItems={'center'}
				p={'20px 15px'}
				gap={'40px'}
				bg={'caption.bg'}
				color={'#fff'}
			>
				<Box fontSize={'1.2rem'} fontWeight={'bold'}>
					{movieDetail.title}
				</Box>
				<Box display={'flex'} gap="20px">
					<Text>上映時間:107分</Text>
					<Text>監督:永岡智佳</Text>
					<Text>
						出演:【声の出演】高山みなみ／山崎和佳奈／小山力也／山口勝平 ほか
					</Text>
				</Box>
			</Box>
			<Box display={'flex'} gap={'10px'} bg={'caption.bg'} color={'#fff'}>
				<Image
					objectFit="cover"
					src={movieDetail.movie_wide_image}
					alt="movieImage"
					w="50%"
					aspectRatio="16/9"
					p={'0 0 10px 10px'}
				/>
				<Box h="200px" p={'0 10px 10px 0'}>
					<Text fontSize="1.2rem" fontWeight="bold">
						あらすじ
					</Text>
					<Text>{movieDetail.detail}</Text>
				</Box>
			</Box>
		</>
	);
};
