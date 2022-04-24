import { takeLatest, call, all, fork, put } from 'redux-saga/effects';
import { getYoutube } from './api';
import { FLICKR, YOUTUBE } from './actions';

export default function* rootSaga() {
	yield all([fork(callYoutube)]);
}

export function* callYoutube() {
	console.log('???');
	yield takeLatest(YOUTUBE.start, returnYoutube);
}
export function* returnYoutube() {
	try {
		const response = yield call(getYoutube);
		yield put({ type: YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: YOUTUBE.error, payload: err });
	}
}
