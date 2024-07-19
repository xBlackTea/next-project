import React from 'react';
import {
	Card,
	CardFooter,
	CardHeader,
	Text,
	useColorMode,
	Box,
	Image,
} from '@yamada-ui/react';

type MovieCardProps = {
	key: number;
	movie_image: string;
	movie_name: string;
	movie_id: number;
};

export function MovieCard(props: MovieCardProps) {
	const { colorMode } = useColorMode();

	return (
		<Card
			width="100%"
			borderRadius="2px"
			sx={{
				'&:hover .img': {
					transition: colorMode === 'dark' ? 'filter 0.3s ease-in-out' : '',
					filter: colorMode === 'dark' ? 'brightness(100%)' : '',
				},
				'&:not(:hover) .img': {
					transition: colorMode === 'dark' ? 'filter 0.3s ease-in-out' : '',
					filter: colorMode === 'dark' ? 'brightness(70%)' : '',
				},
			}}
			overflow="hidden"
			cursor="pointer"
			variant="outline"
			color="movieCard.color"
			backgroundColor="#fff"
		>
			<CardHeader
				display="flex"
				justifyContent="center"
				margin="10px"
				padding="0px"
			>
				<Box width="100%" height="auto" overflow="hidden" borderRadius="2px">
					<Image
						className="img"
						src={props.movie_image}
						alt={props.movie_name}
						width="100%"
						height="auto"
						style={{ objectFit: 'cover' }}
					/>
				</Box>
			</CardHeader>
			<CardFooter
				display="flex"
				justifyContent="center"
				alignItems="center"
				backgroundColor="#111"
				color="#fff"
				height="40px"
				margin="0 10px 10px 10px"
				paddingBottom="5px"
				borderRadius="2px"
			>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="100%"
					width="100%"
				>
					<Text fontSize="sm" isTruncated textAlign="center" width="100%">
						{props.movie_name}
					</Text>
				</Box>
			</CardFooter>
		</Card>
	);
}
