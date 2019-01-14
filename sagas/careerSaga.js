import { put, all, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILED } from '../constants';
import { CATEGORIES_API } from '../Config';

function* watchCareer() {
	yield takeLatest(GET_CATEGORIES, CareerSaga);
}

function* CareerSaga() {
	try {
		const result = yield call(getCategoriesAPI);
		console.log(result);
		yield put({
			type: GET_CATEGORIES_SUCCESS,
			data: result
		});
	} catch (err) {
		yield put({
			type: GET_CATEGORIES_FAILED,
			error: err
		});
	}
}

const getCategoriesAPI = () =>
	axios
		.get(`${CATEGORIES_API}`, {
			headers: {
				Accept: 'application/json'
			}
		})
		.then(response => response.data)
		.catch(err => {
			throw err;
		});

export default function* rootCareerSaga() {
	yield all([watchCareer()]);
}
