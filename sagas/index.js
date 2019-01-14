import { all } from 'redux-saga/effects';
import rootCareerSaga from './careerSaga';
import rootSelectedOffersSaga from './selectedOffersSaga';
import rootTestimonialSaga from './TestimonialsSagas';

export default function* rootSaga() {
	yield all([rootCareerSaga(), rootSelectedOffersSaga(), rootTestimonialSaga()]);
}
