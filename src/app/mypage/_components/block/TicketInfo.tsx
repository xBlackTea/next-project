'use client';

import {
	Box,
	Button,
	Center,
	Input,
	Radio,
	RadioGroup,
	Text,
	useBreakpoint,
	Image,
	Accordion,
	AccordionItem
} from '@yamada-ui/react';


import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';


interface Movie {
	movie_id: number;
	movie_image: string;
	movie_name: string;
}


export const TicketInfo = () => {
	const router = useRouter();
	const breakpoint = useBreakpoint();

	return (
		<Box bgColor="#fff" color="#000" py="20px">
			<Box
					w="80%"
					m="0 auto"
					bgColor="#111"
					lineHeight="1.5"
					color="#fff"
					p="10px"
				>
			
				<Text ml="1vw" fontSize="2rem">
					予約情報
				</Text>
				
			</Box>
			<Center>
				<Accordion defaultIndex={[1, 2]} isMultiple w="80%">
					<AccordionItem label="名探偵コナン">
					<Box display="flex" flexWrap="wrap" w="80%" m="20px auto" gap="10px">
				<Box
					display="flex"
					w="calc(50% - 10px)"
					bgColor="#f3f3f3"
					boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
					overflow="hidden"
				>
					<Box display="flex" flexDirection="column" p="10px" w="100%">
					
							<Box>
								<Text>劇場情報</Text>
								<Box display="flex">
									<Text>スクリーン3</Text>
								</Box>
							</Box>
						
					</Box>
				</Box>
				<Box
					display="flex"
					w="calc(50% - 10px)"
					bgColor="#f3f3f3"
					boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
					overflow="hidden"
				>
					<Box display="flex" flexDirection="column" p="10px" w="100%">
						
							<Box>
								<Text>作品情報</Text>
								<Box display="flex" w="100%">
								<Text>名探偵コナン</Text>
								</Box>
							</Box>
						
					</Box>
				</Box>
			</Box>

			<Box display="flex" flexWrap="wrap" w="80%" m="20px auto" gap="10px">
				<Box
					display="flex"
					w="calc(50% - 10px)"
					bgColor="#f3f3f3"
					boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
					overflow="hidden"
				>
					<Box display="flex" flexDirection="column" p="10px" w="100%">
						<Box display="flex">
							<Box>
								<Text>座席情報</Text>
								<Box display="flex">
								<Text>A5</Text>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					display="flex"
					w="calc(50% - 10px)"
					bgColor="#f3f3f3"
					boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
					overflow="hidden"
				>
					<Box display="flex" flexDirection="column" p="10px" w="100%">
						<Box display="flex">
							<Box>
								<Text>上映日時</Text>
								<Box display="flex">
									<Text>2024/7/14/14:00~</Text>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				</Box>
					</AccordionItem>

				</Accordion>
			</Center>
		</Box>
	);
};
