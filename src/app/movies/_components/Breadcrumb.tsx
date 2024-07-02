import React from 'react';
import { Box } from '@yamada-ui/react';

const Breadcrumb = () => {
	return (
		<Box width="100%" marginTop="15px">
			<div
				style={{
					height: '30px',
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
					トップページ {' > '} 作品一覧
				</p>
			</div>
		</Box>
	);
};

export default Breadcrumb;
