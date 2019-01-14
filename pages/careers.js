import { connect } from 'react-redux';

import { toggleContrast } from '../actions';
import { Contact, YourFuture } from '../components/fragments';
import { Caroussel } from '../components/common/content';

const Index = ({ onContrast }) => (
	<Caroussel vertical dots={['Your Future', 'Contact']} handleContrast={onContrast}>
		<YourFuture />
		<Contact />
	</Caroussel>
);

const mapDispatchToProps = dispatch => ({
	onContrast: contrast => dispatch(toggleContrast(contrast))
});

export default connect(
	null,
	mapDispatchToProps
)(Index);
