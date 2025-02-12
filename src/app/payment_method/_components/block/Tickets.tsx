import { Box, Button, Link, Text } from '@yamada-ui/react';
import React from 'react';

const Ticket = () => {
	//仮データ
	const ticketTypes = {
		general: { type: '一般', count: 2 },
		university: { type: '大学生', count: 1 },
		highSchool: { type: '高校生・中学生', count: 0 },
		elementary: { type: '小学生・幼児', count: 0 },
	};
	const totalTickets = Object.values(ticketTypes).reduce(
		(total, ticket) => total + ticket.count,
		0
	);
	const totalAmount = totalTickets * 1500;
	return (
		<Box
			maxW="600px"
			w="600px"
			bg="#fff"
			p="10px"
			sx={{
				'@media screen and (max-width: 1000px)': {
					maxW: '100%',
					w: '100%',
				},
			}}
		>
			<Box
				p="10px 20px"
				fontSize="1.5rem"
				mb="4px"
				color="#fff"
				bgColor="#333"
				boxShadow="md"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '100%',
					},
				}}
			>
				<Text>選択チケット</Text>
			</Box>

			<Box
				display="flex"
				justifyContent="space-between"
				m="30px 10px 10px 10px"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 2px 3px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '95%',
					},
				}}
			>
				<Text>一般 : </Text>
				<Box>1800円/{ticketTypes.general.count}枚</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				m="10px"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 2px 3px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '95%',
					},
				}}
			>
				<Text>大学生 : </Text>
				<Box>1600円/{ticketTypes.university.count}枚</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				m="10px"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 2px 3px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '95%',
					},
				}}
			>
				<Text>高校生・中学生 : </Text>
				<Box>1400円/{ticketTypes.highSchool.count}枚</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				m="10px"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 2px 3px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '95%',
					},
				}}
			>
				<Text>小学生・幼児 : </Text>
				<Box>1200円/{ticketTypes.elementary.count}枚</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				m="10px"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 2px 3px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '95%',
					},
				}}
			>
				<Text>合計金額・合計枚数 : </Text>
				<Box>
					{totalAmount}円 / {totalTickets}枚
				</Box>
			</Box>

			<Box
				maxW="600px"
				m="20px 0 0 0"
				p="10px"
				sx={{
					'@media screen and (max-width: 1000px)': {
						display: 'none',
					},
				}}
			>
				<Link href="/">
					<Button w="100%" h="60px" p="20px 0" colorScheme="gray">
						チケットを選びなおす
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default Ticket;
