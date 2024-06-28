export const fetchCategory = async () => {
	try {
		const response = await fetch('../server/route/category');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Failed to fetch category', error);
		return [];
	}
};
