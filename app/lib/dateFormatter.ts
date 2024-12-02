const formatDate = (isoDate: string): string => {
	const date = new Date(isoDate);

	return new Intl.DateTimeFormat('en-US', {
		weekday: 'long', // e.g., "Thursday"
		year: 'numeric', // e.g., "2024"
		month: 'long', // e.g., "December"
		day: 'numeric', // e.g., "12"
	}).format(date);
};
  
export default formatDate;  