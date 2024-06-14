import { Center } from '@yamada-ui/react';
import React from 'react';
import { SignUpForm } from './_components/SignUpForm';

const page = () => {
	return (
		<>
			<Center w="95%" maxW="1500px" m="auto">
				<SignUpForm />
			</Center>
		</>
	);
};

export default page;
