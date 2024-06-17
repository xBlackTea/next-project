'use client';
import { Context } from '@/provider/Provider';
import { useContext } from 'react';

export const useDrawer = () => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Contextが提供されていません');
	}
	const { isDrawerOpen, setIsDrawerOpen } = context;

	const handleDrawerValue = (value: boolean) => {
		setIsDrawerOpen(value);
	};

	return {
		isDrawerOpen,
		setIsDrawerOpen,
		handleDrawerValue,
	};
};
