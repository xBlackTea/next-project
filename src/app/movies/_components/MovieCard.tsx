// import React from 'react';
// import {
// 	Card,
// 	CardFooter,
// 	CardHeader,
// 	Image,
// 	Text,
// 	useBreakpoint,
// 	useColorMode,
// 	Box,
// } from '@yamada-ui/react';

// type issueMovieProps = {
// 	key: number;
// 	movie_image: string;
// 	movie_name: string;
// 	movie_id: number;
// };

// export function MovieCard(props: issueMovieProps) {
// 	const breakpoint = useBreakpoint();
// 	const { colorMode } = useColorMode();

// 	let cardWidth;
// 	let fontSize;

// 	switch (breakpoint) {
// 		case 'md':
// 			cardWidth = '100%';
// 			fontSize = 'md';
// 			break;
// 		case 'sm':
// 			cardWidth = '100%';
// 			fontSize = 'sm';
// 			break;
// 		default:
// 			cardWidth = '490px';
// 			fontSize = 'sm';
// 	}

// 	return (
// 		<Card
// 			w={cardWidth}
// 			borderRadius="2px"
// 			sx={{
// 				'&:hover .img': {
// 					transition: colorMode === 'dark' ? 'filter 0.3s ease-in-out' : '',
// 					filter: colorMode === 'dark' ? 'brightness(100%)' : '',
// 				},
// 				'&:not(:hover) .img': {
// 					transition: colorMode === 'dark' ? 'filter 0.3s ease-in-out' : '',
// 					filter: colorMode === 'dark' ? 'brightness(70%)' : '',
// 				},
// 			}}
// 			overflow="hidden"
// 			cursor="pointer"
// 			variant="outline"
// 			color="movieCard.color"
// 			backgroundColor="movieCard.bg"
// 		>
// 			<CardHeader
// 				display="flex"
// 				justifyContent="center"
// 				margin="10px"
// 				padding="0px"
// 			>
// 				<Image
// 					className="img"
// 					src={props.movie_image}
// 					width="100%"
// 					height="auto"
// 					style={{ objectFit: 'cover', borderRadius: '2px' }}
// 					alt={props.movie_name}
// 				/>
// 			</CardHeader>
// 			<CardFooter
// 				display="flex"
// 				justifyContent="center"
// 				alignItems="center"
// 				backgroundColor="#111"
// 				color="#fff"
// 				height="40px"
// 				margin="0 10px 10px 10px"
// 				paddingBottom="5px"
// 				borderRadius="2px"
// 			>
// 				<Box
// 					display="flex"
// 					justifyContent="center"
// 					alignItems="center"
// 					height="100%"
// 					width="100%"
// 				>
// 					<Text fontSize={fontSize} isTruncated textAlign="center" width="100%">
// 						{props.movie_name}
// 					</Text>
// 				</Box>
// 			</CardFooter>
// 		</Card>
// 	);
// }

// ========================================================

// import React from 'react';
// import {
// 	Card,
// 	CardFooter,
// 	CardHeader,
// 	Text,
// 	useBreakpoint,
// 	useColorMode,
// 	Box,
// 	AspectRatio,
// } from '@yamada-ui/react';

// type issueMovieProps = {
// 	key: number;
// 	movie_image?: string;
// 	movie_name?: string;
// 	movie_id?: number;
// };

// export function MovieCard(props: issueMovieProps) {
// 	const breakpoint = useBreakpoint();
// 	const { colorMode } = useColorMode();

// 	let cardWidth;
// 	let fontSize;

// 	switch (breakpoint) {
// 		case 'md':
// 			cardWidth = '100%';
// 			fontSize = 'md';
// 			break;
// 		case 'sm':
// 			cardWidth = '100%';
// 			fontSize = 'sm';
// 			break;
// 		default:
// 			cardWidth = 'calc(33.3333% - 10px)';
// 			fontSize = 'sm';
// 	}

// 	return (
// 		<Card
// 			w={cardWidth}
// 			borderRadius="2px"
// 			sx={{
// 				'&:hover .img': {
// 					transition: colorMode === 'dark' ? 'filter 0.3s ease-in-out' : '',
// 					filter: colorMode === 'dark' ? 'brightness(100%)' : '',
// 				},
// 				'&:not(:hover) .img': {
// 					transition: colorMode === 'dark' ? 'filter 0.3s ease-in-out' : '',
// 					filter: colorMode === 'dark' ? 'brightness(70%)' : '',
// 				},
// 			}}
// 			overflow="hidden"
// 			cursor="pointer"
// 			variant="outline"
// 			color="movieCard.color"
// 			backgroundColor="#fff"
// 		>
// 			<CardHeader
// 				display="flex"
// 				justifyContent="center"
// 				margin="10px"
// 				padding="0px"
// 			>
// 				<AspectRatio ratio={5 / 7} width="100%">
// 					<Box
// 						className="img"
// 						backgroundColor="#ddd"
// 						borderRadius="2px"
// 					/>
// 				</AspectRatio>
// 			</CardHeader>
// 			<CardFooter
// 				display="flex"
// 				justifyContent="center"
// 				alignItems="center"
// 				backgroundColor="#111"
// 				color="#fff"
// 				height="40px"
// 				margin="0 10px 10px 10px"
// 				paddingBottom="5px"
// 				borderRadius="2px"
// 			>
// 				<Box
// 					display="flex"
// 					justifyContent="center"
// 					alignItems="center"
// 					height="100%"
// 					width="100%"
// 				>
// 					<Text fontSize={fontSize} isTruncated textAlign="center" width="100%">
// 						{props.movie_name || 'Placeholder'}
// 					</Text>
// 				</Box>
// 			</CardFooter>
// 		</Card>
// 	);
// }

// ========================================================

import React from 'react';
import {
	Card,
	CardFooter,
	CardHeader,
	Text,
	useBreakpoint,
	useColorMode,
	Box,
	AspectRatio,
	Image,
} from '@yamada-ui/react';

type issueMovieProps = {
	key: number;
	movie_image?: string;
	movie_name?: string;
	movie_id?: number;
};

export function MovieCard(props: issueMovieProps) {
	const breakpoint = useBreakpoint();
	const { colorMode } = useColorMode();

	let cardWidth;
	let fontSize;

	switch (breakpoint) {
		case 'md':
			cardWidth = '100%';
			fontSize = 'md';
			break;
		case 'sm':
			cardWidth = '100%';
			fontSize = 'sm';
			break;
		default:
			cardWidth = 'calc(33.3333% - 10px)';
			fontSize = 'sm';
	}

	return (
		<Card
			w={cardWidth}
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
				<AspectRatio ratio={5 / 7} width="100%">
					<Image
						className="img"
						src={props.movie_image}
						alt={props.movie_name}
						width="100%"
						height="auto"
						borderRadius="2px"
					/>
				</AspectRatio>
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
					<Text fontSize={fontSize} isTruncated textAlign="center" width="100%">
						{props.movie_name || 'Placeholder'}
					</Text>
				</Box>
			</CardFooter>
		</Card>
	);
}
