import { AspectRatio } from '@yamada-ui/react';
import Image from 'next/image';
import React from 'react';

const Page = () => {
	return (
		<div
			style={{
				display: 'flex',
				margin: '0 auto',
				marginBottom: '15px',
				maxWidth: '1500px',
				width: '80%',
				height: 'auto',
				backgroundColor: '#fff',
			}}
		>
			<div>
				<div
					style={{
						width: '1000px',
						height: '30px',
						marginTop: '15px',
						marginLeft: '15px',
						borderRadius: '2px',
						backgroundColor: '#111',
					}}
				>
					<p
						style={{
							paddingLeft: '10px',
							fontSize: '16px',
							lineHeight: '1.8',
							color: '#fff',
						}}
					>
						トップページ {' > '} 劇場案内
					</p>
				</div>
				<div
					style={{
						width: '1000px',
						height: '60px',
						marginTop: '15px',
						marginLeft: '15px',
						borderRadius: '2px',
						backgroundColor: '#111',
					}}
				>
					<p
						style={{
							paddingLeft: '10px',
							fontSize: '30px',
							lineHeight: '1.8',
							color: '#fff',
						}}
					>
						劇場一覧
					</p>
				</div>
				<div
					style={{
						width: '1000px',
						height: '350px',
						marginTop: '15px',
						marginLeft: '15px',
						paddingTop: '10px',
						borderRadius: '2px',
						border: 'solid,1px,#ddd',
						backgroundColor: '#fff',
					}}
				>
					<div
						style={{
							width: '980px',
							height: '40px',
							marginLeft: '10px',
							borderRadius: '2px',
							backgroundColor: '#08f',
						}}
					>
						<p
							style={{
								paddingLeft: '10px',
								fontSize: '30px',
								lineHeight: '1.2',
								color: '#fff',
							}}
						>
							HAL 東京
						</p>
					</div>
					<div style={{ display: 'flex' }}>
						<div
							style={{
								width: '280px',
								height: '280px',
								marginTop: '10px',
								marginLeft: '10px',
								borderRadius: '2px',
								backgroundColor: '#999',
							}}
						>
							<Image
								src="/hal_tokyo.jpg"
								alt="HAL Nagoya"
								width={280}
								height={280}
								style={{ borderRadius: '2px' }}
							/>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<div
								style={{
									width: '690px',
									height: '56px',
									marginTop: '10px',
									marginLeft: '10px',
									borderRadius: '2px',
									border: 'solid,1px,#ddd',
									backgroundColor: '#fff',
									fontSize: '8px',
									padding: '1% 2% 8% 2%',
								}}
							>
								住所: 東京都新宿区西新宿１丁目７−３ 総合校舎コクーンタワー1階
								東京モード学園 電話番号: 03-3344-1010
								<br />
								メールアドレス
								<br />
								スクリーン数: 8<br />
								特徴 料金形態
								<br />
							</div>
							<div
								style={{
									width: '690px',
									height: '215px',
									marginLeft: '10px',
									borderRadius: '2px',
									border: 'solid,1px,#ddd',
									backgroundColor: '#fff',
								}}
							>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1664617.7279646508!2d136.9715623765585!3d35.424914290048086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d9090c03e2f%3A0x3de1c61ba2a4ac68!2zSEFM5p2x5Lqs!5e0!3m2!1sja!2sjp!4v1719230827810!5m2!1sja!2sjp"
									width="690px"
									height="215px"
									loading="lazy"
								></iframe>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						width: '1000px',
						height: '350px',
						marginTop: '15px',
						marginLeft: '15px',
						paddingTop: '10px',
						borderRadius: '2px',
						border: 'solid,1px,#ddd',
						backgroundColor: '#fff',
					}}
				>
					<div
						style={{
							width: '980px',
							height: '40px',
							marginLeft: '10px',
							borderRadius: '2px',
							backgroundColor: '#08f',
						}}
					>
						<p
							style={{
								paddingLeft: '10px',
								fontSize: '30px',
								lineHeight: '1.2',
								color: '#fff',
							}}
						>
							HAL 名古屋
						</p>
					</div>
					<div style={{ display: 'flex' }}>
						<div
							style={{
								width: '280px',
								height: '280px',
								marginTop: '10px',
								marginLeft: '10px',
								borderRadius: '2px',
								backgroundColor: '#999',
							}}
						>
							<Image
								src="/hal_nagoya.jpg"
								alt="HAL Nagoya"
								width={280}
								height={280}
								style={{ borderRadius: '2px' }}
							/>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<div
								style={{
									width: '690px',
									height: '56px',
									marginTop: '10px',
									marginLeft: '10px',
									borderRadius: '2px',
									border: 'solid,1px,#ddd',
									backgroundColor: '#fff',
									fontSize: '8px',
									padding: '1% 2% 8% 2%',
								}}
							>
								住所: 愛知県名古屋市中村区名駅４丁目２７−１
								総合校舎スパイラルタワーズ 電話番号: 052-551-1001
								<br />
								メールアドレス
								<br />
								スクリーン数: 8<br />
								特徴 料金形態
								<br />
							</div>
							<div
								style={{
									width: '690px',
									height: '215px',
									marginLeft: '10px',
									borderRadius: '2px',
									border: 'solid,1px,#ddd',
									backgroundColor: '#fff',
									fontSize: '9px',
								}}
							>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669907.8431759314!2d134.57849699375!3d35.1681223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600376de618547db%3A0x76435e49b7e59323!2zSEFM5ZCN5Y-k5bGL!5e0!3m2!1sja!2sjp!4v1719231874954!5m2!1sja!2sjp"
									width="690"
									height="215"
								></iframe>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						width: '1000px',
						height: '350px',
						marginTop: '15px',
						marginLeft: '15px',
						paddingTop: '10px',
						borderRadius: '2px',
						border: 'solid,1px,#ddd',
						backgroundColor: '#fff',
					}}
				>
					<div
						style={{
							width: '980px',
							height: '40px',
							marginLeft: '10px',
							borderRadius: '2px',
							backgroundColor: '#08f',
						}}
					>
						<p
							style={{
								paddingLeft: '10px',
								fontSize: '30px',
								lineHeight: '1.2',
								color: '#fff',
							}}
						>
							HAL 大阪
						</p>
					</div>
					<div style={{ display: 'flex' }}>
						<div
							style={{
								width: '280px',
								height: '280px',
								marginTop: '10px',
								marginLeft: '10px',
								borderRadius: '2px',
								backgroundColor: '#999',
							}}
						>
							<Image
								src="/hal_osaka.jpg"
								alt="HAL Nagoya"
								width={280}
								height={280}
								style={{ borderRadius: '2px' }}
							/>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<div
								style={{
									width: '690px',
									height: '56px',
									marginTop: '10px',
									marginLeft: '10px',
									borderRadius: '2px',
									border: 'solid,1px,#ddd',
									backgroundColor: '#fff',
									fontSize: '8px',
									padding: '1% 2% 8% 2%',
								}}
							>
								住所: 大阪府大阪市北区梅田３丁目３−１ 電話番号: 06-6347-0001
								<br />
								メールアドレス
								<br />
								スクリーン数: 8<br />
								特徴 料金形態
								<br />
							</div>
							<div
								style={{
									width: '690px',
									height: '215px',
									marginLeft: '10px',
									borderRadius: '2px',
									border: 'solid,1px,#ddd',
									backgroundColor: '#fff',
								}}
							>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.2113910366197!2d135.4904713740779!3d34.69984778326134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e728ba376c79%3A0x3880b1f8cc20187e!2zSEFM5aSn6Ziq!5e0!3m2!1sja!2sjp!4v1719232216600!5m2!1sja!2sjp"
									width="690"
									height="215"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
