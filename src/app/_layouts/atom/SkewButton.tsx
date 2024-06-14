'use client';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@yamada-ui/fontawesome';
import { Button, Text, useBreakpoint } from '@yamada-ui/react';

interface SkewButtonProps {
	title: string;
	index: number;
	icon: IconDefinition;
}

export const SkewButton = ({ title, index, icon }: SkewButtonProps) => {
	const breakpoint = useBreakpoint();

	return (
		<>
			<Button
				h={['sm', 'md'].includes(breakpoint) ? '30px' : 'full'}
				minW="200px"
				p="0 50px"
				bg="subHeader.bg"
				borderRadius="0px"
				borderLeft={index === 0 ? 'solid 2px #999' : ''}
				borderRight="solid 2px #999"
				_hover={{ bg: 'subHeader.hoverBg' }}
				leftIcon={
					<Icon transform="skewX(-150deg)" icon={icon} color={'secondary'} />
				}
			>
				<Text
					transform="skewX(-150deg)"
					fontSize="md"
					color="subHeader.mainText"
					textAlign="left"
				>
					{title}
				</Text>
			</Button>
		</>
	);
};
