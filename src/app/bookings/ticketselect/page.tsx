'use client';
import React from 'react';
import { BreadcrumbList } from '../_components/BreadCrumbList';
import { TicketCaption } from './_components/TicketCaption';
import { Box, Button } from '@yamada-ui/react';
import { TicketSelect } from './_components/TicketSelect';
import { BigSelectSeat } from './_components/BigSelectSeat';
import { useRouter, useSearchParams } from 'next/navigation';
import { SmallSelectSeat } from './_components/SmallSelectSeat';
import { MiddleSelectSeat } from './_components/MiddleSelectSeat';
import { useSeat } from '@/app/hooks';

const Page = () => {
	const { handleReserveSeat } = useSeat();
	const router = useSearchParams();
	const screen_id = router.get('screen_id');
	const movie_id = router.get('movie_id');
	const time_id = router.get('time_id');

	const screen_number = Number(screen_id);
	const movie_number = Number(movie_id);
	const time_number = Number(time_id);

	const renderScreenComponent = () => {
		if (screen_number === 1) {
			return <BigSelectSeat></BigSelectSeat>;
		} else if (screen_number === 2) {
			return <BigSelectSeat></BigSelectSeat>;
		} else if (screen_number === 3) {
			return <BigSelectSeat></BigSelectSeat>;
		} else if (screen_number === 4) {
			return <MiddleSelectSeat></MiddleSelectSeat>;
		} else if (screen_number === 5) {
			return <MiddleSelectSeat></MiddleSelectSeat>;
		} else if (screen_number === 6) {
			return <SmallSelectSeat></SmallSelectSeat>;
		} else if (screen_number === 7) {
			return <SmallSelectSeat></SmallSelectSeat>;
		} else if (screen_number === 8) {
			return <SmallSelectSeat></SmallSelectSeat>;
		} else {
			return <div>該当するスクリーンが見つかりません</div>;
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = {
			tortalPrice: formData.get('Price_sum'),
		};
		// try {
		// 	const res = await fetch('/server/route/user', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify(data),
		// 	});
		// 	if (res.ok) {
		// 		const json = await res.json();
		// 		console.log(json);
		// 		router.push('/');
		// 	} else {
		// 		console.error('HTTP-Error: ' + res.status);
		// 	}
		// } catch (e) {
		// 	console.error(e);
		// }
	};
	return (
		<div>
			<>
				<Box maxW={'1500px'} m={'20px'}>
					<form onSubmit={handleSubmit}>
						<Box w={'80%'} m={'auto'}>
							<BreadcrumbList />
							<TicketCaption />

							<Box
								display={'flex'}
								justifyContent={'space-between'}
								gap={'10px'}
							>
								<Box
									display={'flex'}
									flexDirection={'column'}
									justifyContent={'space-between'}
									w={'100%'}
								>
									<TicketSelect />
									<Box alignItems={'space-between'}>
										<Button w={'100%'} rounded={'none'}>
											キャンセル
										</Button>
									</Box>
								</Box>

								<Box
									w={'100%'}
									display={'flex'}
									flexDirection={'column'}
									justifyContent={'space-between'}
								>
									{renderScreenComponent()}
									<Button w={'100%'} rounded={'none'} type="submit">
										次へ進む
									</Button>
								</Box>
							</Box>
						</Box>
					</form>
				</Box>
			</>
		</div>
	);
};

export default Page;
