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
				<Link href="#">
					<Card
						bg={hovered ? '#64dcf8' : '#62c0ff'}
						key={props.id}
						// w="25%"
						w="200px"
						h="170px"
						// variant="outline"
						borderRadius="none"
						// m="2px"
						p="2px"
						ref={ref}
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
					// w="25%"
					w="200px"
					h="170px"
					opacity="0.5"
					variant="none"
					borderRadius="none"
					// m="2px"
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
