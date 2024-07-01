import { Box, Card, Text } from '@yamada-ui/react';
import React from 'react';

type scheduleType = {
	key: number;
	screening_time: string;
	screen_number: string;
	reservation: boolean;
};

export const ScheduleList = (props: scheduleType) => {
	return (
		<>
			{props.reservation === true ? (
				<Card w="200px" m="5px" p="5px">
					<Text>{props.screening_time}</Text>
					<Text>{props.screen_number}</Text>
					<Text>指</Text>
					<Text>予約可能</Text>
				</Card>
			) : (
				<Card w="200px" m="5px" p="5px" opacity="0.5">
					<Text>{props.screening_time}</Text>
					<Text>{props.screen_number}</Text>
					<Text>指</Text>
					<Text>予約不可</Text>
				</Card>
			)}
		</>
	);
};
