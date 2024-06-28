'use client';

import { Context, SeatInfoProps } from '@/provider/Provider';
import { useContext } from 'react';

export const useMusic = () => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { seatInfo, setSeatInfo } = context;

	const toggleSeat = (row: keyof SeatInfoProps, index: number) => {
		setSeatInfo((prevSeatInfo) => {
			const updatedRow = [...prevSeatInfo[row]];
			updatedRow[index] = !updatedRow[index];
			return { ...prevSeatInfo, [row]: updatedRow };
		});
	};

	return {
		seatInfo,
		setSeatInfo,
		toggleSeat,
	};
};
