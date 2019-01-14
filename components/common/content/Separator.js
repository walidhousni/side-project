import styled from 'styled-components';

const Separator = styled.hr`
	background-color: ${({ color }) => color || '#eee'};
	height: 1px;
	border: 0;
	margin: 60px 0 20px;
`;

export default Separator;
