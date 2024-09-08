import { Box, Text, Image } from '@yamada-ui/react';
import React from 'react';

type MovieInformationProps = {
	movie: {
		movie_id: number;
		movie_name: string;
		movie_detail: string;
		movie_time: number;
		movie_image1: string;
		movie_image2: string;
		movie_cast: string;
		movie_director: string;
	};
	time: {
		time_id: number;
		movie_start: string;
	};
};

export const BookingDetail = ({ movie, time }: MovieInformationProps) => {
	return (
		<>
			<Box w={'100%'}>
				<Box
					h={'40px'}
					bg={'caption.bg'}
					mb={'10px'}
					p={'10px'}
					display={'flex'}
					alignItems={'center'}
				>
					<Text color={'#fff'}>上映情報</Text>
				</Box>
				<Box
					h={'40px'}
					bg={'caption.bg'}
					mb={'10px'}
					p={'10px'}
					display={'flex'}
					alignItems={'center'}
				>
					<Text color={'#fff'}>HAL名古屋</Text>
				</Box>
				<Box
					h={'40px'}
					bg={'caption.bg'}
					mb={'10px'}
					p={'10px'}
					display={'flex'}
					alignItems={'center'}
				>
					<Text color={'#fff'}>{movie.movie_name}</Text>
				</Box>
				<Box
					h={'40px'}
					bg={'caption.bg'}
					mb={'10px'}
					p={'10px'}
					display={'flex'}
					alignItems={'center'}
				>
					<Text color={'#fff'}>{time.movie_start}</Text>
				</Box>
				<Box display={'flex'} justifyContent={'center'}>
					<Image
						src={`/${movie.movie_image1}`}
						alt="movieImage"
						w="80%"
						pb={'10px'}
					/>
				</Box>
			</Box>
		</>
	);
};
