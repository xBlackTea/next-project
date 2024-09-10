'use client';
import React from 'react';
import { BreadcrumbList } from '../_components/BreadCrumbList';
import { TicketCaption } from './_components/TicketCaption';
import {
	Box,
	Button,
	Center,
	Input,
	Radio,
	RadioGroup,
	Text,
	useBreakpoint,
	Link,
} from '@yamada-ui/react';
import { TicketSelect } from './_components/TicketSelect';
import { BigScreen } from '../_components/BigScreen';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { totalPriceState } from '@/app/recoil/atoms/ticketAtoms';
import { getRandomInt } from '@/utils/randomInt';

const Page = () => {
	const router = useRouter();
	const totalPrice = useRecoilValue(totalPriceState);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			price_sum: totalPrice,
			ticket_id: getRandomInt(1, 9999),
		};
		console.log(data);
		try {
			const res = await fetch('/server/route/price', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			if (res.ok) {
				const json = await res.json();
				console.log(json);
				alert('購入が完了しました');
				router.push('/');
			} else {
				console.error('HTTP-Error: ' + res.status);
			}
		} catch (e) {
			console.error(e);
		}
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

								<Box w={'100%'}>
									<BigScreen />
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
