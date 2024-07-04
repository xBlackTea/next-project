import React from 'react';
import { BreadcrumbList } from '../_components/BreadCrumbList';
import { TicketCaption } from './_components/TicketCaption';
import { Box, Button } from '@yamada-ui/react';
import { TicketSelect } from './_components/TicketSelect';
import { BigScreen } from '../_components/BigScreen';

const page = () => {
	return (
		<div>
			<>
				<Box maxW={'1500px'} m={'20px'}>
					<Box w={'80%'} m={'auto'}>
						<BreadcrumbList />
						<TicketCaption />

						<Box display={'flex'} justifyContent={'space-between'} gap={'10px'}>
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
								<Button w={'100%'} rounded={'none'}>
									次へ進む
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</>
		</div>
	);
};

export default page;
