import { GET_TESTIMONIALS_DONE, GET_TESTIMONIALS_FAILED } from '../constants';

const initialState = {
	testimonials: [],
	error: ''
};

const testimonialReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TESTIMONIALS_DONE:
			return { ...state, testimonials: action.data };
		case GET_TESTIMONIALS_FAILED:
			return { ...state, error: action.error };
		default:
			return state;
	}
};

export default testimonialReducer;
