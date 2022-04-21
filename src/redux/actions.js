export const vids = (data) => {
	return {
		type: 'YOUTUBE',
		payload: data,
	};
};

export const dummy = (data) => {
	return {
		type: 'DUMMY_TEXT',
		payload: data,
	};
};
