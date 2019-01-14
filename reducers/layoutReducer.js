const initialState = {
	hasContrast: false
};

const layoutReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_CONTRAST':
			return { ...state.layout, hasContrast: action.payload };
		default:
			return state;
	}
};

export default layoutReducer;
