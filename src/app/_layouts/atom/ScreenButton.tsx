import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@yamada-ui/fontawesome';
import { Button, useColorMode } from '@yamada-ui/react';

export const ScreenButton = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<>
			<Button
				color={['black', 'gray']}
				onClick={toggleColorMode}
				leftIcon={<Icon icon={faCircleHalfStroke} color={['black', 'white']} />}
			/>
		</>
	);
};
