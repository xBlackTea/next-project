import { Box, Center } from '@yamada-ui/react';
import React from 'react';
import UserInfo from  './_components/block/UserInfo';
import {TicketInfo} from './_components/block/TicketInfo';

const page = () => {
	return (
		<Box m="0 auto">
			<Center
				style={{
					width: ' 100%',
					height: '30px',
					margin: '0 auto',
					borderRadius: '2px',
					backgroundColor: '#111',
				}}
			>
				<p
					style={{
						paddingLeft: '10px',
						fontSize: '16px',
						lineHeight: '1.8',
						color: '#fff',
					}}
				>
					<a href="../">トップページ</a>
					{' > '}
					<a href="shop">売店案内</a>
				</p>
			</Center>

			<UserInfo />

			<TicketInfo />
		</Box>
	);
};

export default page;
