'use client';
import { useState, useMemo, useCallback } from 'react';

type TicketType = 'normal' | 'middleStudent' | 'kids' | 'collegeStudent';

type TicketOperations = {
	[K in TicketType as `${K}TicketPlus` | `${K}TicketMinus`]: () => void;
};

type UseTicketReturn = {
	normal: number;
	middleStudent: number;
	kids: number;
	collegeStudent: number;
	totalPrice: number;
} & TicketOperations;

export const useTicket = (): UseTicketReturn => {
	const [tickets, setTickets] = useState({
		normal: 0,
		middleStudent: 0,
		kids: 0,
		collegeStudent: 0,
	});

	const prices = useMemo(
		() => ({
			normal: 1800,
			collegeStudent: 1600,
			middleStudent: 1400,
			kids: 1200,
		}),
		[]
	);

	const totalPrice = useMemo(() => {
		return Object.entries(tickets).reduce((total, [type, count]) => {
			return total + prices[type as TicketType] * count;
		}, 0);
	}, [tickets, prices]);

	const updateTicket = useCallback((type: TicketType, increment: number) => {
		setTickets((prev) => ({
			...prev,
			[type]: Math.max(0, prev[type] + increment),
		}));
	}, []);

	const ticketOperations = useMemo(() => {
		const operations: Record<string, () => void> = {};
		(Object.keys(tickets) as TicketType[]).forEach((type) => {
			operations[`${type}TicketPlus`] = () => updateTicket(type, 1);
			operations[`${type}TicketMinus`] = () => updateTicket(type, -1);
		});
		return operations;
	}, [updateTicket, tickets]);

	return {
		...tickets,
		totalPrice,
		...ticketOperations,
	} as UseTicketReturn;
};
