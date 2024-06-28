//PaymentMethod.tsx
//途中・・・
'use client';

import { Box, Button, Input, Option, Select, Text } from '@yamada-ui/react';
import React, { useState } from 'react';

const PaymentMethod = () => {
	const [selectedPaymentMethod, setSelectedPaymentMethod] =
		useState<string>('');

	const handlePaymentMethodChange = (value: string) => {
		setSelectedPaymentMethod(value);
	};

	const handleNextClick = () => {
		console.log('次へ進む');
	};

	const handleCancelClick = () => {
		console.log('キャンセル');
	};

	return (
		<Box>
			<Box
				w="100%"
				maxW="1500px"
				m="30px auto"
				bgColor="#111"
				lineHeight="1.5"
				color="#fff"
				p="10px"
			>
				<Text ml="1vw" fontSize="2rem">
					決済情報入力
				</Text>
			</Box>

			<Box display="flex" m="0 auto" maxW="1500px">
				<Box w="600px">
					<Box p="10px 0" bgColor="#ddd">
						<Text m="0 5px" fontSize="1.5rem" fontWeight="bold">
							券種選択
						</Text>
					</Box>
					<Box
						display="flex"
						justifyContent="space-between"
						m="10px 0"
						p="10px 0"
						bgColor="#ddd"
						mb="10px"
					>
						<Text m="0 5px" fontSize="1.3rem">
							決済金額
						</Text>
						<Text m="0 5px" fontSize="1.2rem" fontWeight="bold">
							9000円
						</Text>
					</Box>
					<Button
						display="block"
						m="20px auto"
						variant="link"
						colorScheme="blue"
						textAlign="center"
						fontSize="1.4rem"
					>
						チケットを選びなおす
					</Button>
				</Box>

				<Box w="900px">
					<Box m="0 0 0 20px" p="10px 0" bgColor="#ddd">
						<Text m="0 10px" fontSize="1.5rem" fontWeight="bold">
							情報入力
						</Text>
					</Box>

					<Box m="0px 40px">
						<form>
							<Box m="10px 0">
								<Text fontSize="1rem" mb="5px">
									お名前
								</Text>
								<Input name="name" placeholder="お名前" w="100%" />
							</Box>

							<Box m="10px 0">
								<Text fontSize="1rem" mb="5px">
									MAIL
								</Text>
								<Input name="e_mail" placeholder="メールアドレス" />
							</Box>

							<Box m="10px 0">
								<Text fontSize="1rem" mb="5px">
									電話番号
								</Text>
								<Input name="phone_num" type="text" placeholder="電話番号" />
							</Box>

							<Box m="10px 0">
								<Text fontSize="1rem" mb="5px">
									決済方法
								</Text>
								<Select
									name="payment_method"
									onChange={handlePaymentMethodChange}
									placeholder="決済方法を選択"
								>
									<Option value="クレジットカード">クレジットカード</Option>
									<Option value="現金">現金</Option>
								</Select>
							</Box>

							{selectedPaymentMethod === 'クレジットカード' && (
								<Box
									w="800px"
									m="10px auto 30px auto"
									mt="10px"
									p="10px"
									boxShadow="0 0 1px #000"
									border="1px solid #ccc"
								>
									<Text fontSize="1.2rem" fontWeight="bold" mb="10px">
										クレジットカード情報を入力してください
									</Text>
									<Box m="10px 0">
										<Text fontSize="1rem" mb="5px">
											カード番号
										</Text>
										<Input name="card_number" placeholder="カード番号" />
									</Box>
									<Box m="10px 0">
										<Text fontSize="1rem" mb="5px">
											有効期限
										</Text>
										<Input name="expiration_date" placeholder="MM/YY" />
									</Box>
									<Box m="10px 0">
										<Text fontSize="1rem" mb="5px">
											セキュリティコード
										</Text>
										<Input
											name="security_code"
											type="password"
											placeholder="セキュリティコード"
										/>
									</Box>
								</Box>
							)}
						</form>
					</Box>
				</Box>
			</Box>
			<Box display="flex" maxW="1500px" m="20px auto 50px auto">
				<Box w="600px">
					<Button
						w="100%"
						p="30px 0"
						colorScheme="gray"
						onClick={handleCancelClick}
					>
						キャンセル
					</Button>
				</Box>
				<Box w="900px">
					<Button
						w="100%"
						p="30px 0"
						m="0 0 0 20px"
						colorScheme="blue"
						onClick={handleNextClick}
					>
						次へ進む
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default PaymentMethod;
