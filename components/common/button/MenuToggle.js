import styled from 'styled-components';

const MenuToggle = styled.div`
	align-items: center;
	cursor: pointer;
	display: ${({ menuActive }) => (menuActive ? 'none' : 'flex')};
	height: 26px;
	flex-direction: row;
	margin: 7px 0 7px 30px;
	background: transparent;
	border-radius: 100%;
	width: 26px;

	img,
	svg {
		margin: 0 auto;
	}
`;

export default MenuToggle;
