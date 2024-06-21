import {
	Accordion,
	AccordionItem,
	Box,
	SegmentedControl,
	SegmentedControlItem,
} from '@yamada-ui/react';
import React from 'react';
import { ScheduleList } from './ScheduleList';
import { scheduleData } from '@/mock/schedule/mock';
import { fetchScheduleInterface } from '@/mock/schedule/scheduleInterface';
import { getNextWeekDates } from '@/utils/scheduleDate';

export const ScheduleAccordion = () => {
	const style = {
		color: 'scheduleAccordion.text',
		bgColor: 'scheduleAccordion.bg',
		w: '100%',
	};

	const items: SegmentedControlItem[] = getNextWeekDates();

	return (
		<>
			<Box margin="40px 0">
				<SegmentedControl borderRadius="0" w="100%" items={items} />
				<Accordion
					sx={{
						...style,
					}}
					isToggle
				>
					<AccordionItem p="20px 0" label="東京">
						<Box display="flex">
							{scheduleData.map((data: fetchScheduleInterface) => (
								<ScheduleList
									key={data.id}
									screening_time={data.screening_time}
									screen_number={data.screen_number}
									reservation={data.reservation}
								/>
							))}
						</Box>
					</AccordionItem>

					<AccordionItem p="20px 0" label="名古屋">
						<Box display="flex">
							{scheduleData.map((data: fetchScheduleInterface) => (
								<ScheduleList
									key={data.id}
									screening_time={data.screening_time}
									screen_number={data.screen_number}
									reservation={data.reservation}
								/>
							))}
						</Box>
					</AccordionItem>

					<AccordionItem p="20px 0" label="大阪">
						<Box display="flex">
							{scheduleData.map((data: fetchScheduleInterface) => (
								<ScheduleList
									key={data.id}
									screening_time={data.screening_time}
									screen_number={data.screen_number}
									reservation={data.reservation}
								/>
							))}
						</Box>
					</AccordionItem>
				</Accordion>
			</Box>
		</>
	);
};
