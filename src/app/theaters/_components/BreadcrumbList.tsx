import React from 'react';
import Link from 'next/link';

const BreadcrumbList = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '30px',
				marginTop: '15px',
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
				<Link href="/" passHref>
					<span
						style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
					>
						トップページ
					</span>
				</Link>
				{' > '}
				<Link href="/theaters" passHref>
					<span
						style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
					>
						劇場案内
					</span>
				</Link>
			</p>
		</div>
	);
};

export default BreadcrumbList;
