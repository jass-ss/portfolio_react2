import { combineReducers } from 'redux';

const initVids = [];
const initText = [];

const vidReducer = (state = { initVids: [] }, action) => {
	switch (action.type) {
		case 'YOUTUBE':
			return { ...state, vid: action.payload };
		default:
			return state;
	}
};

const textReducer = (state = initText, action) => {
	switch (action.type) {
		case 'DUMMY_TEXT':
			return { ...state, dummy: action.payload };
		default:
			return state;
	}
};

const allReducer = combineReducers({
	vidReducer,
	textReducer,
});

export default allReducer;
