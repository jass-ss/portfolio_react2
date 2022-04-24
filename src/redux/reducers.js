import { combineReducers } from 'redux';

const initVids = [];
const initText = [];

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case 'YOUTUBE_START':
			return { ...state };

		case 'YOUTUBE_SUCCESS':
			return { ...state, youtube: action.payload };

		case 'YOUTUBE_ERROR':
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

const allReducer = combineReducers({
	youtubeReducer,
});

export default allReducer;
