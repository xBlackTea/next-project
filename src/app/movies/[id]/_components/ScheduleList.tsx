import { fetchScreen } from '@/app/hooks/useScreen';
import { Box, Card, Text, useBreakpoint } from '@yamada-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type scheduleType = {
	key: number;
	screening_time: string;
	screen_number: string;
	reservation: boolean;
};

interface Screen {
	screen_id: number;
}

export const ScheduleList = (props: scheduleType) => {
	const [screen, setScreen] = useState<Screen[]>([]);
	const breakpoint = useBreakpoint();

	useEffect(() => {
		const fetchData = async () => {
			const screen_data = await fetchScreen();

			const formattedScreen: Screen[] = screen_data.map((screen: any) => ({
				screen_id: screen.screen_id,
			}));
			setScreen(formattedScreen);
		};
		fetchData();
	}, []);
	console.log(screen);
	return (
		<>
			{props.reservation === true ? (
				screen.map((screen, index) => (
					<Link key={index} href={`../../../bookings`} passHref>
						<Card w="200px" m="5px" p="5px">
							<Text>{props.screening_time}</Text>
							<Text>Screen{screen.screen_id}</Text>
							<Text>指</Text>
							<Text>予約可能</Text>
						</Card>
					</Link>
				))
			) : (
				<Card w="200px" m="5px" p="5px" opacity="0.5">
					<Text>{props.screening_time}</Text>
					<Text>Screen{props.screen_number}</Text>
					<Text>指</Text>
					<Text>予約不可</Text>
				</Card>
			)}
		</>
	);
};
