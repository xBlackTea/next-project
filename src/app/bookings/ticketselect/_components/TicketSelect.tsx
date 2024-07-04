'use client';
import { useTicket } from '@/app/hooks/useTicket';
import { Box, Text } from '@yamada-ui/react';
import React from 'react';

export const TicketSelect = () => {
	const {
		normal,
		middleStudent,
		kids,
		collegeStudent,
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
				<Box
					h={'40px'}
					bg={'caption.bg'}
					mb={'10px'}
					p={'10px'}
					display={'flex'}
					alignItems={'center'}
				>
					<Text color={'#fff'}>チケット選択</Text>
				</Box>
				<Box
					h={'40px'}
					bg={'caption.bg'}
					mb={'10px'}
					p={'10px'}
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Text color={'#fff'}>一般</Text>
					<Box display={'flex'} gap={'10px'} alignItems={'center'}>
						<Text color={'#fff'}>1800円</Text>
						<Text color={'#fff'}>{normal}枚</Text>
						<button style={buttonStyle} onClick={normalTicketPlus}>
							+
						</button>
						<button style={buttonStyle} onClick={normalTicketMinus}>
							-
						</button>
					</Box>
				</Box>
				<Box
					h={'40px'}
					bg={'caption.bg'}
					mb={'10px'}
					p={'10px'}
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Text color={'#fff'}>大学生</Text>
					<Box display={'flex'} gap={'10px'} alignItems={'center'}>
						<Text color={'#fff'}>1600円</Text>
						<Text color={'#fff'}>{collegeStudent}枚</Text>
						<button style={buttonStyle} onClick={collegeStudentTicketPlus}>
							+
						</button>
						<button style={buttonStyle} onClick={collegeStudentTicketMinus}>
							-
						</button>
					</Box>
				</Box>
				<Box
					h={'40px'}
					bg={'caption.bg'}
					mb={'10px'}
					p={'10px'}
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Text color={'#fff'}>中学生・高校生</Text>
					<Box display={'flex'} gap={'10px'} alignItems={'center'}>
						<Text color={'#fff'}>1400円</Text>
						<Text color={'#fff'}>{middleStudent}枚</Text>
						<button style={buttonStyle} onClick={middleStudentTicketPlus}>
							+
						</button>
						<button style={buttonStyle} onClick={middleStudentTicketMinus}>
							-
						</button>
					</Box>
				</Box>
				<Box
					h={'40px'}
					bg={'caption.bg'}
					mb={'10px'}
					p={'10px'}
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Text color={'#fff'}>小学生・園児</Text>
					<Box display={'flex'} gap={'10px'} alignItems={'center'}>
						<Text color={'#fff'}>1200円</Text>
						<Text color={'#fff'}>{kids}枚</Text>
						<button style={buttonStyle} onClick={kidsTicketPlus}>
							+
						</button>
						<button style={buttonStyle} onClick={kidsTicketMinus}>
							-
						</button>
					</Box>
				</Box>
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
