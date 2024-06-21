'use client';
import { extendTheme, UsageTheme } from '@yamada-ui/react';
import styles from './styles';
import { semantics } from './semantics';

const customTheme: UsageTheme = {
	styles,
	semantics,
};

export default extendTheme(customTheme)();
