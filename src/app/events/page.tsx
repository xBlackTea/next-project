//page.tsx
import { Box, Center } from '@yamada-ui/react';
import React from 'react';
import PickUp from './_components/block/PickUp';
import Limited from './_components/block/Limited';
import Permanent from './_components/block/Permanent';

const page = () => {
	return (
		<Box>
			<Center
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
					<a href="">イベント</a>案内
				</p>
			</Center>

			<PickUp />
			<Limited />
			<Permanent />
		</Box>
	);
};

export default page;
