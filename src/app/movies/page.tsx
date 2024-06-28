'use client';
import React, { useEffect, useState } from 'react';
import { Box, useBreakpoint } from '@yamada-ui/react';
import { fetchMovie } from '../hooks/useMovie'; // フェッチ関数をインポート
import { MovieCard } from './_components/block/MovieCard'; // コンポーネントのインポート
import { fetchCategory } from '../hooks/useCategory';

interface Movie {
	movie_id: number;
	movie_image: string;
	movie_name: string;
}

interface Category {
	category_id: number;
	category_name: string;
}

const Page = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [categorys, setCategorys] = useState<Category[]>([]);
	const breakpoint = useBreakpoint();

	useEffect(() => {
		const fetchData = async () => {
			const moviesData = await fetchMovie();
			// 必要に応じてデータを整形
			const formattedData: Movie[] = moviesData.map((movie: any) => ({
				id: movie.movie_id,
				movie_image: movie.movie_image1,
				movie_name: movie.movie_name,
			}));
			setMovies(formattedData);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchCategoryData = async () => {
			const categoryData = await fetchCategory();
			const formattedCategory: Category[] = categoryData.map(
				(category: any) => ({
					id: category.category_id,
					category_name: category.category_name,
				})
			);
			setCategorys(formattedCategory);
		};
		fetchCategoryData();
	}, []);

	return (
		<Box
			display="flex"
			margin="0 auto"
			w={breakpoint === 'sm' ? '100%' : breakpoint === 'md' ? '90%' : '80%'}
			maxWidth="1500px"
			height="auto"
			backgroundColor="#fff"
		>
			<div style={{ width: '20%', maxWidth: '300px', backgroundColor: '#111' }}>
				<div style={{ height: '15px', color: '#fff' }}></div>
				<div
					style={{
						height: '50px',
						backgroundColor: '#08f',
						textAlign: 'center',
						fontSize: '30px',
						lineHeight: '1.5',
						color: '#fff',
					}}
				>
					ジャンル
					{/* 他のジャンルを表示 */}
					<ul>
						{categorys.map((category) => (
							<li key={category.category_id}>{category.category_name}</li>
						))}
					</ul>
					{/* ... */}
				</div>
			</div>
			<div style={{ width: '80%', maxWidth: '1200px', marginBottom: '15px' }}>
				<div
					style={{
						width: 'calc(100% - 15px)',
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
						トップページ {' > '} 作品一覧
					</p>
				</div>
				<div
					style={{
						width: 'calc(100% - 15px)',
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
						作品一覧
					</p>
				</div>
				<Box display="flex" alignItems="start" flexWrap="wrap">
					{movies.map((movie: Movie) => (
						<MovieCard
							key={movie.movie_id}
							id={movie.movie_id}
							movie_image={movie.movie_image}
							movie_name={movie.movie_name}
						/>
					))}
				</Box>
			</div>
		</Box>
	);
};

export default Page;
