import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILED } from '../constants';

const initialState = {
	categories: [],
	error: ''
};

const careerReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORIES_SUCCESS:
			return { ...state, categories: action.data };
		case GET_CATEGORIES_FAILED:
			return { ...state, error: action.error };
		default:
			return state;
	}
};

export default careerReducer;
