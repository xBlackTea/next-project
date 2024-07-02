'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Box, Flex, Text } from '@yamada-ui/react';
import { fetchCategory } from '../../hooks/useCategory';

interface Category {
	category_id: number;
	category_name: string;
}

const Genre = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const fetchCategoryData = async () => {
			const categoryData: Category[] = await fetchCategory();
			const formattedCategory = categoryData.map((category: Category) => ({
				category_id: category.category_id,
				category_name: category.category_name,
			}));
			setCategories(formattedCategory);
		};
		fetchCategoryData();
	}, []);

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef.current) {
			const { scrollLeft, clientWidth } = scrollContainerRef.current;
			const scrollAmount =
				direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
			scrollContainerRef.current.scrollTo({
				left: scrollLeft + scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	return (
		<Box
			width="100%"
			marginTop="15px"
			paddingX="10px"
			position="relative"
			maxWidth="1500px"
			marginX="auto"
		>
			<Box
				as="button"
				position="absolute"
				left="0px"
				top="50%"
				transform="translateY(-50%)"
				zIndex="1"
				onClick={() => scroll('left')}
				backgroundColor="#111"
				color="#fff"
				borderRadius="5px"
				padding="10px"
				height="40px"
				width="40px"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				{'<'}
			</Box>
			<Flex
				ref={scrollContainerRef}
				overflowX="hidden"
				overflowY="hidden" // 縦スクロールを無効にする
				whiteSpace="nowrap"
				borderRadius="5px"
				height="40px"
				alignItems="center"
				margin="0 40px" // 矢印ボタンのために余白を調整
			>
				{categories.map((category) => (
					<Box
						key={category.category_id}
						marginRight="10px"
						padding="0 10px"
						backgroundColor="#111"
						borderRadius="5px"
						color="#fff"
						textAlign="center"
						height="40px"
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<Text fontSize="16px">{category.category_name}</Text>
					</Box>
				))}
			</Flex>
			<Box
				as="button"
				position="absolute"
				right="0px" // 調整
				top="50%"
				transform="translateY(-50%)"
				zIndex="1"
				onClick={() => scroll('right')}
				backgroundColor="#111"
				color="#fff"
				borderRadius="5px"
				padding="10px"
				height="40px"
				width="40px"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				{'>'}
			</Box>
		</Box>
	);
};

export default Genre;
