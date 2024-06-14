'use client';
import { ThemeConfig, extendConfig } from '@yamada-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'light',
};

export const customConfig = extendConfig(config);
