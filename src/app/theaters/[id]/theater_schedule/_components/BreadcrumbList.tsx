import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from '@yamada-ui/react';
import React from 'react';

export const BreadcrumbList = () => {
	return (
		<>
			<Box
				w="80%"
				p="5px"
				m="20px auto"
				color="#fff"
				bgColor="breadcrumbList.bg"
			>
				<Breadcrumb separator="-">
					<BreadcrumbItem>
						<BreadcrumbLink href="/">トップ</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">映画館一覧</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href="/">上映スケジュール</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</Box>
		</>
	);
};
