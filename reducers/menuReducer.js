const initialState = {
	isOpen: false
};

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_MENU':
			return { ...state.menu, isOpen: action.payload };
		default:
			return state;
	}
};

export default menuReducer;
