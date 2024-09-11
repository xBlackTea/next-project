import { useState, useEffect } from 'react';

export type Schedule = {
	schedule_id: number;
	totalcapacity: number;
};

export type Screen = {
	screen_id: number;
	screen_capacity: number;
};

// Function to fetch schedule data based on movie_id
export const fetchMovieData = async (movie_id: number) => {
	try {
		const response = await fetch(`/server/route/schedule/movie/${movie_id}`);
		if (!response.ok) {
			throw new Error('Failed to fetch movie data');
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching movie data:', error);
		return null;
	}
};

// Function to fetch screen data based on time_id
export const fetchScreenData = async (time_id: number) => {
	try {
		const response = await fetch(`/server/route/schedule/time/${time_id}`);
		if (!response.ok) {
			throw new Error('Failed to fetch screen data');
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching screen data:', error);
		return null;
	}
};

// Function to fetch and combine schedule data
export const fetchSchedule = async (
	movie_id: number,
	time_id: number
): Promise<Schedule | null> => {
	try {
		const movieData = await fetchMovieData(movie_id);
		const screenData = await fetchScreenData(time_id);

		if (!movieData || !screenData) {
			return null;
		}

		const totalcapacity = screenData.screen_capacity;
		const schedule_id = totalcapacity - movieData.totalReservations;

		return { schedule_id, totalcapacity };
	} catch (error) {
		console.error('Error fetching schedule:', error);
		return null;
	}
};

export const SeatAvailability = ({
	movie_id,
	time_id,
}: {
	movie_id: number;
	time_id: number;
}) => {
	const [schedule, setSchedule] = useState<Schedule | null>(null);

	useEffect(() => {
		const loadSchedule = async () => {
			const fetchedSchedule = await fetchSchedule(movie_id, time_id);
			if (fetchedSchedule) {
				setSchedule(fetchedSchedule);
			} else {
				console.error('Failed to fetch schedule data');
				setSchedule(null);
			}
		};
		loadSchedule();
	}, [movie_id, time_id]);

	if (!schedule) {
		return <div>座席情報を取得中...</div>;
	}

	return (
		<div>
			{schedule.schedule_id !== null ? (
				schedule.schedule_id === 0 ? (
					<p>満席</p>
				) : (
					<p>残り {schedule.schedule_id} 席</p>
				)
			) : (
				<p>座席情報がありません</p>
			)}
		</div>
	);
};

export default SeatAvailability;
