import { connect } from 'react-redux';

import { toggleContrast } from '../actions';
import { Caroussel } from '../components/common/content';
import { Blog, Ambitions, History, BuisnessMarket } from '../components/fragments';

const Mafia = ({ onContrast }) => (
	<Caroussel vertical dots={['About', 'Ambitions', 'Blog']} handleContrast={onContrast}>
		<History />
		<Ambitions />
		<Blog />
		<BuisnessMarket />
	</Caroussel>
);

const mapDispatchToProps = dispatch => ({
	onContrast: contrast => dispatch(toggleContrast(contrast))
});

export default connect(
	null,
	mapDispatchToProps
)(Mafia);
