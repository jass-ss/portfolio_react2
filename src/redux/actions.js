export const vids = (data) => {
	return {
		type: 'YOUTUBE',
		payload: data,
	};
};

export const FLICKR = {
	start: 'FLICKR_START',
	success: 'FLICKR_SUCCESS',
	error: 'FLICKR_ERROR',
};

export const YOUTUBE = {
	start: 'YOUTUBE_START',
	success: 'YOUTUBE_SUCCESS',
	error: 'YOUTUBE_ERROR',
};
