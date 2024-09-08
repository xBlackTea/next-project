'use client';
import React, { useEffect } from 'react';
import { BigScreen } from './_components/BigScreen';
import { SmallScreen } from './_components/SmallScreen';
import { BreadcrumbList } from './_components/BreadCrumbList';
import { Box, Button, useTime } from '@yamada-ui/react';

import { BookingDetail } from './_components/BookingDetail';
import { BookingCaption } from './_components/BookingCaption';
import { useSeat } from '../hooks';
import { useSearchParams } from 'next/navigation';
import { MiddleScreen } from './_components/MiddleScreen';
import useMovieId from '../hooks/useMovieId';
import useTimeId from '../hooks/useTimeId';

const Page = () => {
	const { handleReservedSeatInfo, handleReserveSeat } = useSeat();

	const router = useSearchParams();
	const screen_id = router.get('screen_id');
	const movie_id = router.get('movie_id');
	const time_id = router.get('time_id');

	const screen_number = Number(screen_id);
	const movie_number = Number(movie_id);
	const time_number = Number(time_id);

	const { time, loading_time, error_time } = useTimeId(time_number);

	const { movie, loading, error } = useMovieId(movie_number);

	useEffect(() => {
		handleReservedSeatInfo(movie_number);
	}, []);

	const renderScreenComponent = () => {
		if (screen_number === 1) {
			return <BigScreen></BigScreen>;
		} else if (screen_number === 2) {
			return <BigScreen></BigScreen>;
		} else if (screen_number === 3) {
			return <BigScreen></BigScreen>;
		} else if (screen_number === 4) {
			return <MiddleScreen></MiddleScreen>;
		} else if (screen_number === 5) {
			return <MiddleScreen></MiddleScreen>;
		} else if (screen_number === 6) {
			return <SmallScreen></SmallScreen>;
		} else if (screen_number === 7) {
			return <SmallScreen></SmallScreen>;
		} else if (screen_number === 8) {
			return <SmallScreen></SmallScreen>;
		} else {
			return <div>該当するスクリーンが見つかりません</div>;
		}
	};

	if (!movie) {
		return <p>loading</p>;
	}

	if (!time) {
		return <p>loading</p>;
	}

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
							<BookingDetail movie={movie} time={time} />
							<Box alignItems={'space-between'}>
								<Button w={'100%'} rounded={'none'}>
									キャンセル
								</Button>
							</Box>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'space-between'}
							w={'100%'}
						>
							{renderScreenComponent()}
							<Button
								w={'100%'}
								rounded={'none'}
								onClick={() =>
									handleReserveSeat(screen_number, movie_number, time_number)
								}
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
