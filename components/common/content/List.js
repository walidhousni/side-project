import styled from 'styled-components';

const List = styled.ul`
	margin: 0;
	padding: 0;
	z-index: 9;
	font-size: 18px;
	text-align: left;
	height: fit-content !important;

	${props => props.length === 1 && 'display: none !important;'}
	${props => (props.vertical ? 'width: 200px !important;' : 'width: auto !important;')}
	${props => (props.vertical ? 'top: 280px;' : 'top: -50px;')}
	${props => props.vertical && 'transform: rotate(90deg);'}
	${props => props.vertical && 'right: -46px;'}

	span {
		display: inline-block;
		margin-right: 20px;
		font-family: Roboto;
		font-size: 12px;
		font-weight: normal;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		vertical-align: middle;
	}
`;

export default List;
