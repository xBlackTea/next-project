'use client';
import { useTicket } from '@/app/hooks/useTicket';
import { Box, Text, Button } from '@yamada-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import {
	normalTicketState,
	univTicketState,
	highSchoolTicketState,
	childTicketState,
} from '@/app/recoil/atoms/ticketAtoms';

export const TicketSelect = () => {
	const {
		normal,
		middleStudent,
		kids,
		collegeStudent,
		normalPrice,
		middleStudentPrice,
		kidsPrice,
		collegeStudentPrice,
		totalPrice,
		normalTicketPlus,
		normalTicketMinus,
		middleStudentTicketPlus,
		middleStudentTicketMinus,
		kidsTicketPlus,
		kidsTicketMinus,
		collegeStudentTicketPlus,
		collegeStudentTicketMinus,
	} = useTicket();

	// グローバルステート
	const setNormalTicket = useSetRecoilState(normalTicketState);
	const setUnivTicket = useSetRecoilState(univTicketState);
	const setHighSchoolTicket = useSetRecoilState(highSchoolTicketState);
	const setChildTicket = useSetRecoilState(childTicketState);
	setNormalTicket(normal);
	setUnivTicket(collegeStudent);
	setHighSchoolTicket(middleStudent);
	setChildTicket(kids);

	const buttonStyle: React.CSSProperties = {
		width: '20px',
		height: '20px',
		textAlign: 'center',
		fontSize: '0.9rem',
		fontWeight: 'bold',
		background: '#fff',
		borderRadius: '3px',
	};

	return (
		<>
			<Box w={'100%'}>
				{/* General display and ticket selection */}
				{[
					{
						label: '一般',
						count: normal,
						price: normalPrice,
						plus: normalTicketPlus,
						minus: normalTicketMinus,
					},
					{
						label: '大学生',
						count: collegeStudent,
						price: collegeStudentPrice,
						plus: collegeStudentTicketPlus,
						minus: collegeStudentTicketMinus,
					},
					{
						label: '中学生・高校生',
						count: middleStudent,
						price: middleStudentPrice,
						plus: middleStudentTicketPlus,
						minus: middleStudentTicketMinus,
					},
					{
						label: '小学生・園児',
						count: kids,
						price: kidsPrice,
						plus: kidsTicketPlus,
						minus: kidsTicketMinus,
					},
				].map(({ label, count, price, plus, minus }, index) => (
					<Box
						key={index}
						h={'40px'}
						bg={'caption.bg'}
						mb={'10px'}
						p={'10px'}
						display={'flex'}
						justifyContent={'space-between'}
						alignItems={'center'}
					>
						<Text color={'#fff'}>{label}</Text>
						<Box display={'flex'} gap={'10px'} alignItems={'center'}>
							<Text color={'#fff'}>{price}円</Text>
							<Text color={'#fff'}>{count}枚</Text>
							<Button style={buttonStyle} onClick={plus}>
								+
							</Button>
							<Button style={buttonStyle} onClick={minus}>
								-
							</Button>
						</Box>
					</Box>
				))}
				<Box
					h={'40px'}
					bg={'caption.bg'}
					mb={'10px'}
					p={'10px'}
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Text color={'#fff'}>合計金額</Text>
					<Box display={'flex'} gap={'10px'} alignItems={'center'}>
						<Text color={'#fff'}>{totalPrice}円</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};
