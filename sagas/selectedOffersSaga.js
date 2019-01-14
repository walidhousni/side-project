import { put, all, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { GET_SELECTED_OFFERS, GET_SELECTED_OFFERS_SUCCESS, GET_SELECTED_OFFERS_FAILED } from '../constants';
import { SELECTED_OFFERS_API } from '../Config';

function* watchSelectedOffers() {
	yield takeLatest(GET_SELECTED_OFFERS, SelectedOffersSaga);
}

function* SelectedOffersSaga({ id }) {
	try {
		const result = yield call(getSelectedOffersAPI, id);
		console.log(result);
		yield put({
			type: GET_SELECTED_OFFERS_SUCCESS,
			data: result
		});
	} catch (err) {
		yield put({
			type: GET_SELECTED_OFFERS_FAILED,
			error: err
		});
	}
}

const getSelectedOffersAPI = id =>
	axios
		.get(`${SELECTED_OFFERS_API}?category_id=${id}`, {
			headers: {
				Accept: 'application/json'
			}
		})
		.then(response => response.data)
		.catch(err => {
			throw err;
		});

export default function* rootSelectedOffersSaga() {
	yield all([watchSelectedOffers()]);
}
