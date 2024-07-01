import React from 'react';
import { BigScreen } from './_components/BigScreen';
import { BreadcrumbList } from './_components/BreadCrumbList';
import { Box, Button } from '@yamada-ui/react';

import { BookingDetail } from './_components/BookingDetail';
import { BookingCaption } from './_components/BookingCaption';

const page = () => {
	return (
		<>
			<Box maxW={'1500px'} m={'20px'}>
				<Box w={'80%'} m={'auto'}>
					<BreadcrumbList />
					<BookingCaption />

					<Box display={'flex'} gap={'10px'}>
						<Box>
							<BookingDetail />
							<Button w={'100%'} rounded={'none'}>
								キャンセル
							</Button>
						</Box>
						<Box>
							<BigScreen />
							<Button w={'100%'} rounded={'none'}>
								次へ進む
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default page;
