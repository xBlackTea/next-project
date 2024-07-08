import { Box, Divider, Text } from '@yamada-ui/react';
import React from 'react';
import {
	leftFrontSeat,
	centerFrontSeat,
	rightFrontSeat,
	leftMiddleSeat,
	centerMiddleSeat,
	rightMiddleSeat,
	leftBackSeat,
	centerBackSeat,
	rightBackSeat,
} from './wideSeatList';
import { SeatButton } from './SeatButton';
import { SeatInfoProps } from '@/provider/Provider';

type SeatType = {
	id: number;
	x_axis: string;
	y_axis: number;
};

export const BigScreen = () => {
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
					<Text color={'#fff'}>座席選択</Text>
				</Box>
				<Box bg={'#15202b'} p={'15px 15px 15px 20px'} mb={'6px'} w={'50vw'}>
					<Text textAlign={'center'} color={'#fff'} fontSize={'1.4rem'}>
						Screen1
					</Text>
					<Box as="center">
						<Divider variant="solid" w={'80%'} m={'10px auto'} />
						<Text color={'#fff'}>▲スクリーン</Text>
					</Box>
					{/* 1列目 */}
					<Box
						display={'flex'}
						gap={'20px'}
						justifyContent={'center'}
						my={'20px'}
					>
						<Box display={'flex'} w={'150px'} gap={'5px'} flexWrap={'wrap'}>
							{leftFrontSeat.map((data: SeatType) => (
								<SeatButton
									key={data.id}
									x_axis={data.x_axis.toLowerCase() as keyof SeatInfoProps}
									y_axis={data.y_axis}
								/>
							))}
						</Box>
						<Box display={'flex'} w={'360px'} gap={'5px'} flexWrap={'wrap'}>
							{centerFrontSeat.map((data: SeatType) => (
								<SeatButton
									key={data.id}
									x_axis={data.x_axis.toLowerCase() as keyof SeatInfoProps}
									y_axis={data.y_axis}
								/>
							))}
						</Box>
						<Box display={'flex'} w={'150px'} gap={'5px'} flexWrap={'wrap'}>
							{rightFrontSeat.map((data: SeatType) => (
								<SeatButton
									key={data.id}
									x_axis={data.x_axis.toLowerCase() as keyof SeatInfoProps}
									y_axis={data.y_axis}
								/>
							))}
						</Box>
					</Box>
					{/* 2列目 */}
					<Box
						display={'flex'}
						gap={'20px'}
						justifyContent={'center'}
						my={'20px'}
					>
						<Box display={'flex'} w={'90px'} gap={'5px'} flexWrap={'wrap'}>
							{leftMiddleSeat.map((data: SeatType) => (
								<SeatButton
									key={data.id}
									x_axis={data.x_axis.toLowerCase() as keyof SeatInfoProps}
									y_axis={data.y_axis}
								/>
							))}
						</Box>
						<Box display={'flex'} w={'360px'} gap={'5px'} flexWrap={'wrap'}>
							{centerMiddleSeat.map((data: SeatType) => (
								<SeatButton
									key={data.id}
									x_axis={data.x_axis.toLowerCase() as keyof SeatInfoProps}
									y_axis={data.y_axis}
								/>
							))}
						</Box>
						<Box display={'flex'} w={'90px'} gap={'5px'} flexWrap={'wrap'}>
							{rightMiddleSeat.map((data: SeatType) => (
								<SeatButton
									key={data.id}
									x_axis={data.x_axis.toLowerCase() as keyof SeatInfoProps}
									y_axis={data.y_axis}
								/>
							))}
						</Box>
					</Box>
					{/* 3列目 */}
					<Box
						display={'flex'}
						gap={'20px'}
						justifyContent={'center'}
						my={'20px'}
					>
						<Box display={'flex'} w={'150px'} gap={'5px'} flexWrap={'wrap'}>
							{leftBackSeat.map((data: SeatType) => (
								<SeatButton
									key={data.id}
									x_axis={data.x_axis.toLowerCase() as keyof SeatInfoProps}
									y_axis={data.y_axis}
								/>
							))}
						</Box>
						<Box display={'flex'} w={'360px'} gap={'5px'} flexWrap={'wrap'}>
							{centerBackSeat.map((data: SeatType) => (
								<SeatButton
									key={data.id}
									x_axis={data.x_axis.toLowerCase() as keyof SeatInfoProps}
									y_axis={data.y_axis}
								/>
							))}
						</Box>
						<Box display={'flex'} w={'150px'} gap={'5px'} flexWrap={'wrap'}>
							{rightBackSeat.map((data: SeatType) => (
								<SeatButton
									key={data.id}
									x_axis={data.x_axis.toLowerCase() as keyof SeatInfoProps}
									y_axis={data.y_axis}
								/>
							))}
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};
