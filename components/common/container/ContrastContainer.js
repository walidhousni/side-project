import styled from 'styled-components';

const ContrastContainer = styled.div`
	height: 80px;

	*,
	.quiz-link,
	.language-link {
		color: ${({ contrast, theme }) => (contrast ? theme.colors.white : theme.colors.black)};
	}

	svg g {
		fill: ${({ contrast, theme }) => (contrast ? theme.colors.white : null)};
	}
`;

export default ContrastContainer;
