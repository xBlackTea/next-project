import { Box, Text, Image } from '@yamada-ui/react';
import React from 'react';

export const BookingDetail = () => {
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
					<Text color={'#fff'}></Text>
				</Box>
				<Box
					h={'40px'}
					bg={'caption.bg'}
					mb={'10px'}
					p={'10px'}
					display={'flex'}
					alignItems={'center'}
				>
					<Text color={'#fff'}></Text>
				</Box>
				<Box display={'flex'} justifyContent={'center'}>
					<Image src="/" alt="movieImage" w="80%" pb={'10px'} />
				</Box>
			</Box>
		</>
	);
};
