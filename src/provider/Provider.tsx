'use client';
import { ReactNode, createContext, useState } from 'react';

interface ProviderContextType {
	isDrawerOpen: boolean;
	setIsDrawerOpen: (isOpen: boolean) => void;
	seatInfo: SeatInfoProps;
	setSeatInfo: React.Dispatch<React.SetStateAction<SeatInfoProps>>;
	reservedSeatInfo: SeatInfoProps;
	setReservedSeatInfo: React.Dispatch<React.SetStateAction<SeatInfoProps>>;
}

// 初期値設定の例
const initialSeatInfo: SeatInfoProps = {
	a: new Array(22).fill(false),
	b: new Array(22).fill(false),
	c: new Array(22).fill(false),
	d: new Array(18).fill(false),
	e: new Array(18).fill(false),
	f: new Array(18).fill(false),
	g: new Array(18).fill(false),
	h: new Array(18).fill(false),
	i: new Array(22).fill(false),
	j: new Array(22).fill(false),
};

export interface SeatInfoProps {
	a: boolean[];
	b: boolean[];
	c: boolean[];
	d: boolean[];
	e: boolean[];
	f: boolean[];
	g: boolean[];
	h: boolean[];
	i: boolean[];
	j: boolean[];
}

const initialReservedSeatInfo: SeatInfoProps = {
	a: new Array(22).fill(false),
	b: new Array(22).fill(false),
	c: new Array(22).fill(false),
	d: new Array(18).fill(false),
	e: new Array(18).fill(false),
	f: new Array(18).fill(false),
	g: new Array(18).fill(false),
	h: new Array(18).fill(false),
	i: new Array(22).fill(false),
	j: new Array(22).fill(false),
};

interface ContextProviderProps {
	children: ReactNode;
}

export const Context = createContext<ProviderContextType | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
	const [seatInfo, setSeatInfo] = useState<SeatInfoProps>(initialSeatInfo);
	const [reservedSeatInfo, setReservedSeatInfo] = useState<SeatInfoProps>(
		initialReservedSeatInfo
	);

	const contextValue = {
		isDrawerOpen,
		setIsDrawerOpen,
		seatInfo,
		setSeatInfo,
		reservedSeatInfo,
		setReservedSeatInfo,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
