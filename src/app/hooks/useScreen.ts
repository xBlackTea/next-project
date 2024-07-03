export const fetchScreen = async () => {
	try {
		const response = await fetch('../server/route/schedule');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Failed not screen', error);
		return null;
	}
};
