'use client';
import React, { useEffect } from 'react';
import { BigScreen } from './_components/BigScreen';
import { BreadcrumbList } from './_components/BreadCrumbList';
import { Box, Button } from '@yamada-ui/react';

import { BookingDetail } from './_components/BookingDetail';
import { BookingCaption } from './_components/BookingCaption';
import { useSeat } from '../hooks';
import { MiddleScreen } from './_components/MiddleScreen';

const Page = () => {
	const { handleReservedSeatInfo, handleReserveSeat } = useSeat();
	useEffect(() => {
		handleReservedSeatInfo(5);
	}, []);

	return (
		<>
			<Box maxW={'1500px'} m={'20px'}>
				<Box w={'80%'} m={'auto'}>
					<BreadcrumbList />
					<BookingCaption />

					<Box display={'flex'} gap={'10px'}>
						<Box
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'space-between'}
							w={'100%'}
						>
							<BookingDetail />
							<Box alignItems={'space-between'}>
								<Button w={'100%'} rounded={'none'}>
									キャンセル
								</Button>
							</Box>
						</Box>
						<Box>
							<BigScreen />
							{/* <MiddleScreen /> */}
							<Button
								w={'100%'}
								rounded={'none'}
								onClick={() => handleReserveSeat(1, 5, '7/5')}
							>
								選択した座席を予約する
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Page;
