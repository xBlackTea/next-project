'use client';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@yamada-ui/fontawesome';
import { Button, Text } from '@yamada-ui/react';
import Link from 'next/link';

interface SkewButtonProps {
	title: string;
	icon: IconDefinition;
	link: string;
}

export const SmallPanel = ({ title, icon, link }: SkewButtonProps) => {
	return (
		<>
			<Link
				href={link}
				style={{
					height: 'full',
					width: '50%',
					// padding: '0 50px',s
				}}
			>
				<Button
					h="full"
					w="100%"
					p="0 50px"
					bg="subHeader.bg"
					borderRadius="0px"
					border="solid 1px #999"
					_hover={{ bg: 'subHeader.hoverBg' }}
					leftIcon={<Icon icon={icon} color={'secondary'} />}
				>
					<Text fontSize="md" color="subHeader.mainText">
						{title}
					</Text>
				</Button>
			</Link>
		</>
	);
};
