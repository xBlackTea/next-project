'use client';

import { Box, GridItem, SimpleGrid, Text } from '@yamada-ui/react';
import React, { useState } from 'react';
import { titles, details } from '../atom/data';

const Service = () => {
	const [showText, setShowText] = useState(Array(4).fill(false));

	const handleTitleClick = (index: number) => {
		const newShowText = [...showText];
		newShowText[index] = !newShowText[index];
		setShowText(newShowText);
	};

	return (
		<Box m="10px auto 50px auto">
			<Box
				w="1500px"
				m="20px auto"
				bgColor="#111"
				lineHeight="1.5"
				color="#fff"
				p="10px"
			>
				<Text ml="1vw" fontSize="2rem">
					サービス
				</Text>
			</Box>

			<SimpleGrid
				maxW="1450px"
				m="0 auto"
				columns={{ base: 2, md: 1 }}
				gap="md"
			>
				{titles.map((title, index) => (
					<GridItem key={index} w="full" rounded="md">
						<Box position="relative">
							<Box
								as="div"
								w="full"
								h="4xs"
								bgColor="#fff"
								rounded="md"
								overflow="hidden"
								boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
								_hover={{ filter: 'brightness(0.8)' }}
							>
								<Text
									onClick={() => handleTitleClick(index)}
									cursor="pointer"
									w="full"
									h="full"
									display="flex"
									alignItems="center"
									justifyContent="center"
									textAlign="center"
									fontSize="xl"
									color="#111"
									position="relative"
									top="0"
									left="0"
								>
									{title}
								</Text>
							</Box>
							{showText[index] && (
								<Box
									position="relative"
									w="full"
									bgColor="rgba(0, 0, 0, 0.5)"
									color="#fff"
									p="10px"
								>
									<Text>{details[index]}</Text>
								</Box>
							)}
						</Box>
					</GridItem>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Service;
