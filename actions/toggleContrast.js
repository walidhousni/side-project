import { TOGGLE_CONTRAST } from '../constants';

const toggleContrast = hasContrast => ({
	type: TOGGLE_CONTRAST,
	payload: hasContrast
});

export default toggleContrast;
