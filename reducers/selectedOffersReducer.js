import { GET_SELECTED_OFFERS_SUCCESS, GET_SELECTED_OFFERS_FAILED } from '../constants';

const initialState = {
	selectedOffers: [],
	error: ''
};

const selectedOffersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SELECTED_OFFERS_SUCCESS:
			return { ...state, selectedOffers: action.data };
		case GET_SELECTED_OFFERS_FAILED:
			return { ...state, error: action.error };
		default:
			return state;
	}
};

export default selectedOffersReducer;
