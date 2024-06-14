'use client';
import { DatePicker } from '@yamada-ui/calendar';
import {
	Box,
	Button,
	Center,
	Input,
	Radio,
	RadioGroup,
	Text,
	useBreakpoint,
} from '@yamada-ui/react';
import React from 'react';

export const SignUpForm = () => {
	const breakpoint = useBreakpoint();

	return (
		<>
			<Box
				w={breakpoint === 'sm' ? '100%' : breakpoint === 'md' ? '90%' : '70%'}
				m="40px"
			>
				<Text textAlign="center" fontSize="1.5rem" fontWeight="bold">
					SIGN UP
				</Text>

				<form action="">
					<Box m="20px 0">
						<Text>NAME</Text>
						<Box display="flex" justifyContent="space-between">
							<Input placeholder="苗字" w="49%" />
							<Input placeholder="名前" w="49%" />
						</Box>
					</Box>

					<Box m="20px 0">
						<Text>MAIL</Text>
						<Input placeholder="メールアドレス" />
					</Box>

					<Box m="20px 0 ">
						<Text>PASSWORD</Text>
						<Input type="password" placeholder="パスワード" />
						<Input mt="20px" type="password" placeholder="パスワード再入力" />
					</Box>

					<Box m="20px 0">
						<Text>BIRTHDAY</Text>
						<DatePicker placeholder="誕生日" defaultType="year" />
					</Box>

					<Box m="20px 0">
						<Text>GENDER</Text>
						<RadioGroup direction="row">
							<Radio value="男性">男性</Radio>
							<Radio value="女性">女性</Radio>
							<Radio value="その他">選択しない</Radio>
						</RadioGroup>
					</Box>

					<Center>
						<Button w="100%" m="20px auto" colorScheme="secondary">
							登録
						</Button>
					</Center>
				</form>
			</Box>
		</>
	);
};
