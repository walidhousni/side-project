import { GET_SELECTED_OFFERS } from '../constants';

const getSelectedOffers = id => ({
	type: GET_SELECTED_OFFERS,
	id
});

export default getSelectedOffers;
