import styled from 'styled-components';

const Arrow = styled.div`
	width: 18px;
	height: 18px;
	position: absolute;
	transform: rotate(${({ prev }) => (prev ? '-90deg' : '90deg')});
	top: ${({ prev }) => (prev ? '90px' : '140px')};
	${({ prev }) => prev && 'left: auto'};
	${({ hidden }) => (hidden ? 'visibility: hidden' : null)};
	right: 44px;
	z-index: 3;

	&::after,
	&::before {
		display: none;
	}
`;
export default Arrow;
