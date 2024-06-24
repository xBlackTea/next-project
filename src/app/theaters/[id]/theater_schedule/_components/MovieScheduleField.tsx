import { Box, Card, Image, Text } from '@yamada-ui/react';
import React from 'react';
import { scheduleData } from '@/mock/schedule/mock';
import { fetchScheduleInterface } from '@/mock/schedule/scheduleInterface';
import { TheaterSchedule } from './TheaterSchedule';
import Link from 'next/link';

type propsType = {
	key: number;
	id: number;
	title: string;
	image: string;
};

export const MovieScheduleField = (props: propsType) => {
	return (
		<>
			<Card
				key={props.id}
				w="80%"
				m="20px auto"
				variant="outline"
				borderRadius="none"
				bgColor="theaterSchedule.bg"
			>
				<Box display="flex" alignItems="center" w="100%" h="75px" pl="20px">
					<Text fontWeight="bold" fontSize="1.2rem">
						{props.title}
					</Text>
				</Box>

				<Box display="flex" justifyContent="space-between" p="0 0 20px 20px">
					<Image
						className="img"
						src={props.image}
						w="250px"
						mr="25px"
						aspectRatio="9\16"
						objectFit="cover"
						borderRadius="2px"
						alt={props.title}
					/>

					<Box display="flex" gap="12px" pl="20px" flexWrap="wrap" w="100%">
						{scheduleData.map((data: fetchScheduleInterface) => (
							// <Link href={""} key={data.id}>
							<TheaterSchedule
								key={data.id}
								id={data.id}
								screening_time={data.screening_time}
								screen_number={data.screen_number}
								reservation={data.reservation}
							/>
							// </Link>
						))}
					</Box>
				</Box>
			</Card>
		</>
	);
};
