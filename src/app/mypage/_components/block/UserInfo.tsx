import React from 'react';
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

const UserInfo = () => {
	return (
		<Box bgColor="#fff" color="#000" py="20px">
			<Box
				w="80%"
				m="0 auto"
				bgColor="#111"
				lineHeight="1.5"
				color="#fff"
				p="10px"
			>
				<Text ml="1vw" fontSize="2rem">
					ユーザー情報
				</Text>
			</Box>

			<Box display="flex" flexWrap="wrap" w="80%" m="20px auto" gap="10px">
				<Box
					display="flex"
					w="calc(50% - 10px)"
					bgColor="#f3f3f3"
					boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
					overflow="hidden"
				>
					<Box display="flex" flexDirection="column" p="10px" w="100%">
						<Box>
							<Text>性</Text>
							<Box display="flex">
								<text>春</text>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					display="flex"
					w="calc(50% - 10px)"
					bgColor="#f3f3f3"
					boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
					overflow="hidden"
				>
					<Box display="flex" flexDirection="column" p="10px" w="100%">
						<Box>
							<Text>名</Text>
							<Box display="flex" w="100%">
								太郎
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box display="flex" flexWrap="wrap" w="80%" m="20px auto" gap="10px">
				<Box
					display="flex"
					w="calc(50% - 10px)"
					bgColor="#f3f3f3"
					boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
					overflow="hidden"
				>
					<Box display="flex" flexDirection="column" p="10px" w="100%">
						<Box display="flex">
							<Box>
								<Text>誕生日</Text>
								<Box display="flex">
									<text>2003/4/1</text>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					display="flex"
					w="calc(50% - 10px)"
					bgColor="#f3f3f3"
					boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
					overflow="hidden"
				>
					<Box display="flex" flexDirection="column" p="10px" w="100%">
						<Box display="flex">
							<Box>
								<Text>性別</Text>
								<Box display="flex">
									<text>男性</text>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>

			<form>
				<Box
					w="80%"
					m="0 auto"
					bgColor="#111"
					lineHeight="1.5"
					color="#fff"
					p="10px"
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Text ml="1vw" fontSize="2rem">
						ログイン設定
					</Text>
					<Text
						as="button"
						color="blue"
						_hover={{ color: 'darkblue' }}
						// onClick={() => {
						// 	// Handle edit action here
						// }}
					>
						変更
					</Text>
				</Box>

				<Box display="flex" flexWrap="wrap" w="80%" m="20px auto" gap="10px">
					<Box
						display="flex"
						w="calc(50% - 10px)"
						bgColor="#f3f3f3"
						boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
						overflow="hidden"
					>
						<Box display="flex" flexDirection="column" p="10px" w="100%">
							<Box>
								<Text>E-MAIL</Text>
								<Box display="flex" bgColor="#fff">
									<Input name="e-mail" placeholder="email" w="100%" />
								</Box>
							</Box>
						</Box>
					</Box>
					<Box
						display="flex"
						w="calc(50% - 10px)"
						bgColor="#f3f3f3"
						boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
						overflow="hidden"
					>
						<Box display="flex" flexDirection="column" p="10px" w="100%">
							<Box>
								<Text>パスワード</Text>
								<Box display="flex" bgColor="#fff">
									<Input name="password" placeholder="パスワード" w="100%" />
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</form>
		</Box>
	);
};

export default UserInfo;
