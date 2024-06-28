//page.tsx
import { Box, Center } from '@yamada-ui/react';
import React from 'react';
import PaymentMethod from './_components/block/PaymentMethod';

const page = () => {
	return (
		<Box>
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
					<a href="">劇場案内</a>
					{' > '}
					<a href="">劇場詳細</a>
					{' > '}
					<a href="">作品詳細</a>
					{' > '}
					<a href="">決済情報入力</a>
				</p>
			</Center>

			<PaymentMethod />
		</Box>
	);
};

export default page;
