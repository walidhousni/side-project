import { combineReducers } from 'redux';

import layoutReducer from './layoutReducer';
import menuReducer from './menuReducer';
import testimonialReducer from './testimonialReducer';
import careerReducer from './careerReducer';
import selectedOffersReducer from './selectedOffersReducer';

const rootReducer = combineReducers({
	menu: menuReducer,
	layout: layoutReducer,
	testimonials: testimonialReducer,
	career: careerReducer,
	offers: selectedOffersReducer
});

export default rootReducer;
