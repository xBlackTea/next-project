import React from 'react';
import { Box } from '@yamada-ui/react';

const Title = () => {
	return (
		<Box width="100%" marginTop="15px">
			<div
				style={{
					height: '60px',
					borderRadius: '2px',
					backgroundColor: '#111',
				}}
			>
				<p
					style={{
						paddingLeft: '10px',
						fontSize: '30px',
						lineHeight: '1.8',
						color: '#fff',
					}}
				>
					作品一覧
				</p>
			</div>
		</Box>
	);
};

export default Title;
