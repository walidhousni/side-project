import { put, all, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { GET_TESTIMONIALS, GET_TESTIMONIALS_DONE, GET_TESTIMONIALS_FAILED } from '../constants';
import { TESTIMONIALS_API } from '../Config';

function* watchTestimonials() {
	yield takeLatest(GET_TESTIMONIALS, TestimonialSaga);
}

function* TestimonialSaga() {
	try {
		const res = yield call(getTestimonialsAPI);
		console.log(res);
		yield put({
			type: GET_TESTIMONIALS_DONE,
			data: res
		});
	} catch (err) {
		yield put({
			type: GET_TESTIMONIALS_FAILED,
			error: err
		});
	}
}

const getTestimonialsAPI = () =>
	axios
		.get(`${TESTIMONIALS_API}`, {
			headers: {
				Accept: 'application/json'
			}
		})
		.then(res => res.data)
		.catch(err => {
			throw err;
		});

export default function* rootTestimonialSaga() {
	yield all([watchTestimonials()]);
}
