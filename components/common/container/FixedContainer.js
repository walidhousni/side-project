import styled from 'styled-components';

const FixedContainer = styled.div`
	bottom: ${props => (props.bottom ? 0 : null)};
	left: ${props => (props.left ? 0 : null)};
	padding: ${props => (props.primary ? '20px 40px' : null)};
	position: fixed;
	right: ${props => (props.right ? 0 : null)};
	top: ${props => (props.top ? 0 : null)};
	width: 100%;
	z-index: 2;

	&.dominate {
		z-index: 9999;
	}

	&.header {
		min-width: 500px;
		width: 50%;
		left: auto;
		right: 0;
	}
`;

export default FixedContainer;
