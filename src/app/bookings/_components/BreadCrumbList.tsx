import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Image,
} from '@yamada-ui/react';
import React from 'react';

export const BreadcrumbList = () => {
	return (
		<>
			<Box w="100%" p="5px" m="20px 0" color="#fff" bgColor="breadcrumbList.bg">
				<Breadcrumb separator="-">
					<BreadcrumbItem>
						<BreadcrumbLink href="/">トップ</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">映画一覧</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">映画詳細</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href="/">座席予約</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</Box>
		</>
	);
};
