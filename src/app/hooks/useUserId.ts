'use client';

import { useEffect, useState } from 'react';

type User = {
	user_id: number;
	first_name: string;
	last_name: string;
	schedule_id: number | null;
	e_mail: string;
	password: string;
	birthday: string;
	gender: string;
};

type Schedule = {
	schedule_id: number;
	screen_id: number;
	movie_id: number;
	seat_id: number[];
	movie_start: string;
	movie: Movie;
};

type Movie = {
	movie_id: number;
	movie_name: string;
	movie_image: string;
};

const fetchUserId = async (
	id: number
): Promise<{ user: User; schedules: Schedule[] | null } | null> => {
	try {
		const response = await fetch(`../server/route/user/${id}`);
		if (!response.ok) {
			throw new Error('Failed to fetch user data');
		}
		const user = await response.json();
		if (user.schedule_id) {
			const scheduleResponse = await fetch(
				`../server/route/schedule/${user.schedule_id}`
			);
			if (!scheduleResponse.ok) {
				throw new Error('Failed to fetch schedule data');
			}
			const schedule = await scheduleResponse.json();

			// movie_idからmovieデータを取得
			const movieResponse = await fetch(
				`../server/route/movie/${schedule.movie_id}`
			);
			if (!movieResponse.ok) {
				throw new Error('Failed to fetch movie data');
			}
			const movie = await movieResponse.json();

			// scheduleにmovieデータを追加
			schedule.movie = movie;

			return { user, schedules: [schedule] };
		} else {
			return { user, schedules: null };
		}
	} catch (error) {
		console.error('Error fetching user data', error);
		return null;
	}
};

const useUserId = () => {
	const [user, setUser] = useState<User | null>(null);
	const [schedules, setSchedule] = useState<Schedule[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const userId = 11;

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);
			const userData = await fetchUserId(userId);
			if (userData) {
				setUser(userData.user);
				setSchedule(userData.schedules);
			} else {
				setError('Failed to fetch user data');
			}
			setLoading(false);
		};

		if (userId) {
			fetchData();
		}
	}, [userId]);
	return { user, schedules, loading, error };
};

export default useUserId;
