'use client';
import { Box, Card, Text } from '@yamada-ui/react';
import Link from 'next/link';
import React from 'react';
import { useHover } from '@yamada-ui/react';

type propsType = {
	key: number;
	id: number;
	screening_time: string;
	screen_number: string;
	reservation: boolean;
};

export const TheaterSchedule = (props: propsType) => {
	const { hovered, ref } = useHover();
	return (
		<>
			{props.reservation === true ? (
				<Link href="/bookings">
					<Card
						backgroundColor="#111"
						color="#fff"
						key={props.id}
						w="226px"
						h="204px"
						borderRadius="none"
						p="2px"
						ref={ref}
						_hover={{
							backgroundColor: '#08f',
							transition: 'background-color 0.3s ease',
						}}
					>
						<Box margin="auto">
							<Text fontSize="1.4rem">{props.screening_time}</Text>
							<Text>{props.screen_number}</Text>
							<Text>予約可能</Text>
						</Box>
					</Card>
				</Link>
			) : (
				<Card
					key={props.key}
					w="226px"
					h="204px"
					opacity="0.5"
					variant="none"
					borderRadius="none"
					p="2px"
				>
					<Box margin="auto">
						<Text fontSize="1.4rem">{props.screening_time}</Text>
						<Text>{props.screen_number}</Text>
						<Text>予約不可</Text>
					</Box>
				</Card>
			)}
		</>
	);
};
