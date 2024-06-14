import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@yamada-ui/fontawesome';
import { Button, Link, useBreakpoint, useColorMode } from '@yamada-ui/react';

interface SectionHeaderButtonProps {
	link: string;
}

export const SectionHeaderButton = ({ link }: SectionHeaderButtonProps) => {
	const breakpoint = useBreakpoint();
	const { colorMode } = useColorMode();

	return (
		<>
			<Link
				href={link}
				h="full"
				w={['sm', 'md'].includes(breakpoint) ? '50%' : '30%'}
			>
				<Button
					h="full"
					w="full"
					borderRadius={0}
					color="topSectionHeader.title"
					bgColor={['blue.500', '#000']}
					border={colorMode === 'dark' ? 'solid 1px #fff' : ''}
					rightIcon={<Icon icon={faRightLong} />}
				>
					一覧を見る
				</Button>
			</Link>
		</>
	);
};
