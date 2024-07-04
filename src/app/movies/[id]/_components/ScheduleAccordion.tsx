// import {
// 	Accordion,
// 	AccordionItem,
// 	Box,
// 	SegmentedControl,
// 	SegmentedControlItem,
// } from '@yamada-ui/react';
// import React from 'react';
// import { ScheduleList } from './ScheduleList';
// import { scheduleData } from '@/mock/schedule/mock';
// import { fetchScheduleInterface } from '@/mock/schedule/scheduleInterface';
// import { getNextWeekDates } from '@/utils/scheduleDate';

// export const ScheduleAccordion = () => {
// 	const style = {
// 		color: 'scheduleAccordion.text',
// 		bgColor: 'scheduleAccordion.bg',
// 		w: '100%',
// 	};

// 	const items: SegmentedControlItem[] = getNextWeekDates();

// 	return (
// 		<>
// 			<Box margin="40px 0">
// 				<SegmentedControl borderRadius="0" w="100%" items={items} />
// 				<Accordion
// 					sx={{
// 						...style,
// 					}}
// 					isToggle
// 				>
// 					<AccordionItem p="20px 0" label="東京">
// 						<Box display="flex">
// 							{scheduleData.map((data: fetchScheduleInterface) => (
// 								<ScheduleList
// 									key={data.id}
// 									screening_time={data.screening_time}
// 									screen_number={data.screen_number}
// 									reservation={data.reservation}
// 								/>
// 							))}
// 						</Box>
// 					</AccordionItem>

// 					<AccordionItem p="20px 0" label="名古屋">
// 						<Box display="flex">
// 							{scheduleData.map((data: fetchScheduleInterface) => (
// 								<ScheduleList
// 									key={data.id}
// 									screening_time={data.screening_time}
// 									screen_number={data.screen_number}
// 									reservation={data.reservation}
// 								/>
// 							))}
// 						</Box>
// 					</AccordionItem>

// 					<AccordionItem p="20px 0" label="大阪">
// 						<Box display="flex">
// 							{scheduleData.map((data: fetchScheduleInterface) => (
// 								<ScheduleList
// 									key={data.id}
// 									screening_time={data.screening_time}
// 									screen_number={data.screen_number}
// 									reservation={data.reservation}
// 								/>
// 							))}
// 						</Box>
// 					</AccordionItem>
// 				</Accordion>
// 			</Box>
// 		</>
// 	);
// };

import {
	Accordion,
	AccordionItem,
	Box,
	Grid,
	useBreakpointValue,
	SegmentedControl,
	SegmentedControlItem,
} from '@yamada-ui/react';
import React, { useState } from 'react';
import { ScheduleList } from './ScheduleList';
import { scheduleData } from '@/mock/schedule/mock';
import { fetchScheduleInterface } from '@/mock/schedule/scheduleInterface';
import { getNextWeekDates } from '@/utils/scheduleDate';

export const ScheduleAccordion = () => {
	const breakpoint = useBreakpointValue({ base: 'base', sm: 'sm', md: 'md' });
	const isSmallScreen = ['sm', 'md'].includes(breakpoint);

	const [selectedDate, setSelectedDate] = useState(0);

	const style = {
		color: 'scheduleAccordion.text',
		bgColor: '#111',
		w: '100%',
	};

	const dateItems: SegmentedControlItem[] = getNextWeekDates().map(
		(item, index) => ({
			label: item.label,
			value: index.toString(),
		})
	);

	return (
		<>
			<Box margin="15px 0">
				<SegmentedControl
					borderRadius="2px"
					w="100%"
					items={dateItems}
					value={selectedDate.toString()}
					onChange={(value) => setSelectedDate(Number(value))}
					flexWrap="nowrap"
					overflowX="auto"
					sx={{
						display: 'grid',
						gridTemplateColumns: isSmallScreen
							? 'repeat(2, 1fr)'
							: 'repeat(auto-fit, minmax(100px, 1fr))',
						gap: 2,
					}}
				/>
				<Accordion
					marginTop={'15px'}
					sx={{
						...style,
					}}
					isToggle
				>
					{['東京', '名古屋', '大阪'].map((city) => (
						<AccordionItem key={city} p="20px 0" label={city}>
							<Grid
								templateColumns={
									isSmallScreen
										? 'repeat(2, 1fr)'
										: 'repeat(auto-fill, minmax(200px, 1fr))'
								}
								gap={2}
								overflowX="hidden"
							>
								{scheduleData.map((data: fetchScheduleInterface) => (
									<ScheduleList
										key={data.id}
										screening_time={data.screening_time}
										screen_number={data.screen_number}
										reservation={data.reservation}
									/>
								))}
							</Grid>
						</AccordionItem>
					))}
				</Accordion>
			</Box>
		</>
	);
};
