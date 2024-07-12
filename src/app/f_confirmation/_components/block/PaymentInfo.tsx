import { Box, Text } from '@yamada-ui/react';
import React from 'react';

const PaymentInfo = () => {
	//仮データ
	const name = '山田 太郎';
	const paymentMethod = 'クレジットカード';
	const reservedSeats = 'D5, D6';
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
			maxW="900px"
			w="900px"
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
				boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '100%',
					},
				}}
			>
				<Text>決済情報</Text>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '100%',
					},
				}}
			>
				<Text>名前 : </Text>
				<Box>{name}</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '100%',
					},
				}}
			>
				<Text>決済方法 : </Text>
				<Box>{paymentMethod}</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '100%',
					},
				}}
			>
				<Text>予約座席 : </Text>
				<Box>{reservedSeats}</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '100%',
					},
				}}
			>
				<Text>一般 : </Text>
				<Box>1800円　{ticketTypes.general.count}枚</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '100%',
					},
				}}
			>
				<Text>大学生 : </Text>
				<Box>1600円　{ticketTypes.university.count}枚</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '100%',
					},
				}}
			>
				<Text>高校生・中学生 : </Text>
				<Box>1400円　{ticketTypes.highSchool.count}枚</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '100%',
					},
				}}
			>
				<Text>小学生・幼児 : </Text>
				<Box>1200円　{ticketTypes.elementary.count}枚</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				p="10px 20px"
				fontSize="1.2rem"
				mb="4px"
				borderRadius="3px"
				boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
				sx={{
					'@media screen and (max-width: 1000px)': {
						w: '100%',
					},
				}}
			>
				<Text>合計金額・合計枚数 : </Text>
				<Box>
					{totalAmount}円 / {totalTickets}枚
				</Box>
			</Box>
		</Box>
	);
};

export default PaymentInfo;
