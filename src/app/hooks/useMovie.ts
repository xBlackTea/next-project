export const fetchMovie = async () => {
	try {
		const response = await fetch('../server/route/movie');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Failed not Movie', error);
		return null;
	}
};
