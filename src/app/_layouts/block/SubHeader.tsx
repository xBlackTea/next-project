'use client';
import { Box, useBreakpoint } from '@yamada-ui/react';
import {
	faCamera,
	faCaretDown,
	faEnvelope,
	faPerson,
	faShop,
	faTheaterMasks,
} from '@fortawesome/free-solid-svg-icons';
import { LeftButton, RightButton, SkewButton, SmallPanel } from '../atom';
import { link } from 'fs';

export const SubHeader = () => {
	const breakpoint = useBreakpoint();

	const subHeaderList = [
		{ title: '作品案内', icon: faCamera, link: '../../movies' },
		{ title: '劇場案内', icon: faTheaterMasks, link: '../../theaters' },
		{ title: '売店案内', icon: faShop, link: '../../shops' },
		{ title: 'イベント案内', icon: faCaretDown, link: '../../events' },
		{ title: 'サービス案内', icon: faEnvelope, link: '../../services' },
		{ title: 'マイページ', icon: faPerson, link: '../../mypage' },
	];

	return (
		<>
			<Box
				w="full"
				h={['sm', 'md'].includes(breakpoint) ? 'fit-content' : '50px'}
			>
				{['sm', 'md'].includes(breakpoint) ? (
					<Box display="flex" flexWrap="wrap" w="full">
						{subHeaderList.map((_, index) => (
							<SmallPanel
								key={index}
								icon={_.icon}
								title={_.title}
								link={_.link}
							/>
						))}
					</Box>
				) : (
					<Box
						display="flex"
						h="full"
						p="0 100px"
						position="relative"
						bg="primary"
					>
						<LeftButton />
						<Box
							bg="subHeader.bg"
							h="full"
							display="flex"
							justifyContent="start"
							alignItems="center"
							overflowX="scroll"
							transform="skewX(150deg)"
							margin="0 auto"
							zIndex="100"
							sx={{
								'::-webkit-scrollbar': {
									display: 'none',
								},
							}}
						>
							{subHeaderList.map((_, index) => (
								<SkewButton
									key={index}
									title={_.title}
									index={index}
									icon={_.icon}
									link={_.link}
								/>
							))}
						</Box>
						<RightButton />
					</Box>
				)}
			</Box>
			<Box w="full" h="10px" bg="black" />
		</>
	);
};
