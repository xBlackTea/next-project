import { Box, Center } from '@yamada-ui/react';
import React from 'react';
import Service from './_components/block/Service';

const page = () => {
	return (
		<Box>
			<Box
				style={{
					width: ' 1500px',
					height: '30px',
					margin: '10px auto 0 auto',
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
					<a href="">サービス案内</a>
				</p>
			</Box>

			<Service />
		</Box>
	);
};

export default page;
