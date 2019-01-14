import { connect } from 'react-redux';

import { toggleContrast } from '../actions';
import { Home } from '../components/fragments';
import { Caroussel } from '../components/common/content';

const Index = ({ onContrast }) => (
	<Caroussel vertical dots={['Home']} handleContrast={onContrast}>
		<Home />
	</Caroussel>
);

const mapDispatchToProps = dispatch => ({
	onContrast: contrast => dispatch(toggleContrast(contrast))
});

export default connect(
	null,
	mapDispatchToProps
)(Index);
