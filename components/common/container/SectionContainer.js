import styled from 'styled-components';

const SectionContainer = styled.section`
	background-color: ${({ backgroundColor }) => backgroundColor};
	background-image: url(${({ backgroundImage }) => backgroundImage});
	background-position: center;
	background-size: cover;
	padding: 80px 80px 100px 40px;
	height: 100%;
	color: ${({ theme }) => theme.colors.black};

	&.has-contrast * {
		color: ${({ theme }) => theme.colors.white};
	}

	a:hover {
		color: #fff;
		text-decoration: underline;
	}
`;

export default SectionContainer;
