'use client';
import { useSeat } from '@/app/hooks/useSeat';
import { SeatInfoProps } from '@/provider/Provider';
import { Box } from '@yamada-ui/react';
import React from 'react';

interface Props {
	key: number;
	x_axis: keyof SeatInfoProps;
	y_axis: number;
}

export const SeatButton = (props: Props) => {
	const { seatInfo, toggleSeat } = useSeat();

	const isSelected = seatInfo[props.x_axis][props.y_axis - 1]; // y_axis は1始まりのため、-1します

	return (
		<Box
			as="button"
			w={'25px'}
			h={'35px'}
			bg={isSelected ? '#aff' : '#ddd'}
			rounded={'5px'}
			onClick={() => toggleSeat(props.x_axis, props.y_axis - 1)} // y_axis は1始まりのため、-1します
		></Box>
	);
};
